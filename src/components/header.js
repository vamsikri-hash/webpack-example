const createHeader = () => {
  const head = document.createElement("header");
  head.classList.add("head");
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "Vamsi's Restaurant!";
  head.appendChild(title);
  const links = document.createElement("div");
  links.classList.add("nav-links");
  links.appendChild(createLink("Home", "#", "home-class"));
  links.appendChild(createLink("Menu", "#", "menu-class"));
  links.appendChild(createLink("Contact", "#", "contact-class"));
  head.appendChild(links);
  return head;
};

const createLink = (link_text, a_link, klass) => {
  var a = document.createElement("a");
  var link = document.createTextNode(link_text);
  a.appendChild(link);
  a.classList.add(klass);
  a.href = a_link;
  return a;
};
export { createHeader };
