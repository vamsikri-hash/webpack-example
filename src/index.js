import { createHeader } from "./components/header";
import { createFooter } from "./components/footer";
import { displayMenu } from "./components/menu";
import { displayHome } from "./components/home";
import { displayContact } from "./components/contact";
import "./styles/style.css";
const content = document.querySelector(".content");
const mid_content = document.createElement("div");
const dummy = document.createElement("div");
dummy.classList.add("dummy");
dummy.innerHTML = `It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-o
   r-less normal distribution of letters, as opposed to using 'Content here, content here', making it
   look like readable English. Many desktop publishing packages and web page editors now use Lorem Ip
   sum as their default model text, and a search for 'lorem ipsum' will uncover many web sites stil
   l in their infancy. Various versions have evolved over the years, sometimes by accident, someti
   mes on purpose (injected humour and the like).

`;
mid_content.appendChild(dummy);
mid_content.classList.add("mid-content");
content.appendChild(createHeader());
content.appendChild(mid_content);
content.appendChild(createFooter());

const men = document.querySelector(".menu-class");
men.addEventListener("click", function () {
  mid_content.replaceChild(displayMenu(), mid_content.children[0]);
});

const hom = document.querySelector(".home-class");
hom.addEventListener("click", function () {
  mid_content.replaceChild(displayHome(), mid_content.children[0]);
});

const con = document.querySelector(".contact-class");
con.addEventListener("click", function () {
  mid_content.replaceChild(displayContact(), mid_content.children[0]);
});
