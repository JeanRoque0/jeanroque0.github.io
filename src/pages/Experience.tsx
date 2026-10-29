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
            Infraestrutura, entrega
            <br />e operação.
          </h1>
          <p>
            Atuação em DevOps na A&3 Tecnologia e MB Labs, apoiada por uma base
            em desenvolvimento backend e engenharia de software. Cargos e
            períodos refletem minha trajetória profissional.
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
