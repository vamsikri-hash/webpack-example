const displayMenu = () => {
  const menu_box = document.createElement("div");
  menu_box.classList.add("menu-box");
  const tit = document.createElement("div");
  menu_box.appendChild(tit);
  tit.innerHTML = "Our Menu & Items";
  tit.classList.add("menu-box-title");

  const menu_item_box = document.createElement("div");
  menu_item_box.classList.add("menu-item-box");
  menu_box.appendChild(menu_item_box);

  const breakfast = document.createElement("div");
  const t1 = document.createElement("h2");
  t1.innerHTML = "BreakFast!!";
  breakfast.appendChild(t1);
  breakfast.classList.add("breakfast");
  const ul1 = document.createElement("ul");
  breakfast.appendChild(ul1);
  ul1.appendChild(createListItem("idli"));
  ul1.appendChild(createListItem("dosa"));
  ul1.appendChild(createListItem("chapathi"));
  ul1.appendChild(createListItem("poori"));
  ul1.appendChild(createListItem("upma"));

  const lunch = document.createElement("div");
  lunch.classList.add("lunch");
  const t2 = document.createElement("h2");
  t2.innerHTML = "Lunch";
  lunch.appendChild(t2);

  const ul2 = document.createElement("ul");
  lunch.appendChild(ul2);
  ul2.appendChild(createListItem("idli"));
  ul2.appendChild(createListItem("dosa"));
  ul2.appendChild(createListItem("chapathi"));
  ul2.appendChild(createListItem("poori"));
  ul2.appendChild(createListItem("upma"));

  const dinner = document.createElement("div");
  const t3 = document.createElement("h2");
  dinner.classList.add("dinner");
  t3.innerHTML = "Dinner!";
  dinner.appendChild(t3);

  const ul3 = document.createElement("ul");
  dinner.appendChild(ul3);
  ul3.appendChild(createListItem("idli"));
  ul3.appendChild(createListItem("dosa"));
  ul3.appendChild(createListItem("chapathi"));
  ul3.appendChild(createListItem("poori"));
  ul3.appendChild(createListItem("upma"));

  menu_item_box.appendChild(breakfast);
  menu_item_box.appendChild(lunch);
  menu_item_box.appendChild(dinner);

  return menu_box;
};

const createListItem = (litext) => {
  const li = document.createElement("li");
  li.innerHTML = litext;
  return li;
};

export { displayMenu };
