const createFooter = () => {
  const foot = document.createElement("footer");
  foot.classList.add("foot");
  const title = document.createElement("div");
  title.classList.add("end-t");
  title.innerHTML = "@ copy-rights reserved!";
  foot.appendChild(title);
  const links = document.createElement("div");
  links.classList.add("foot-links");
  links.appendChild(createLink("Email", "#", "email-class"));
  links.appendChild(createLink("Facebook", "#", "fb-class"));
  links.appendChild(createLink("Twitter", "#", "tw-class"));
  foot.appendChild(links);
  return foot;
};

const createLink = (link_text, a_link, klass) => {
  var a = document.createElement("a");
  var link = document.createTextNode(link_text);
  a.appendChild(link);
  a.classList.add(klass);
  a.href = a_link;
  return a;
};
export { createFooter };
