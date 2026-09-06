import { education, credentials, languages } from "../data/profile";
import { Tags } from "../components/Tags";

export function Education() {
  return (
    <>
      <section
        className="section wrapper"
        id="formacao"
        aria-labelledby="learning-title"
      >
        <div className="learning-heading">
          <p className="eyebrow">FORMAÇÃO & CERTIFICAÇÃO</p>
          <h1 id="learning-title" className="page-title">
            Formação técnica, aprendizado contínuo.
          </h1>
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
                <h2>{credential.title}</h2>
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
                <h2>{course.title}</h2>
                <p className="learning-date">{course.period}</p>
                <p className="learning-description">{course.description}</p>
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
            <h2>Idiomas</h2>
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
    </>
  );
}
