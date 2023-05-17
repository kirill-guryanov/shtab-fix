import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-once-page",
      ".fillingButton__svg-circle--blog-once-page",
      ".fillingButton__circle--blog-once-page",
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
      ".fillingButton--blog-once-page",
      ".fillingButton__svg-circle--blog-once-page",
      ".fillingButton__circle--blog-once-page",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});
