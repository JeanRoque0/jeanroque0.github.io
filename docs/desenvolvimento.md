# Desenvolvimento e publicação

React + TypeScript + Vite, com HTML gerado no build para cada área do portfólio. A hospedagem continua estática no GitHub Pages; não precisa de servidor Node em produção.

## Executar

Com Node.js 22.12+ (ou `nvm install` e `nvm use`):

```sh
npm ci
npm run dev
```

O servidor de desenvolvimento informa seu endereço no terminal. Ele renderiza a aplicação no navegador; para verificar o HTML pré-renderizado, use o build:

```sh
npm run build
npm run preview
```

Na configuração padrão, a prévia abre em `http://localhost:4173/`.

## Conteúdo e componentes

| Arquivo                 | Responsabilidade                                    |
| ----------------------- | --------------------------------------------------- |
| `src/data/profile.ts`   | Perfil, experiências, projetos, formação e contatos |
| `src/data/services.ts`  | Serviços e possibilidades de entrega                |
| `src/data/site.ts`      | Rotas, títulos, descrições e URL pública            |
| `src/pages/`            | Conteúdo de cada área                               |
| `src/components/`       | Tags e janela de detalhes de projeto                |
| `src/App.tsx`           | Navegação e estrutura comum                         |
| `src/index.css`         | Fontes locais, tokens de cores e estilos globais    |
| `src/App.css`           | Layout e componentes visuais                        |
| `public/images/`        | Foto pessoal e imagem de compartilhamento           |
| `scripts/prerender.mjs` | HTML, canonical, Open Graph, JSON-LD, sitemap e 404 |

As fontes DM Sans e Space Grotesk vêm dos pacotes Fontsource (licença OFL), com arquivos WOFF2 locais, subset latino e `font-display: swap`.

## URLs e SEO

URL configurada: `https://jeanroque0.github.io/`.

O build cria `index.html` na raiz e nas pastas `experiencia/`, `projetos/`, `servicos/`, `formacao/` e `contato/`. Links normais funcionam sem JavaScript; React hidrata o HTML para habilitar filtros e janelas. Links antigos com `#experiencia`, por exemplo, são encaminhados à nova URL no navegador.

Ao mudar de repositório ou adotar domínio próprio, copie `.env.example` para `.env.local` e ajuste `VITE_SITE_URL`, incluindo a barra final. Configure a mesma variável no ambiente de build do GitHub Actions. Refaça o build para atualizar todos os caminhos e metadados. Os testes usam o endereço padrão `/`; atualize a configuração dos testes se mudar esse caminho.

O sitemap fica em `/sitemap.xml`. Cadastre essa URL no Google Search Console após publicar.

A imagem `public/images/social-preview.png` tem 1200 × 630 pixels. Atualize-a quando a identidade visual mudar. Metadados e sitemap facilitam rastreamento e compartilhamento; não garantem indexação ou posição no Google.

## Verificações

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Em Linux sem dependências do navegador, use `npx playwright install --with-deps chromium`. Os testes iniciam a prévia em `127.0.0.1:4175`, conferem as seis páginas, execução sem JavaScript, metadados, links legados, filtros, diálogo e foco, além de verificar overflow e acessibilidade automática em 1440, 390 e 320 pixels. Resultados ficam em `playwright-report/`; rastros de falhas em `test-results/`.

## GitHub Pages

Em **Settings → Pages**, selecione **GitHub Actions** como origem. O workflow `.github/workflows/deploy.yml` instala dependências, verifica lint, gera as páginas, executa os testes e publica `dist` em pushes na `main` ou execução manual.

A pasta `.ssr` é temporária e removida ao terminar o build. O PDF original e as notas pessoais de revisão permanecem ignorados pelo Git.
