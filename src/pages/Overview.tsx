import { profile } from "../data/profile";
import { pageHref } from "../data/site";
import { Tags } from "../components/Tags";

export function Overview() {
  return (
    <>
      <section className="overview" aria-labelledby="overview-title">
        <p className="eyebrow">JEAN ROQUE / DEVOPS ENGINEER PLENO</p>
        <h1 id="overview-title">
          Infraestrutura e automação.
          <br />
          <span>DevOps em produção.</span>
        </h1>
        <p>{profile.description}</p>
        <div className="audience-paths">
          <a href={pageHref("experiencia")}>
            <span>PARA RECRUTADORES</span>
            <h2>
              Conheça minha trajetória <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Conheça minha experiência em DevOps, AWS, infraestrutura como código
              e sustentação de ambientes de produção.
            </p>
          </a>
          <a href={pageHref("servicos")}>
            <span>PARA CLIENTES</span>
            <h2>
              Vamos tirar seu projeto do papel <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Veja como posso ajudar com infraestrutura AWS, automação de deploys
              e observabilidade.
            </p>
          </a>
        </div>
        <div className="overview-facts">
          <span>
            <strong>Desde 2022</strong>Trajetória profissional
          </span>
          <span>
            <strong>AWS · Linux · Docker</strong>Infraestrutura e operação
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
            Da infraestrutura
            <br />à operação.
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
          <summary>Base em desenvolvimento backend</summary>
          <p>
            Minha experiência com APIs, integrações e sistemas financeiros, de
            varejo e delivery apoia o diagnóstico de falhas e a colaboração
            com desenvolvimento. Essa base ajuda a conectar aplicação,
            infraestrutura e performance.
          </p>
          <Tags
            items={[
              "Node.js",
              "TypeScript",
              "PHP",
              "Go",
              "PostgreSQL",
              "APIs REST",
            ]}
          />
        </details>
      </section>
    </>
  );
}
