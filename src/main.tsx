import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { pages, pageHref, pageFromPath } from "./data/site";

// Preserve links shared before the move from fragments to static page URLs.
const legacyPage = pages.find(
  (page) => page.id === window.location.hash.slice(1),
);
if (legacyPage) window.location.replace(pageHref(legacyPage.id));
else {
  const root = document.getElementById("root")!;
  const activePage = pageFromPath(window.location.pathname);
  const app = (
    <StrictMode>
      <App activePage={activePage} />
    </StrictMode>
  );
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
