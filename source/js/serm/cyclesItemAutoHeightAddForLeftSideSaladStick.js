try {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".cycles__contentBottomItem");

    items.forEach((item) => {
      const itemHeight = item.getBoundingClientRect().height;

      const itemsLeftSide = item.querySelector(
        ".cycles__contentBottomItemLeft"
      );

      itemsLeftSide.style.width = `${itemHeight}px`;
    });
  });

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".cycles__contentBottomItem");

    items.forEach((item) => {
      const itemHeight = item.getBoundingClientRect().height;

      const itemsLeftSide = item.querySelector(
        ".cycles__contentBottomItemLeft"
      );

      itemsLeftSide.style.width = `${itemHeight}px`;
    });
  });
} catch (error) {}
