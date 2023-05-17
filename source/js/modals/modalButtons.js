import { addInteractivityToButton } from "../utils/addInteractivityToButton--modals";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const costsItems = document.querySelectorAll(".modal");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--modal");
      const two = item.querySelector(".fillingButton__svg-circle--modal");
      const three = item.querySelector(".fillingButton__circle--modal");

      addInteractivityToButton(
        one,
        two,
        three,
        3,
        3,
        0,
        0,
        true,
        true,
        true,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {});
