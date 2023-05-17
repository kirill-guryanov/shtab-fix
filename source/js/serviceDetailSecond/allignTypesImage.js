try {
  const items = document.querySelectorAll(".types__contentBottomItem-sds");

  document.addEventListener("DOMContentLoaded", () => {
    items.forEach((item) => {
      let text;
      let image;
      let textLeftMargin;
      let textWidth;

      try {
        text = item.querySelector(".decorationsWrapperBlackText-sds");
        image = item.querySelector(".decorationsWrapperBlackImage");

        textLeftMargin = text.offsetLeft;
        textWidth = text.getBoundingClientRect().width;

        image.style.left = `${textLeftMargin + textWidth + 10}px`;
      } catch (error) {}

      if (window.innerWidth <= 900) {
        try {
          image.style.left = `${textLeftMargin + textWidth + 20}px`;
        } catch (error) {}
      }

      if (window.innerWidth <= 350) {
        try {
          image.style.left = `${textLeftMargin + textWidth + 30}px`;
        } catch (error) {}
      }
    });
  });
} catch (error) {}
