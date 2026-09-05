import { useEffect, useRef, useState } from "react";
import type { Project } from "./data/profile";
import {
  profile,
  projects,
  experiences,
  education,
  credentials,
  languages,
} from "./data/profile";
import "./App.css";

const filters = [
  "Todos",
  ...new Set(projects.map((project) => project.category)),
];

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const pages = [
  { id: "sobre", label: "Visão geral", icon: "⌂" },
  { id: "experiencia", label: "Experiência", icon: "↗" },
  { id: "projetos", label: "Projetos", icon: "⌘" },
  { id: "servicos", label: "Serviços", icon: "◇" },
  { id: "formacao", label: "Formação", icon: "▤" },
  { id: "contato", label: "Contato", icon: "↗" },
];
const services = [
  {
    title: "APIs e integrações",
    description:
      "Desenvolvimento e evolução de APIs backend e integração entre sistemas e serviços.",
    deliverables: [
      "Levantamento dos fluxos e requisitos",
      "Implementação de endpoints e integrações",
      "Documentação técnica da entrega",
    ],
  },
  {
    title: "Automação e infraestrutura",
    description:
      "Provisionamento de aplicações, configuração de ambientes Linux e automação de deploys.",
    deliverables: [
      "Análise do ambiente e das dependências",
      "Automação com Ansible, Docker ou Terraform",
      "Orientações para operação e manutenção",
    ],
  },
  {
    title: "Performance e diagnóstico",
    description:
      "Investigação de gargalos em APIs, consultas e ambientes para orientar melhorias técnicas.",
    deliverables: [
      "Diagnóstico do problema e das métricas",
      "Plano de melhorias priorizado",
      "Implementação e validação do escopo acordado",
    ],
  },
];
function currentPage() {
  const hash = window.location.hash.slice(1);
  return pages.some((page) => page.id === hash) ? hash : "sobre";
}

