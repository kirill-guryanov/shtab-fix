import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--infoInfo",
      ".fillingButton__svg-circle--infoInfo",
      ".fillingButton__circle--infoInfo",
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
