try {
  window.addEventListener("load", function () {
    const allButtons = document.querySelectorAll(
      ".about-us__right-side-read-more"
    );

    allButtons.forEach((button) => {
      const buttonSpan = button.querySelector("span");
      const buttonRightSide = button.querySelector(
        ".about-us__right-side-read-more-content"
      );

      if (buttonSpan) {
        const buttonSpanWidth = buttonSpan.getBoundingClientRect().width;
        buttonSpan.classList.contains(
          "about-us__right-side-read-more-span--brief-bottom"
        );

        if (
          buttonSpan.classList.contains(
            "about-us__right-side-read-more-span--brief-bottom"
          )
        ) {
        } else if (buttonRightSide) {
          buttonRightSide.style.marginLeft = -buttonSpanWidth + "px";
        }
      }
    });
  });
} catch (error) {}
