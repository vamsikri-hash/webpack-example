import { createHeader } from "./components/header";
import { createFooter } from "./components/footer";
import "./styles/style.css";
const content = document.querySelector(".content");
content.appendChild(createHeader());
document.body.appendChild(createFooter());
