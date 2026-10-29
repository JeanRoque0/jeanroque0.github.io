import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { render, pages, profile, siteUrl } from "../.ssr/entry-server.js";

const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const template = await readFile("dist/index.html", "utf8");
const base = siteUrl.replace(/\/?$/, "/");
const socialImage = new URL("images/social-preview.png", base).href;
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${base}#person`,
  name: profile.name,
  url: base,
  image: new URL("images/profile.jpg", base).href,
  jobTitle: profile.role,
  description: profile.description,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "DevOps",
    "AWS",
    "Terraform",
    "Terragrunt",
    "Ansible",
    "Docker",
    "Linux",
    "CI/CD",
    "Observabilidade",
    "Operação em produção",
    "Backend",
  ],
};
for (const page of pages) {
  const url = new URL(page.path, base).href;
  const metadata = `<link rel="canonical" href="${escape(url)}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="Jean Roque — DevOps Engineer Pleno" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${escape(url)}" />
<meta property="og:image" content="${escape(socialImage)}" />
<meta property="og:image:alt" content="Portfólio de Jean Roque, DevOps Engineer Pleno" />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">${JSON.stringify(person).replaceAll("<", "\\u003c")}</script>`;
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escape(page.description)}" />`,
    )
    .replace("</head>", `${metadata}\n</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${render(page.id)}</div>`,
    );
  const directory = `dist/${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(
    `${directory}${directory.endsWith("/") ? "" : "/"}index.html`,
    html,
  );
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${escape(new URL(page.path, base).href)}</loc></url>`).join("")}</urlset>\n`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", base).href}\n`,
);
await writeFile(
  "dist/404.html",
  `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Página não encontrada — Jean Roque</title><body><main><h1>Página não encontrada</h1><p>O endereço pode ter mudado.</p><a href="${escape(new URL(base).pathname)}">Voltar ao portfólio</a></main></body></html>`,
);
await writeFile("dist/.nojekyll", "");
await rm(".ssr", { recursive: true, force: true });
console.log(
  `Generated ${pages.length} static pages, sitemap and social metadata for ${base}`,
);
