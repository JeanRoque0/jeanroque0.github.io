import { renderToString } from "react-dom/server";
import App from "./App";
import type { PageId } from "./data/site";
export { pages, siteUrl } from "./data/site";
export { profile } from "./data/profile";
export function render(page: PageId) {
  return renderToString(<App activePage={page} />);
}