function App() {
  const [activePage, setActivePage] = useState(currentPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const update = () => setActivePage(currentPage());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    if (selectedProject) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [selectedProject]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);
  const [filter, setFilter] = useState("Todos");
  const visibleProjects = projects.filter(
    (project) => filter === "Todos" || project.category === filter,
  );
  const contacts = [
    {
      label: "E-mail",
      detail: profile.email,
      url: profile.email ? `mailto:${profile.email}` : "",
    },
    { label: "GitHub", detail: "Código e repositórios", url: profile.github },
    {
      label: "LinkedIn",
      detail: "Minha trajetória profissional",
      url: profile.linkedin,
    },
  ].filter((contact) => contact.url);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="portfolio-app">
        <aside className="sidebar">
          <a className="sidebar-profile" href="#sobre">
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={72}
              height={72}
            />
            <strong>{profile.name}</strong>
            <span>Backend Developer & DevOps</span>
          </a>
          <p className="sidebar-location">{profile.location}</p>
          <nav aria-label="Navegação principal">
            {pages.map((page) => (
              <a
                key={page.id}
                href={`#${page.id}`}
                aria-current={activePage === page.id ? "page" : undefined}
              >
                <span aria-hidden="true">{page.icon}</span>
                {page.label}
              </a>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <p>Do código à produção.</p>
          </div>
        </aside>
        <main id="conteudo" className="workspace">
          <header className="workspace-top">
            <span>
              Portfólio /{" "}
              <strong>
                {pages.find((page) => page.id === activePage)?.label}
              </strong>
            </span>
            <a href="#contato">Vamos conversar ↗</a>
          </header>
          <div className="page-content">
            <div hidden={activePage !== "sobre"}>
              <section className="overview" aria-labelledby="overview-title">
                <p className="eyebrow">JEAN ROQUE / BACKEND & DEVOPS</p>
                <h1 id="overview-title">
                  Experiência em código.
                  <br />
                  <span>Contexto de produção.</span>
                </h1>
                <p>{profile.description}</p>
                <div className="audience-paths">
                  <a href="#experiencia">
                    <span>PARA RECRUTADORES</span>
                    <h2>
                      Conheça minha trajetória <b aria-hidden="true">↗</b>
                    </h2>
                    <p>
                      Explore cargos, competências e atuação em produtos
                      financeiros, varejo e delivery.
                    </p>
                  </a>
                  <a href="#servicos">
                    <span>PARA CLIENTES</span>
                    <h2>
                      Vamos tirar seu projeto do papel{" "}
                      <b aria-hidden="true">↗</b>
                    </h2>
                    <p>
                      Veja como posso ajudar com backend, integrações,
                      infraestrutura e automação.
                    </p>
                  </a>
                </div>
                <div className="overview-facts">
                  <span>
                    <strong>Desde 2022</strong>Trajetória profissional
                  </span>
                  <span>
                    <strong>Backend + DevOps</strong>Código e infraestrutura
                  </span>
                  <a href="#formacao">
                    <strong>AWS Certified</strong>Ver formação e credencial ↗
                  </a>
                </div>
              </section>
              <section
                className="section wrapper"
                id="sobre"
                aria-labelledby="about-title"
              >
                <div className="section-heading">
                  <p className="eyebrow">ESPECIALIDADES</p>
                  <h2 id="about-title">
                    Do endpoint
                    <br />à infraestrutura.
                  </h2>
                  <p>{profile.about}</p>
                </div>
                <div className="areas">
                  {profile.areas.map((area) => (
                    <article className="area" key={area.number}>
                      <span className="area-number">{area.number} /</span>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                      <Tags items={area.tags} />
                    </article>
                  ))}
                </div>
              </section>
            </div>
            <div hidden={activePage !== "experiencia"}>
              <section
                className="section wrapper"
                id="experiencia"
                aria-labelledby="experience-title"
              >
                <div className="section-heading">
                  <p className="eyebrow">TRAJETÓRIA PROFISSIONAL</p>
                  <h2 id="experience-title">
                    Código, produto
                    <br />e operação.
                  </h2>
                  <p>
                    Uma trajetória que passa por desenvolvimento backend,
                    engenharia de software e DevOps, com participação em todo o
                    ciclo de entrega.
                  </p>
                </div>
                <div className="timeline">
                  {experiences.map((experience) => (
                    <article className="experience" key={experience.company}>
                      <div className="experience-meta">
                        <h3>{experience.company}</h3>
                        <p className="experience-period">{experience.period}</p>
                      </div>
                      <div className="experience-roles">
                        {experience.roles.map((role) => (
                          <section
                            className="experience-body"
                            key={`${role.role}-${role.period}`}
                            aria-label={`${role.role} na ${experience.company}`}
                          >
                            <h4>{role.role}</h4>
                            <p className="role-period">{role.period}</p>
                            <p>{role.description}</p>
                            {role.highlights.length > 0 && (
                              <ul className="experience-highlights">
                                {role.highlights.map((highlight) => (
                                  <li key={highlight}>{highlight}</li>
                                ))}
                              </ul>
                            )}
                            <Tags items={role.tags} />
                          </section>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
            <div hidden={activePage !== "projetos"}>
              {projects.length > 0 && (
                <section
                  className="section wrapper"
                  id="projetos"
                  aria-labelledby="projects-title"
                >
                  <div className="projects-heading">
                    <div>
                      <p className="eyebrow">PROJETOS & ESTUDOS</p>
                      <h2 id="projects-title">Engenharia na prática.</h2>
                    </div>
                    <div
                      className="filters"
                      role="group"
                      aria-label="Filtrar projetos"
                    >
                      {filters.map((item) => (
                        <button
                          key={item}
                          aria-pressed={filter === item}
                          onClick={() => setFilter(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="project-grid" aria-live="polite">
                    {visibleProjects.length ? (
                      visibleProjects.map((project) => (
                        <article className="project-card" key={project.title}>
                          <p className="eyebrow">{project.category}</p>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <Tags items={project.tags} />
                          <button
                            className="project-open"
                            onClick={() => setSelectedProject(project)}
                            aria-haspopup="dialog"
                          >
                            Explorar projeto <span aria-hidden="true">↗</span>
                          </button>
                        </article>
                      ))
                    ) : (
                      <p className="empty-projects">
                        Nenhum projeto nesta categoria por enquanto.
                      </p>
                    )}
                  </div>
                </section>
              )}
            </div>
            <div hidden={activePage !== "servicos"}>
              <section
                className="section wrapper"
                id="servicos"
                aria-labelledby="services-title"
              >
                <p className="eyebrow">TRABALHE COMIGO</p>
                <h2 id="services-title">Como posso ajudar seu projeto.</h2>
                <p className="section-intro">
                  O ponto de partida é entender seu problema e definir uma
                  entrega com escopo claro.
                </p>
                <div className="service-list">
                  {services.map((service, index) => (
                    <article className="service-card" key={service.title}>
                      <span className="eyebrow">0{index + 1}</span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <details>
                        <summary>Ver possibilidades de entrega</summary>
                        <ul>
                          {service.deliverables.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </details>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent("Projeto freelance: " + service.title)}&body=${encodeURIComponent("Olá, Jean!\n\nPreciso de ajuda com: \nContexto do projeto: \nPrazo desejado: \nOrçamento previsto (se houver): \n")}`}
                      >
                        Conversar sobre este serviço ↗
                      </a>
                    </article>
                  ))}
                </div>
                <p className="scope-note">
                  Escopo, prazo e investimento são definidos após a conversa
                  inicial.
                </p>
              </section>
            </div>
            <div hidden={activePage !== "formacao"}>
              <section
                className="section wrapper"
                id="formacao"
                aria-labelledby="learning-title"
              >
                <div className="learning-heading">
                  <p className="eyebrow">FORMAÇÃO & CERTIFICAÇÃO</p>
                  <h2 id="learning-title">
                    Formação técnica, aprendizado contínuo.
                  </h2>
                </div>
                <div className="learning-records">
                  {credentials.map((credential) => (
                    <article className="learning-row" key={credential.title}>
                      <div className="learning-monogram" aria-hidden="true">
                        AWS
                      </div>
                      <div className="learning-content">
                        <p className="learning-label">
                          {credential.issuer} · {credential.type}
                        </p>
                        <h3>{credential.title}</h3>
                        <p className="learning-date">
                          Emitido em {credential.issued} · Expira em{" "}
                          {credential.expires}
                        </p>
                        <p className="credential-id">
                          Código da credencial <span>{credential.id}</span>
                        </p>
                      </div>
                      <a
                        className="learning-action"
                        href={credential.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Exibir credencial ↗
                      </a>
                    </article>
                  ))}
                  {education.map((course) => (
                    <article className="learning-row" key={course.institution}>
                      <div className="learning-monogram" aria-hidden="true">
                        {course.institution === "Full Cycle" ? "FC" : "DIO"}
                      </div>
                      <div className="learning-content">
                        <p className="learning-label">{course.institution}</p>
                        <h3>{course.title}</h3>
                        <p className="learning-date">{course.period}</p>
                        <p className="learning-description">
                          {course.description}
                        </p>
                        <Tags items={course.tags} />
                        {course.topics.length > 0 && (
                          <details className="learning-topics">
                            <summary>Ver conteúdos da formação</summary>
                            <p>{course.topics.join(" · ")}</p>
                          </details>
                        )}
                      </div>
                      {course.url && (
                        <a
                          className="learning-action"
                          href={course.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Perfil na DIO ↗
                        </a>
                      )}
                    </article>
                  ))}
                  <div className="learning-languages">
                    <h3>Idiomas</h3>
                    <dl>
                      {languages.map((language) => (
                        <div key={language.name}>
                          <dt>{language.name}</dt>
                          <dd>{language.level}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </section>
            </div>
            <div hidden={activePage !== "contato"}>
              <section
                className="contact wrapper"
                id="contato"
                aria-labelledby="contact-title"
              >
                <div>
                  <p className="eyebrow">CONTATO</p>
                  <h2 id="contact-title">
                    Seu próximo desafio.
                    <br />
                    <span>Vamos conversar?</span>
                  </h2>
                  <p>
                    Para conversar sobre backend, engenharia de software e os
                    desafios de colocar sistemas em produção.
                  </p>
                </div>
                <div className="contact-links">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.url}
                      {...(contact.label !== "E-mail"
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <span>
                        {contact.label}
                        <small>{contact.detail}</small>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <footer className="workspace-footer">
            © {new Date().getFullYear()} {profile.name} · Backend & DevOps
          </footer>
        </main>
      </div>
      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-detail-title"
        onCancel={() => setSelectedProject(null)}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <div className="dialog-top">
              <p className="eyebrow">{selectedProject.category}</p>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar detalhes do projeto"
              >
                ✕
              </button>
            </div>
            <h2 id="project-detail-title">{selectedProject.title}</h2>
            {selectedProject.period && (
              <p className="project-period">{selectedProject.period}</p>
            )}
            <p>{selectedProject.description}</p>
            <h3>O que o projeto explora</h3>
            <ul>
              {selectedProject.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Tags items={selectedProject.tags} />
            {selectedProject.note && (
              <p className="project-note">{selectedProject.note}</p>
            )}
            <a
              className="button"
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
            >
              Abrir repositório no GitHub ↗
            </a>
          </>
        )}
      </dialog>
    </>
  );
}
export default App;
