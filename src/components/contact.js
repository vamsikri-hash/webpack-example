const displayContact = () => {
  const menu_box = document.createElement("div");
  menu_box.classList.add("menu-box");
  const tit = document.createElement("div");
  menu_box.appendChild(tit);
  tit.innerHTML = "Contact US!";
  tit.classList.add("menu-box-title");
  const input_section = document.createElement("div");
  input_section.classList.add("inp-sec");
  menu_box.appendChild(input_section);
  input_section.appendChild(createInput("Enter the Name", "name-class"));
  input_section.appendChild(createInput("Enter the email", "mail-class"));
  input_section.appendChild(createInput("Enter the Message", "msg-class"));
  input_section.appendChild(createButton("Send!"));
  return menu_box;
};

const createInput = (value, klass) => {
  const inp = document.createElement("INPUT");
  inp.setAttribute("type", "text");
  inp.setAttribute("placeholder", value);
  inp.classList.add(klass);
  return inp;
};

const createButton = (value) => {
  const but = document.createElement("BUTTON");
  but.classList.add("submit");
  but.innerHTML = value;
  return but;
};
export { displayContact };
