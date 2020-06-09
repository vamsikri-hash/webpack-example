function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello World";

  return element;
}
const content = document.querySelector(".content");
content.appendChild(component());
