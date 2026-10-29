# Revisão do posicionamento DevOps — 29 de outubro de 2026

O portfólio apresenta Jean Roque como **DevOps Engineer Pleno**, com AWS, Terraform, Terragrunt, Ansible, Docker, Linux, CI/CD, observabilidade e operação em produção. Backend permanece como base de carreira e apoio ao diagnóstico e à colaboração com desenvolvimento.

## Alterações

- `src/data/profile.ts`: perfil, especialidades, tags DevOps, resultados relatados da Pigz e stack do Swing Music. Cargos e datas históricos preservados, incluindo A&3 (fevereiro–agosto de 2026) e MB Labs DevOps (janeiro–novembro de 2025).
- `src/pages/Overview.tsx`, `Experience.tsx`, `Projects.tsx`, `Services.tsx` e `Contact.tsx`: texto das jornadas de recrutadores e clientes alinhado a DevOps.
- `src/data/services.ts`: possibilidades de entrega para infraestrutura AWS, containers/CI/CD e observabilidade/diagnóstico, sujeitas a definição de escopo.
- `src/data/site.ts`, `index.html` e `scripts/prerender.mjs`: títulos, descrições, Open Graph e JSON-LD Person atualizados; URLs e canonical preservados.
- `README.md` e `docs/propostas-comerciais.md`: posicionamento, experiência, projeto e serviços consistentes com o site.
- `public/images/social-preview.png` e `docs/assets/portfolio-preview.png`: novas capturas da página inicial renderizada; imagem social mantida em 1200 × 630.
- `tests/portfolio.spec.ts`: regressões de posicionamento, cargos/datas, métricas relatadas, projeto, credencial AWS e metadados.

## Validação

- `npm ci`: passou; dependências instaladas com o lockfile existente.
- `npm run build`: passou; seis páginas estáticas, sitemap e metadados gerados.
- `npm run lint`: passou.
- `npm run test:e2e`: **11 testes passaram**. Inclui HTML sem JavaScript, SEO, JSON-LD, navegação, filtros, diálogo, restauração de foco, contato por e-mail e verificações automáticas axe WCAG A/AA nas seis páginas em 1440, 390 e 320 px.
- A primeira tentativa dos testes encontrou o Chromium ausente. Após `npx playwright install chromium`, a suíte passou.
- Capturas das seis páginas geradas em 1440, 390 e 320 px em `/tmp/portfolio-devops-review/`; inspeção visual da página inicial e imagem social, experiência, projetos, serviços, formação e contato sem cortes ou sobreposição observados. Os estilos e a estrutura responsiva existentes foram preservados.
- `git diff --check`: passou.

## Limites e riscos

Os números da Pigz (cerca de 60% de redução de custos AWS e 4 s para 500 ms) são apresentados como resultados relatados daquele trabalho, sem atribuição exclusiva ou promessa comercial. Não foram inventadas medições, disponibilidade, SLA ou experiência aprofundada em Kubernetes. O Swing Music distingue provisionamento de EC2/IAM com Terraform do uso de S3 para a biblioteca de músicas; não afirma que Terraform cria o bucket.

`npm audit` reportou **duas dependências com severidade alta**, já presentes no lockfile: `vite` (8.2.2) e `source-map-js` (1.2.1), ligadas às ferramentas de desenvolvimento/build. Atualizações de dependências ficaram fora desta revisão de conteúdo e devem ser tratadas em manutenção específica; o relatório histórico de setembro não representa o estado atual dessas dependências. Verificações axe e inspeção visual não substituem uma auditoria completa de acessibilidade.

## Impacto entre repositórios e publicação

Nenhum outro repositório foi modificado. Links externos do GitHub, LinkedIn e Credly permanecem os mesmos; não houve mudança de API, infraestrutura, domínio ou URLs públicas. Esta revisão foi validada localmente antes da publicação na branch `main`, que aciona o workflow do GitHub Pages.
