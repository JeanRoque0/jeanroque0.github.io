export const siteUrl =
  import.meta.env.VITE_SITE_URL || "https://jeanroque0.github.io/";
export const pages = [
  {
    id: "sobre",
    path: "",
    label: "Visão geral",
    icon: "⌂",
    title: "Jean Roque — Backend Developer & Software Engineer",
    description:
      "Desenvolvedor Backend com experiência em Node.js, TypeScript, PHP, Go e AWS. Conheça a trajetória, os projetos e os serviços de Jean Roque.",
  },
  {
    id: "experiencia",
    path: "experiencia/",
    label: "Experiência",
    icon: "↗",
    title: "Experiência profissional — Jean Roque",
    description:
      "Trajetória de Jean Roque na Pigz, MB Labs e A&3 Tecnologia: desenvolvimento backend, plataformas financeiras, varejo, delivery e DevOps.",
  },
  {
    id: "projetos",
    path: "projetos/",
    label: "Projetos",
    icon: "⌘",
    title: "Projetos — Jean Roque",
    description:
      "Conheça o Swing Music Playbook de Jean Roque: implantação automatizada de um music player self-hosted em Linux com Ansible.",
  },
  {
    id: "servicos",
    path: "servicos/",
    label: "Serviços",
    icon: "◇",
    title: "Serviços de Backend, APIs e integrações — Jean Roque",
    description:
      "Desenvolvimento e evolução de APIs backend e integração entre sistemas e serviços. Converse com Jean Roque sobre seu projeto.",
  },
  {
    id: "formacao",
    path: "formacao/",
    label: "Formação",
    icon: "▤",
    title: "Formação e certificação AWS — Jean Roque",
    description:
      "AWS Certified Cloud Practitioner, formação Full Cycle e estudos na DIO. Consulte a credencial, os conteúdos e os idiomas de Jean Roque.",
  },
  {
    id: "contato",
    path: "contato/",
    label: "Contato",
    icon: "↗",
    title: "Contato para oportunidades e projetos — Jean Roque",
    description:
      "Entre em contato com Jean Roque para oportunidades de Backend e Engenharia de Software ou projetos freelance. E-mail, LinkedIn e GitHub.",
  },
] as const;
export type PageId = (typeof pages)[number]["id"];
export function pageHref(id: PageId) {
  return `${import.meta.env.BASE_URL}${pages.find((page) => page.id === id)!.path}`;
}
export function pageFromPath(pathname: string): PageId {
  const relative = pathname.startsWith(import.meta.env.BASE_URL)
    ? pathname.slice(import.meta.env.BASE_URL.length)
    : pathname.replace(/^\//, "");
  return (
    pages.find((page) => page.path === relative.replace(/index\.html$/, ""))
      ?.id ?? "sobre"
  );
}
