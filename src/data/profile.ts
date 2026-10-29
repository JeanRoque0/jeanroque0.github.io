const profilePhoto = `${import.meta.env.BASE_URL}images/profile.jpg`;

// Conteúdo baseado no currículo fornecido. Atualize aqui ao evoluir sua trajetória.
export const profile = {
  name: "Jean Roque",
  initials: "JR",
  photo: profilePhoto,
  role: "DevOps Engineer Pleno",
  location: "Pernambuco, Brasil",
  description:
    "Atuo com infraestrutura AWS, automação e operação de aplicações em produção. Meu foco é DevOps: Terraform, Terragrunt, Ansible, Docker, Linux, CI/CD e observabilidade.",
  about:
    "Minha trajetória conecta desenvolvimento backend à sustentação de ambientes, infraestrutura como código e entrega contínua. Atuei em plataformas financeiras, varejo e delivery, colaborando com desenvolvimento, lideranças técnicas e clientes na evolução de aplicações em produção.",
  email: "jeanvdsroqu@gmail.com",
  github: "https://github.com/JeanRoque0",
  linkedin: "https://www.linkedin.com/in/jean-roque-579a48348/",
  areas: [
    {
      number: "01",
      title: "AWS & infraestrutura como código",
      description:
        "Provisionamento e evolução de ambientes AWS com módulos reutilizáveis, automação de configuração e infraestrutura versionada.",
      tags: ["AWS", "Terraform", "Terragrunt", "Ansible"],
    },
    {
      number: "02",
      title: "Containers & entrega contínua",
      description:
        "Sustentação de ambientes Linux e Docker, organização de builds e imagens e automação de pipelines de CI/CD.",
      tags: ["Linux", "Docker", "Docker Swarm", "CI/CD", "Traefik"],
    },
    {
      number: "03",
      title: "Observabilidade & operação",
      description:
        "Investigação de falhas, gestão de incidentes e análise de métricas e logs para apoiar a operação de aplicações em produção.",
      tags: ["CloudWatch", "Prometheus", "Grafana", "Elastic Stack"],
    },
  ],
};

export const experiences = [
  {
    company: "A&3 Tecnologia",
    period: "Fev 2026 — Ago 2026",
    roles: [
      {
        role: "DevOps Engineer Pleno",
        period: "Fev 2026 — Ago 2026",
        description:
          "Administração e sustentação de ambientes Linux e containers, com foco em padronização operacional e troubleshooting.",
        highlights: [
          "Operação de Docker Swarm com Portainer e Traefik, incluindo publicação e roteamento de serviços.",
          "Refatoração de builds e organização de imagens com Harbor e Docker Hub; automação de tarefas com Ansible.",
        ],
        tags: ["Linux", "Docker Swarm", "Traefik", "Ansible"],
      },
    ],
  },
  {
    company: "MB Labs",
    period: "Jan 2024 — Nov 2025",
    roles: [
      {
        role: "DevOps Engineer",
        period: "Jan 2025 — Nov 2025",
        description:
          "Sustentação, automação e evolução de ambientes AWS, em colaboração com desenvolvimento, lideranças técnicas e clientes.",
        highlights: [
          "Provisionamento de infraestrutura e módulos reutilizáveis com Terraform, Terragrunt e Ansible.",
          "Pipelines de CI/CD, gestão de incidentes e observabilidade com Prometheus, Grafana e Elastic Stack.",
        ],
        tags: ["AWS", "Terraform", "Terragrunt", "Ansible", "CI/CD", "Observabilidade"],
      },
      {
        role: "Desenvolvedor Backend Júnior",
        period: "Jan 2024 — Dez 2024",
        description:
          "Desenvolvimento de uma plataforma bancária white-label com contas digitais, cartões de loja, cashback e integrações bancárias.",
        highlights: [
          "APIs REST com Node.js, TypeScript, Express, InversifyJS e TypeORM, integradas ao PostgreSQL.",
          "Refinamento de requisitos com produto e QA, evolução de funcionalidades e troubleshooting com CloudWatch.",
        ],
        tags: ["Node.js", "TypeScript", "PostgreSQL", "APIs REST"],
      },
    ],
  },
  {
    company: "Pigz",
    period: "Jan 2022 — Dez 2023",
    roles: [
      {
        role: "Engenheiro de Software Júnior",
        period: "Jan 2023 — Dez 2023",
        description:
          "Desenvolvimento de sistemas de varejo e delivery, incluindo estoque, PDV, mesas e atendimento.",
        highlights: [
          "Participação na modernização da infraestrutura AWS, conteinerização com Docker e automação de builds e deploys.",
          "Otimização de consultas, APIs e regras de negócio, com desenvolvimento em Go, Node.js, TypeScript e PHP.",
          "Resultados relatados nesse trabalho: redução de cerca de 60% nos custos AWS e melhora de performance de 4 s para 500 ms nos fluxos otimizados.",
        ],
        tags: ["Go", "PHP", "Node.js", "AWS", "Docker"],
      },
      {
        role: "Estágio em Desenvolvimento Backend",
        period: "Jan 2022 — Dez 2022",
        description:
          "Início da trajetória profissional no desenvolvimento de aplicações com PHP e Symfony e no apoio à configuração de infraestrutura AWS.",
        highlights: [],
        tags: ["PHP", "Symfony", "AWS"],
      },
    ],
  },
];

