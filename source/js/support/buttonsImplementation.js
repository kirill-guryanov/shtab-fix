import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}

  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

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
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(one, two, three, 3, 3, 0, 0, false);
    });
  } catch (error) {}
});
