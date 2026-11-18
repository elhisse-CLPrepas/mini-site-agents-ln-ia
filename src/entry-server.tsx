import { renderToString } from "react-dom/server";
import { App } from "./App";
import { pages, sources, type Page } from "./data";
export { pages, sources };
export function render(page: Page) {
  return renderToString(<App page={page} />);
}
