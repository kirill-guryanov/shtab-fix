import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
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
