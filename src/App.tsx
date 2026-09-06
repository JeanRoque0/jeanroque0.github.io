import { profile } from "./data/profile";
import { pages, pageHref } from "./data/site";
import type { PageId } from "./data/site";
import { Overview } from "./pages/Overview";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Education } from "./pages/Education";
import { Contact } from "./pages/Contact";
import "./App.css";

const views = {
  sobre: Overview,
  experiencia: Experience,
  projetos: Projects,
  servicos: Services,
  formacao: Education,
  contato: Contact,
};

export default function App({ activePage = "sobre" }: { activePage?: PageId }) {
  const View = views[activePage];
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="portfolio-app">
        <aside className="sidebar">
          <a className="sidebar-profile" href={pageHref("sobre")}>
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={72}
              height={72}
              fetchPriority="high"
            />
            <strong>{profile.name}</strong>
            <span>Backend Developer & DevOps</span>
          </a>
          <p className="sidebar-location">{profile.location}</p>
          <nav aria-label="Navegação principal">
            {pages.map((page) => (
              <a
                key={page.id}
                href={pageHref(page.id)}
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
        <main id="conteudo" className="workspace" tabIndex={-1}>
          <header className="workspace-top">
            <span>
              Portfólio /{" "}
              <strong>
                {pages.find((page) => page.id === activePage)?.label}
              </strong>
            </span>
            <a href={pageHref("contato")}>Vamos conversar ↗</a>
          </header>
          <div className="page-content">
            <View />
          </div>
          <footer className="workspace-footer">
            {profile.name} · Backend & DevOps
          </footer>
        </main>
      </div>
    </>
  );
}