export const education = [
  {
    institution: "Full Cycle",
    title: "Curso de Engenharia de Software",
    period: "Jan — Jun 2023",
    description:
      "Formação com foco em DevOps, engenharia de software, cloud e backend, conectando arquitetura, comunicação entre sistemas e operação de aplicações.",
    tags: ["DevOps", "Backend", "Cloud", "Arquitetura de software"],
    topics: [
      "RabbitMQ e Apache Kafka",
      "Git, integração contínua e GitOps",
      "Comunicação entre sistemas e API Gateway",
      "Observabilidade e OpenTelemetry",
      "Domain Driven Design e Event Storming",
      "Terraform e Ansible",
      "SOLID e arquitetura de microsserviços",
      "Projeto prático Codeflix",
      "Autenticação com Keycloak",
    ],
    url: "",
  },
  {
    institution: "DIO",
    title: "Linux e Java Experience",
    period: "Jun — Ago 2022",
    description: "Atividades e estudos em Linux e Java na plataforma DIO.",
    tags: ["Linux", "Java"],
    topics: [],
    url: "https://web.dio.me/users/jeanvdsroque",
  },
];
export const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    type: "Certificação",
    issuer: "Amazon Web Services (AWS)",
    issued: "Dez 2024",
    expires: "Dez 2027",
    id: "ff8b9070-08b2-48a2-9066-9368060827d2",
    url: "https://www.credly.com/badges/ff8b9070-08b2-48a2-9066-9368060827d2/linked_in_profile",
  },
];
export const languages = [
  { name: "Português", level: "Nativo / bilíngue" },
  { name: "Espanhol", level: "Profissional" },
  { name: "Inglês", level: "Proficiência profissional limitada" },
];

export const projectCategories = [
  "DevOps",
  "Backend",
  "Software Engineer",
  "Full Stack",
] as const;

export type Project = {
  title: string;
  category: (typeof projectCategories)[number];
  description: string;
  tags: string[];
  url: string;
  period?: string;
  highlights: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Swing Music: seu próprio music player",
    category: "DevOps",
    period: "Jul 2026 — o momento",
    description:
      "Implantação do Swing Music na AWS com EC2, S3 e IAM, infraestrutura como código com Terraform e configuração automatizada com Ansible e Docker em Linux.",
    highlights: [
      "Provisionamento de EC2 e configuração de acesso IAM com Terraform; uso de S3 para a biblioteca de músicas.",
      "Configuração de Linux e implantação da aplicação com Ansible e Docker.",
    ],
    tags: ["AWS", "EC2", "S3", "IAM", "Terraform", "Ansible", "Docker", "Linux"],
    url: "https://github.com/Jean-V0/swing-music-playbook",
  },
];
