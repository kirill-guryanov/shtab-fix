import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--404",
      ".fillingButton__svg-circle--404",
      ".fillingButton__circle--404",
      2,
      22,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--404",
      ".fillingButton__svg-circle--404",
      ".fillingButton__circle--404",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});
