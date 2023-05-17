try {
  const section = document.querySelector(".stages-attraction");
  const list = document.querySelector(
    ".stages__contentBottomWrapper-attraction"
  );

  window.addEventListener("load", () => {
    try {
      const listHeight = list.getBoundingClientRect().height;
      section.style.maxHeight = listHeight + 30 + "px";
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      const listHeight = list.getBoundingClientRect().height;
      section.style.maxHeight = listHeight + 30 + "px";
    } catch (error) {}
  });
} catch (error) {}
