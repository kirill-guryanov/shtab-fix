try {
  let header;
  let intro;

  try {
    header = document.querySelector(".header--main");
    intro = document.querySelector(".intro--productsOncePage");
  } catch (error) {}

  window.addEventListener("load", () => {
    try {
      intro.style.marginTop = header.getBoundingClientRect().height + "px";
    } catch (error) {}
  });
} catch (error) {}
