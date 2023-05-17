import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--about-us",
      ".fillingButton__svg-circle--about-us",
      ".fillingButton__circle--about-us",
      2,
      22,
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
      ".fillingButton--about-us",
      ".fillingButton__svg-circle--about-us",
      ".fillingButton__circle--about-us",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});
