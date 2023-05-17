import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--services-item-1",
  //     ".fillingButton__svg-circle--services-item-1",
  //     ".fillingButton__circle--services-item-1",
  //     2,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(".servisec-list__item-index");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--services-item");
      const two = item.querySelector(
        ".fillingButton__svg-circle--services-item"
      );
      const three = item.querySelector(".fillingButton__circle--services-item");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
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
