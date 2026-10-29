export const siteUrl =
  import.meta.env.VITE_SITE_URL || "https://jeanroque0.github.io/";
export const pages = [
  {
    id: "sobre",
    path: "",
    label: "Visão geral",
    icon: "⌂",
    title: "Jean Roque — DevOps Engineer Pleno | AWS e Terraform",
    description:
      "DevOps Engineer Pleno com AWS, Terraform, Terragrunt, Ansible, Docker, Linux, CI/CD e observabilidade. Conheça a trajetória e os projetos de Jean Roque.",
  },
  {
    id: "experiencia",
    path: "experiencia/",
    label: "Experiência",
    icon: "↗",
    title: "Experiência profissional — Jean Roque",
    description:
      "DevOps na A&3 Tecnologia e MB Labs, modernização AWS na Pigz e base em backend. Conheça os cargos, períodos e resultados relatados por Jean Roque.",
  },
  {
    id: "projetos",
    path: "projetos/",
    label: "Projetos",
    icon: "⌘",
    title: "Projetos — Jean Roque",
    description:
      "Swing Music na AWS: EC2, S3, IAM, Terraform, Ansible, Docker e Linux. Conheça o projeto de automação de implantação de Jean Roque.",
  },
  {
    id: "servicos",
    path: "servicos/",
    label: "Serviços",
    icon: "◇",
    title: "Serviços de DevOps, AWS e automação — Jean Roque",
    description:
      "Infraestrutura AWS, automação com Terraform e Ansible, containers Docker, CI/CD e observabilidade. Converse com Jean Roque sobre seu ambiente.",
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
      "Entre em contato com Jean Roque para oportunidades de DevOps Engineer Pleno e projetos de AWS, CI/CD e automação. E-mail, LinkedIn e GitHub.",
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
