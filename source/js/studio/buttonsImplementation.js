import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-bottom",
      ".fillingButton__svg-circle--brief-bottom",
      ".fillingButton__circle--brief-bottom",
      3,
      3,
      0,
      0,
      false,
      null,
      true,
      [20, 20],
      "bigWhiteFirst"
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-bottom",
      ".fillingButton__svg-circle--brief-bottom",
      ".fillingButton__circle--brief-bottom",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});
