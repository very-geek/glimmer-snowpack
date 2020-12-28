import { renderComponent } from "@glimmerx/core";
import Application from "./application";

const rootElement = document.querySelector(".glimmer-application");

if (rootElement instanceof HTMLElement) {
  renderComponent(Application, rootElement);
}
