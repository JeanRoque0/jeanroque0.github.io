import { profile } from "../data/profile";
import { pageHref } from "../data/site";
import { Tags } from "../components/Tags";

export function Overview() {
  return (
    <>
      <section className="overview" aria-labelledby="overview-title">
        <p className="eyebrow">JEAN ROQUE / BACKEND & DEVOPS</p>
        <h1 id="overview-title">
          Experiência em código.
          <br />
          <span>Contexto de produção.</span>
        </h1>
        <p>{profile.description}</p>
        <div className="audience-paths">
          <a href={pageHref("experiencia")}>
            <span>PARA RECRUTADORES</span>
            <h2>
              Conheça minha trajetória <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Explore cargos, competências e atuação em produtos financeiros,
              varejo e delivery.
            </p>
          </a>
          <a href={pageHref("servicos")}>
            <span>PARA CLIENTES</span>
            <h2>
              Vamos tirar seu projeto do papel <b aria-hidden="true">↗</b>
            </h2>
            <p>
              Veja como posso ajudar com backend, integrações, infraestrutura e
              automação.
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
    </>
  );
}
