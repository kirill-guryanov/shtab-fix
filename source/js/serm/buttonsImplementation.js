import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-serm"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");
      addInteractivityToButton(
        one,
        two,
        three,
        2,
        2,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-serm"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");
      addInteractivityToButton(
        one,
        two,
        three,
        2,
        2,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});
