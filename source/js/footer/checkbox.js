try {
  window.addEventListener("load", function () {
    const checkbox = document.querySelector(
      ".footer__right-side-form-form-checkbox"
    );
    const checkboxCustomActive = document.querySelector(
      ".footer__right-side-form-form-checkbox-custom--active"
    );

    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        checkboxCustomActive.style.opacity = 0;
      }
      if (checkbox.checked) {
        checkboxCustomActive.style.opacity = 1;
      }
    });
  });
} catch (error) {}
