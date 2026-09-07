import { profile } from "../data/profile";
import { pageHref } from "../data/site";
import { Tags } from "../components/Tags";

export function Overview() {
  return (
    <>
      <section className="overview" aria-labelledby="overview-title">
        <p className="eyebrow">JEAN ROQUE / BACKEND & SOFTWARE ENGINEERING</p>
        <h1 id="overview-title">
          APIs, integrações e sistemas.
          <br />
          <span>Backend é meu foco.</span>
        </h1>
        <p>{profile.description}</p>
        <div className="audience-paths">
          <a href={pageHref("experiencia")}>
            <span>PARA RECRUTADORES</span>
            <h2>
              Conheça minha trajetória <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Conheça minha experiência para oportunidades de Backend Developer,
              Backend Engineer e Software Engineer.
            </p>
          </a>
          <a href={pageHref("servicos")}>
            <span>PARA CLIENTES</span>
            <h2>
              Vamos tirar seu projeto do papel <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Veja como posso ajudar com desenvolvimento de APIs e integração
              entre sistemas e serviços.
            </p>
          </a>
        </div>
        <div className="overview-facts">
          <span>
            <strong>Desde 2022</strong>Trajetória profissional
          </span>
          <span>
            <strong>Node.js · PHP · Go</strong>Desenvolvimento backend
          </span>
          <a href={pageHref("formacao")}>
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
            Da regra de negócio
            <br />à arquitetura.
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
        <details className="backend-background">
          <summary>Experiência complementar em produção e DevOps</summary>
          <p>
            Minha experiência em AWS, Docker, Linux, automação e observabilidade
            complementa o desenvolvimento backend. Ela me ajuda a considerar
            deploy, performance e confiabilidade nas decisões de código.
          </p>
          <Tags
            items={[
              "AWS",
              "Docker",
              "Linux",
              "Terraform",
              "Ansible",
              "CI/CD",
              "CloudWatch",
            ]}
          />
        </details>
      </section>
    </>
  );
}
