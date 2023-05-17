const accordions = document.querySelectorAll(
  ".answers__contentBottomLeftAccordion"
);

document.addEventListener("DOMContentLoaded", () => {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(
        ".answers__contentBottomLeftAccordionTop"
      );
      const content = self.querySelector(
        ".answers__contentBottomLeftAccordionBottom"
      );

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
});
