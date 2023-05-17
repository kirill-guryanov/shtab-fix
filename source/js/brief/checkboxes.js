try {
  window.addEventListener("load", function () {
    const checkboxes = document.querySelectorAll(
      ".forms__form-radio-block-brief"
    );
    const checkboxesArray = Array.from(checkboxes);

    document.addEventListener("DOMContentLoaded", () => {
      checkboxesArray.forEach((checkbox) => {
        let input = checkbox.querySelector("input");

        if (input.checked) {
          checkbox.classList.add("forms__form-radio-block-brief--active");
        }
      });
    });

    checkboxesArray.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        let input = checkbox.querySelector("input");

        if (!input.checked) {
          checkboxesArray.forEach((checkboxForReset) => {
            let inputReset = checkboxForReset.querySelector("input");
            inputReset.checked = false;
            checkboxForReset.classList.remove(
              "forms__form-radio-block-brief--active"
            );
          });

          input.checked = true;
          checkbox.classList.add("forms__form-radio-block-brief--active");
        }
      });
    });
  });
} catch (error) {}
