const displayHome = () => {
  const dis = document.createElement("div");
  dis.classList.add("home-title");
  dis.innerHTML = `It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-o
   r-less normal distribution of letters, as opposed to using 'Content here, content here', making it
   look like readable English. Many desktop publishing packages and web page editors now use Lorem Ip
   sum as their default model text, and a search for 'lorem ipsum' will uncover many web sites stil
   l in their infancy. Various versions have evolved over the years, sometimes by accident, someti
   mes on purpose (injected humour and the like).

`;
  return dis;
};

export { displayHome };
