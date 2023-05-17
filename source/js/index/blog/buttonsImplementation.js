import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-top",
      ".fillingButton__svg-circle--blog-top",
      ".fillingButton__circle--blog-top",
      2,
      2,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
  try {
    addInteractivityToButton(
      ".fillingButton--blog-telegram",
      ".fillingButton__svg-circle--blog-telegram",
      ".fillingButton__circle--blog-telegram",
      2,
      2,
      0,
      0,
      true,
      true,
      false,
      [31, 25]
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-top",
      ".fillingButton__svg-circle--blog-top",
      ".fillingButton__circle--blog-top",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    addInteractivityToButton(
      ".fillingButton--blog-telegram",
      ".fillingButton__svg-circle--blog-telegram",
      ".fillingButton__circle--blog-telegram",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});
