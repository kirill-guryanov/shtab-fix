import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--products",
      ".fillingButton__svg-circle--products",
      ".fillingButton__circle--products",
      2,
      4,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--products",
      ".fillingButton__svg-circle--products",
      ".fillingButton__circle--products",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});
