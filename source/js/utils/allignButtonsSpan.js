try {
  window.addEventListener("load", function () {
    const allButtons = document.querySelectorAll(".fillingButton");

    allButtons.forEach((button) => {
      // get span
      const buttonSpan = button.querySelector("span");
      const buttonSpanWidth = buttonSpan.getBoundingClientRect().width;
      // get content block
      const buttonContent = button.querySelector(".fillingButton__content");

      if (
        buttonSpan &&
        buttonSpan.classList.contains("fillingButton__span--smallMargin")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth / 2}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      } else if (
        buttonSpan &&
        buttonSpan.classList.contains(
          "fillingButton__span--smallMargin-and-partial"
        )
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth}px`;
        }
      } else if (
        buttonSpan &&
        !buttonSpan.closest(".fillingButton__content--big")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth + 3}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      }
    });
  });
} catch (error) {}
