# Revisão técnica — setembro de 2026

## Problemas encontrados e correções

| Antes | Depois | Efeito |
| --- | --- | --- |
| HTML inicial sem conteúdo | HTML pré-renderizado para seis páginas | Conteúdo e links disponíveis sem JavaScript |
| Áreas selecionadas por `#fragmento` | URLs próprias, como `/portfolio/projetos/` | Cada área pode ser compartilhada e rastreada por URL |
| Mesmo título e descrição para todas as áreas | Metadados específicos por página | Melhor descrição de cada destino |
| Sem canonical, sitemap ou metadados sociais | Canonical, sitemap, Open Graph, imagem social e JSON-LD Person | Informações explícitas para buscadores e prévias de links |
| App monolítico e áreas ocultas montadas juntas | Componentes por página; somente a página solicitada é renderizada | Organização do código e DOM menores por visita |
| CSS acumulado de versões antigas | Remoção de seletores sem uso e cores centralizadas | Menos estilos para manter e transferir |
| Consulta externa ao Google Fonts via CSS | WOFF2 locais, subset latino, `font-display: swap` | Sem dependência do Google Fonts durante a visita |
| Projetos acessíveis apenas pela janela interativa | Links de repositório também nos cards | Acesso ao código mesmo sem JavaScript |
| Páginas secundárias sem H1 visível | Um H1 por página e hierarquia revisada | Estrutura mais clara para navegação assistiva |
| Link de pular conteúdo interferia no estado de navegação por hash | Destino focável independente da seleção de página | Navegação por teclado previsível |
| Janela permitia rolagem do fundo | Bloqueio e restauração de rolagem, com diálogo nativo | Melhor uso no celular e por teclado |
| Sem testes de regressão | Playwright + axe no workflow antes do deploy | Verificação das principais jornadas em cada alteração |

## Validação

- TypeScript/build e lint passaram.
- 10 testes automatizados passaram, cobrindo seis páginas e larguras de 1440, 390 e 320 pixels.
- Sem violações detectadas pelo axe nas regras WCAG A/AA selecionadas. Isso não substitui avaliação manual completa de acessibilidade.
- Verificados HTML sem JavaScript, navegação, links antigos, canonical, sitemap, dados estruturados, filtros, janela de projeto, Escape, restauração de foco e mensagens de contato.
- `npm audit`: zero vulnerabilidades reportadas no momento da revisão.
- `git diff --check`: sem erros.

## Performance de laboratório

Lighthouse na página inicial, servido pela prévia local com simulação mobile:

| Categoria | Resultado |
| --- | --- |
| Performance | 99/100 |
| Acessibilidade | 100/100 |
| Boas práticas | 100/100 |
| SEO | 100/100 |

FCP e LCP: aproximadamente 1,7 s. TBT: 0 ms. CLS: 0,016.

[Resumo da execução](lighthouse-summary.json) registra versão, data, valores e ambiente. Uma execução local não representa todos os dispositivos, a rede de produção ou o posicionamento no Google. Não foi feita medição equivalente do Lighthouse antes da mudança; portanto não há comparação de pontuações antes/depois.

O CSS de produção passou de aproximadamente **22,01 KB para 18,34 KB**, redução de cerca de **17%**, incluindo os estilos das fontes locais. O JavaScript ficou próximo do anterior (**213,43 KB**, ou **66,89 KB gzip**); não houve redução expressiva do bundle JS. O ganho principal é entregar HTML útil antes da execução do React e evitar montar as áreas não visitadas.

## Publicação e acompanhamento

1. Publicar as alterações pelo workflow existente.
2. Conferir as URLs e prévias de compartilhamento no domínio público.
3. Enviar `https://jeanroque0.github.io/portfolio/sitemap.xml` ao Search Console, após verificar a propriedade.
4. Acompanhar métricas reais quando houver tráfego suficiente, especialmente LCP, INP e CLS.
5. Manter o endereço público e a imagem de compartilhamento atualizados ao mudar domínio ou identidade visual.

A navegação agora faz requisições normais de páginas estáticas. Filtros e janelas continuam interativos; o estado do filtro reinicia ao sair e voltar à página. Em troca, links, recarga e conteúdo básico funcionam sem JavaScript e sem um servidor de rotas.

Em GitHub Pages por subpasta, `robots.txt` dentro de `/portfolio/` não é o arquivo de regras da raiz do domínio. O sitemap pode ser cadastrado diretamente no Search Console.

## Referências técnicas

- [Google: JavaScript e SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: estrutura de URLs](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [React: hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)
