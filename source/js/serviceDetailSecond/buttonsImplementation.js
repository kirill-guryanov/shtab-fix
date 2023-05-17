import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  try {
    // types
    addInteractivityToButton(
      ".fillingButton--types",
      ".fillingButton__svg-circle--types",
      ".fillingButton__circle--types",
      3,
      3,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});
