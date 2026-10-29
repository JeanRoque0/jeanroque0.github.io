import { profile } from "../data/profile";

export function Contact() {
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
      <section
        className="contact wrapper"
        id="contato"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">CONTATO</p>
          <h1 id="contact-title" className="page-title">
            Seu próximo desafio.
            <br />
            <span>Vamos conversar?</span>
          </h1>
          <p>
            Para oportunidades de DevOps Engineer Pleno e projetos de AWS,
            automação, CI/CD, observabilidade e operação em produção.
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
    </>
  );
}
