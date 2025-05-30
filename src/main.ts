import { App } from "./cube/index.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("main")!.innerHTML = App();
