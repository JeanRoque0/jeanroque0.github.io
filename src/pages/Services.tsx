import { profile } from "../data/profile";
import { services } from "../data/services";

export function Services() {
  return (
    <>
      <section
        className="section wrapper"
        id="servicos"
        aria-labelledby="services-title"
      >
        <p className="eyebrow">TRABALHE COMIGO</p>
        <h1 id="services-title" className="page-title">
          Como posso ajudar seu projeto.
        </h1>
        <p className="section-intro">
          O ponto de partida é entender seu problema e definir uma entrega com
          escopo claro.
        </p>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h2>{service.title}</h2>
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
          Escopo, prazo e investimento são definidos após a conversa inicial.
        </p>
      </section>
    </>
  );
}
