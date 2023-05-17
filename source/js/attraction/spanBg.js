try {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    items.forEach((item) => {
      const spanAnimationBgWrapper = item.querySelector(
        ".servisec-list__item-title-span-wrapper"
      );
      const titleWithSpan = item.querySelector(
        ".servisec-list__item-title span"
      );
      const span = item.querySelector(".servisec-list__item-title span");

      spanAnimationBgWrapper.style.left =
        titleWithSpan.offsetLeft +
        titleWithSpan.offsetParent.offsetLeft -
        4 +
        "px";
      spanAnimationBgWrapper.style.top =
        titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
      spanAnimationBgWrapper.style.width =
        span.getBoundingClientRect().width + "px";

      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--wide"
        )
      ) {
        spanAnimationBgWrapper.style.width =
          span.getBoundingClientRect().width + 6 + "px";
      }
      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--stages"
        )
      ) {
        spanAnimationBgWrapper.style.width =
          span.getBoundingClientRect().width + 8 + "px";
      }
      spanAnimationBgWrapper.style.height =
        span.getBoundingClientRect().height + "px";

      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--higher"
        )
      ) {
        spanAnimationBgWrapper.style.height =
          span.getBoundingClientRect().height + 6 + "px";
      }
    });
  });

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    items.forEach((item) => {
      const spanAnimationBgWrapper = item.querySelector(
        ".servisec-list__item-title-span-wrapper"
      );
      const titleWithSpan = item.querySelector(
        ".servisec-list__item-title span"
      );
      const span = item.querySelector(".servisec-list__item-title span");

      spanAnimationBgWrapper.style.left =
        titleWithSpan.offsetLeft +
        titleWithSpan.offsetParent.offsetLeft -
        4 +
        "px";
      spanAnimationBgWrapper.style.top =
        titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
      spanAnimationBgWrapper.style.width =
        span.getBoundingClientRect().width + "px";

      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--wide"
        )
      ) {
        spanAnimationBgWrapper.style.width =
          span.getBoundingClientRect().width + 6 + "px";
      }
      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--stages"
        )
      ) {
        spanAnimationBgWrapper.style.width =
          span.getBoundingClientRect().width + 8 + "px";
      }
      spanAnimationBgWrapper.style.height =
        span.getBoundingClientRect().height + "px";

      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--higher"
        )
      ) {
        spanAnimationBgWrapper.style.height =
          span.getBoundingClientRect().height + 6 + "px";
      }
    });
  });
} catch (error) {}
