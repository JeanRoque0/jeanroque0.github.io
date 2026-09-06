import { experiences } from "../data/profile";
import { Tags } from "../components/Tags";

export function Experience() {
  return (
    <>
      <section
        className="section wrapper"
        id="experiencia"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <p className="eyebrow">TRAJETÓRIA PROFISSIONAL</p>
          <h1 id="experience-title" className="page-title">
            Código, produto
            <br />e operação.
          </h1>
          <p>
            Uma trajetória que passa por desenvolvimento backend, engenharia de
            software e DevOps, com participação em todo o ciclo de entrega.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="experience" key={experience.company}>
              <div className="experience-meta">
                <h2>{experience.company}</h2>
                <p className="experience-period">{experience.period}</p>
              </div>
              <div className="experience-roles">
                {experience.roles.map((role) => (
                  <section
                    className="experience-body"
                    key={`${role.role}-${role.period}`}
                    aria-label={`${role.role} na ${experience.company}`}
                  >
                    <h3>{role.role}</h3>
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
    </>
  );
}
