import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // costs
    addInteractivityToButton(
      ".fillingButton--costs",
      ".fillingButton__svg-circle--costs",
      ".fillingButton__circle--costs",
      2,
      2,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // stack top
    addInteractivityToButton(
      ".fillingButton--stackTop",
      ".fillingButton__svg-circle--stackTop",
      ".fillingButton__circle--stackTop",
      3,
      4,
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
    // stack top
    addInteractivityToButton(
      ".fillingButton--stackTop",
      ".fillingButton__svg-circle--stackTop",
      ".fillingButton__circle--stackTop",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costs
    addInteractivityToButton(
      ".fillingButton--costs",
      ".fillingButton__svg-circle--costs",
      ".fillingButton__circle--costs",
      3,
      4,
      0,
      0,
      false
    );
  } catch (error) {}
});
