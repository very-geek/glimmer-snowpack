import { renderComponent } from "@glimmerx/core";
import Application from "./APP";

const rootElement = document.querySelector(".glimmer-application");
renderComponent(Application, rootElement);
