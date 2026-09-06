const profilePhoto = `${import.meta.env.BASE_URL}images/profile.jpg`;

// Conteúdo baseado no currículo fornecido. Atualize aqui ao evoluir sua trajetória.
export const profile = {
  name: "Jean Roque",
  initials: "JR",
  photo: profilePhoto,
  role: "Backend Developer · DevOps",
  location: "Pernambuco, Brasil",
  description:
    "Desenvolvo APIs e sistemas com Node.js, TypeScript, PHP e Go. Minha experiência em cloud e DevOps conecta as decisões de código à performance e à confiabilidade em produção.",
  about:
    "Atuei em plataformas financeiras, varejo e delivery, do desenvolvimento de funcionalidades à sustentação de ambientes em produção. Trabalho com integrações, bancos de dados e arquitetura de software, com experiência em AWS, automação e observabilidade.",
  email: "jeanvdsroqu@gmail.com",
  github: "https://github.com/Jean-V0",
  linkedin: "https://www.linkedin.com/in/jean-roque-579a48348/",
  areas: [
    {
      number: "01",
      title: "Backend & APIs",
      description:
        "APIs REST, integrações financeiras e sistemas de varejo. Código organizado com SOLID, injeção de dependências e atenção à manutenibilidade.",
      tags: [
        "Node.js",
        "TypeScript",
        "PHP",
        "Go",
        "NestJS",
        "Laravel",
        "Symfony",
      ],
    },
    {
      number: "02",
      title: "Cloud & entrega",
      description:
        "Infraestrutura AWS, containers e pipelines de CI/CD. Automação e padronização para conectar desenvolvimento e operação.",
      tags: ["AWS", "Docker", "Terraform", "Terragrunt", "Ansible", "Linux"],
    },
    {
      number: "03",
      title: "Dados & confiabilidade",
      description:
        "Otimização de consultas e APIs, análise de incidentes e observabilidade para entender e evoluir o comportamento dos sistemas.",
      tags: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prometheus",
        "Grafana",
        "CloudWatch",
      ],
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
        tags: ["AWS", "Terraform", "CI/CD", "Observabilidade"],
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

export type Project = {
  title: string;
  category: "Backend" | "DevOps" | "Automação" | "Estudos";
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
      "Playbook Ansible para implantação automatizada do Swing Music em Linux: um music player self-hosted com foco em automação e configuração de serviços.",
    highlights: [
      "Provisionamento da aplicação com Ansible.",
      "Padronização da implantação e configuração de serviços em Linux.",
    ],
    tags: ["Ansible", "Linux", "Self-hosted"],
    url: "https://github.com/Jean-V0/swing-music-playbook",
  },
  {
    title: "Automação web com Rust e Selenium",
    category: "Automação",
    description:
      "Projeto de estudo de automação de navegadores com Rust e Selenium WebDriver, explorando execução de fluxos web e gerenciamento de sessões.",
    highlights: [
      "Controle programático do navegador e configuração por variáveis de ambiente.",
      "Integração com extensão de VPN para cenários de teste e organização do projeto com Cargo.",
    ],
    tags: ["Rust", "Selenium", "Cargo", "ChromeDriver"],
    url: "https://github.com/Jean-V0/twitch-selenium",
  },
  {
    title: "C++ na prática · CFBCursos",
    category: "Estudos",
    description:
      "Exercícios e implementações do curso de C++ do CFBCursos, dos fundamentos da linguagem a estruturas de dados e gerenciamento de memória.",
    highlights: [
      "Funções, recursividade, vetores, structs, ponteiros e alocação dinâmica.",
      "Pilhas, filas, listas, sobrecarga de funções e organização em múltiplos arquivos.",
    ],
    note: "Repositório de estudos. O curso não emitia certificado no período em que foi realizado.",
    tags: ["C++", "Estruturas de dados", "Gerenciamento de memória"],
    url: "https://github.com/Jean-V0/bfcursos-cpp",
  },
];
