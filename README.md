<div align="center">

# Jean Roque

**DevOps Engineer Pleno · AWS · Infraestrutura como código**

Automação, observabilidade e operação de aplicações em produção.

[Portfólio](https://jeanroque0.github.io/) · [Experiência](https://jeanroque0.github.io/experiencia/) · [Projetos](https://jeanroque0.github.io/projetos/) · [LinkedIn](https://www.linkedin.com/in/jean-roque-579a48348/)

</div>

---

## Olá! 👋

Sou **DevOps Engineer Pleno**, de Pernambuco, com experiência em **AWS, Terraform, Terragrunt, Ansible, Docker, Linux, CI/CD e observabilidade**. Atuo com provisionamento, automação de configuração, sustentação de ambientes e investigação de falhas em produção.

Minha base em desenvolvimento backend, em plataformas financeiras, varejo e delivery, apoia a colaboração com desenvolvimento e o diagnóstico entre aplicação e infraestrutura.

## Onde posso contribuir

- **Infraestrutura AWS:** provisionamento e evolução de ambientes com infraestrutura como código.
- **Automação e entrega:** configuração com Ansible, builds e imagens Docker e pipelines de CI/CD.
- **Operação em produção:** sustentação Linux, troubleshooting, gestão de incidentes e observabilidade.
- **Performance:** investigação de gargalos em aplicações, consultas e infraestrutura, com base em métricas e logs.

## Stack principal

| Área | Tecnologias |
| :--- | :--- |
| **Cloud e infraestrutura como código** | AWS · Terraform · Terragrunt |
| **Configuração e containers** | Ansible · Linux · Docker · Docker Swarm · Traefik |
| **Entrega** | CI/CD · Git · Harbor · Docker Hub |
| **Observabilidade** | CloudWatch · Prometheus · Grafana · Elastic Stack |
| **Base em backend** | Node.js · TypeScript · PHP · Go · PostgreSQL · MySQL · Redis |

## Experiência aplicada

**A&3 Tecnologia — DevOps Engineer Pleno · fevereiro a agosto de 2026**

Administração e sustentação de ambientes Linux e containers. Operação de Docker Swarm com Portainer e Traefik, refatoração de builds, organização de imagens com Harbor e Docker Hub e automação com Ansible.

**MB Labs — DevOps Engineer · janeiro a novembro de 2025**

Sustentação e evolução de ambientes AWS, módulos reutilizáveis com Terraform e Terragrunt, configuração com Ansible, pipelines de CI/CD, gestão de incidentes e observabilidade com Prometheus, Grafana e Elastic Stack.

Antes, como **Desenvolvedor Backend Júnior · janeiro a dezembro de 2024**, atuei em uma plataforma bancária white-label com Node.js, TypeScript, Express, InversifyJS, TypeORM e PostgreSQL.

**Pigz — Engenheiro de Software Júnior · janeiro a dezembro de 2023**

Desenvolvimento de sistemas de varejo e delivery, otimização de consultas e APIs e participação na modernização da infraestrutura AWS, conteinerização e automação de builds e deploys. Resultados relatados nesse trabalho: **redução de cerca de 60% nos custos AWS e melhora de performance de 4 s para 500 ms nos fluxos otimizados**. São resultados dessa experiência, sem atribuição exclusiva ou promessa de ganhos para outros ambientes.

Antes, como **Estágio em Desenvolvimento Backend · janeiro a dezembro de 2022**, trabalhei com PHP e Symfony e apoiei a configuração de infraestrutura AWS.

[Ver cargos, períodos e detalhes no portfólio →](https://jeanroque0.github.io/experiencia/)

## Projetos

### Swing Music — seu próprio music player

Implantação de um music player self-hosted na **AWS com EC2, S3 e IAM**, infraestrutura como código com **Terraform** e configuração automatizada com **Ansible e Docker em Linux**.

**Categoria:** DevOps · **Stack:** AWS, EC2, S3, IAM, Terraform, Ansible, Docker, Linux

[Ver repositório →](https://github.com/Jean-V0/swing-music-playbook) · [Explorar no portfólio →](https://jeanroque0.github.io/projetos/)

## Vamos trabalhar juntos?

**Para recrutadores:** meu foco está em oportunidades de **DevOps Engineer Pleno**, com AWS, infraestrutura como código, automação, CI/CD, observabilidade e operação em produção.

**Para clientes:** posso contribuir com infraestrutura AWS, automação de ambientes e deploys, containers e observabilidade. A conversa inicial serve para entender o problema e definir escopo, prazo e critérios de entrega.

[Conheça os serviços →](https://jeanroque0.github.io/servicos/) · [Converse comigo no LinkedIn →](https://www.linkedin.com/in/jean-roque-579a48348/) · [Envie um e-mail →](mailto:jeanvdsroqu@gmail.com)

<details>
<summary><strong>Formação e certificação</strong></summary>

- **Full Cycle — Engenharia de Software:** janeiro a junho de 2023. Arquitetura de software, backend, comunicação entre sistemas, cloud e DevOps.
- **DIO — Linux e Java Experience:** junho a agosto de 2022. [Perfil na plataforma](https://web.dio.me/users/jeanvdsroque).
- **AWS Certified Cloud Practitioner:** emitida em dezembro de 2024, com expiração em dezembro de 2027. [Validar credencial](https://www.credly.com/badges/ff8b9070-08b2-48a2-9066-9368060827d2/linked_in_profile).

</details>

---

## Este portfólio

Este repositório contém meu site pessoal, desenvolvido com **React + TypeScript + Vite**, CSS puro e uma identidade visual em azul sobre fundo escuro.

![Prévia do portfólio de Jean Roque, com navegação lateral e caminhos para recrutadores e clientes](docs/assets/portfolio-preview.png)

O site tem navegação por áreas, caminhos para recrutadores e clientes, projetos com filtros e detalhes em janela, serviços com contato por e-mail, formação e credencial AWS. Cada área tem HTML pré-renderizado e URL própria, mantendo o conteúdo acessível antes de carregar JavaScript. Fontes são servidas localmente. O layout se adapta a desktop e celular, com navegação por teclado e suporte à preferência por movimento reduzido.

### Executar localmente

Com **Node.js 22.12+** instalado:

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal.

| Comando            | Função                                            |
| :----------------- | :------------------------------------------------ |
| `npm run dev`      | Inicia o servidor de desenvolvimento              |
| `npm run build`    | Verifica TypeScript e gera o site em `dist/`      |
| `npm run preview`  | Serve o build de produção localmente              |
| `npm run lint`     | Executa a análise estática do código              |
| `npm run test:e2e` | Verifica navegação, acessibilidade e SEO no build |

### Personalizar e publicar

Os dados do portfólio ficam em [`src/data/profile.ts`](src/data/profile.ts), os serviços em [`src/data/services.ts`](src/data/services.ts) e as URLs e descrições de SEO em [`src/data/site.ts`](src/data/site.ts). A publicação no **GitHub Pages** está preparada em um [workflow do GitHub Actions](.github/workflows/deploy.yml).

Para ativar, selecione **GitHub Actions** em **Settings → Pages** e execute o workflow após enviar o projeto para a branch `main`.

[Guia de desenvolvimento e publicação →](docs/desenvolvimento.md)

---

<div align="center">

**Vamos conversar sobre seu próximo desafio?**

[LinkedIn](https://www.linkedin.com/in/jean-roque-579a48348/) · [jeanvdsroqu@gmail.com](mailto:jeanvdsroqu@gmail.com)

</div>
