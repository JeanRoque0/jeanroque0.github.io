import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

const root = "/";
const routes = [
  "",
  "experiencia/",
  "projetos/",
  "servicos/",
  "formacao/",
  "contato/",
];

for (const route of routes) {
  test(`HTML, SEO and accessibility: ${route || "home"}`, async ({
    page,
    request,
  }) => {
    const response = await request.get(root + route);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain("<h1");
    expect(html).not.toContain('<div id="root"></div>');
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(root + route);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://jeanroque0.github.io" + root + route,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.{50,}/,
    );
    await expect(page.locator('nav [aria-current="page"]')).toHaveCount(1);
    const person = JSON.parse(
      await page.locator('script[type="application/ld+json"]').innerText(),
    );
    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe("Jean Roque");
    const socialImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect((await request.get(new URL(socialImage!).pathname)).status()).toBe(
      200,
    );
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 950 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}

test("navigation and repositories work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4175" + root);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projetos", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projetos\/$/);
  await expect(
    page.getByRole("link", { name: "Repositório no GitHub" }),
  ).toHaveCount(1);
  await context.close();
});

test("filters, modal, focus restoration and background scroll", async ({
  page,
}) => {
  await page.goto(root + "projetos/");
  await page.getByRole("button", { name: "DevOps", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  const trigger = page.getByRole("button", {
    name: "Explorar projeto: Swing Music: seu próprio music player",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAccessibleName(
    "Swing Music: seu próprio music player",
  );
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze())
      .violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await trigger.click();
  await page
    .getByRole("button", { name: "Fechar detalhes do projeto" })
    .click();
  await expect(dialog).not.toBeVisible();
  for (const category of ["Backend", "Software Engineer", "Full Stack"]) {
    await page.getByRole("button", { name: category, exact: true }).click();
    await expect(page.locator(".project-card")).toHaveCount(0);
    await expect(page.locator(".empty-projects")).toBeVisible();
  }
  await expect(
    page.getByRole("button", { name: "Estudos", exact: true }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
});

test("legacy links, skip link, service briefing and direct reload", async ({
  page,
}) => {
  await page.goto(root + "#servicos");
  await expect(page).toHaveURL(root + "servicos/");
  await page.reload();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await expect(page).toHaveURL(/servicos\/#conteudo$/);
  await page.locator(".service-card summary").first().click();
  await expect(page.locator(".service-card details").first()).toHaveAttribute(
    "open",
    "",
  );
  const mail = await page
    .locator(".service-card > a")
    .first()
    .getAttribute("href");
  expect(decodeURIComponent(mail!)).toContain("Orçamento previsto");
});

test("sitemap, unique titles and static file coverage", async () => {
  const titles = new Set<string>();
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  for (const route of routes) {
    const html = await readFile(`dist/${route}index.html`, "utf8");
    titles.add(html.match(/<title>(.*?)<\/title>/)![1]);
    expect(sitemap).toContain(`https://jeanroque0.github.io/${route}`);
  }
  expect(titles.size).toBe(routes.length);
  expect(await readFile("dist/404.html", "utf8")).toContain("noindex");
});
