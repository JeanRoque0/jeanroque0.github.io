# Portfólio — Backend & DevOps

Portfólio responsivo em React + TypeScript + Vite, com CSS puro e publicação preparada para GitHub Pages.

## Rodar localmente

Instale Node.js 22.12+ (ou use `nvm install` e `nvm use`).

```sh
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Para validar e visualizar a versão de produção:

```sh
npm run lint
npm run build
npm run preview
```

## Personalizar

- `src/data/profile.ts`: nome, apresentação, stacks, experiências, formação, certificações, idiomas, contatos e projetos. Conteúdo baseado no currículo fornecido.
- `src/assets/profile.jpg`: foto pessoal, salva localmente para não depender do link temporário do LinkedIn.
- `src/App.tsx`: estrutura e textos das seções.
- `src/App.css` e `src/index.css`: layout, cores e tipografia.
- `index.html`: título e descrição para buscadores.

A seção de projetos inclui Swing Music, automação web com Rust e Selenium e estudos de C++; o menu aponta para a seção. Experiências profissionais têm uma seção própria. Contatos foram preenchidos a partir do currículo. Adicione projetos reais ao array `projects`; os filtros são gerados a partir das categorias dos projetos cadastrados. Use URLs completas (`https://...`) nos links. Para e-mail, informe somente o endereço.

A tipografia usa Google Fonts com fallback local. Não há backend, formulário de envio ou necessidade de variáveis de ambiente.

## Publicar no GitHub Pages quando quiser

1. Crie um repositório no GitHub e envie o projeto para a branch `main` (ou ajuste o workflow à sua branch).
2. No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
3. Na aba **Actions**, execute **Deploy portfolio to GitHub Pages**, ou faça um novo push na `main`.
4. A URL será exibida no ambiente `github-pages` ao finalizar o workflow.

O workflow `.github/workflows/deploy.yml` instala dependências com `npm ci`, executa lint, gera `dist` e publica o artefato. A configuração `base: './'` usa assets relativos e suporta tanto `usuario.github.io` quanto `usuario.github.io/repositorio/`. A navegação usa o hash da URL para alternar entre as áreas do portfólio, com suporte a links diretos e ao histórico do navegador, sem necessidade de fallback de rotas.

Referência: [publicação de sites estáticos com Vite](https://vite.dev/guide/static-deploy.html).
