import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--infoOffer",
      ".fillingButton__svg-circle--infoOffer",
      ".fillingButton__circle--infoOffer",
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
  try {
    addInteractivityToButton(
      ".fillingButton--infoOffer",
      ".fillingButton__svg-circle--infoOffer",
      ".fillingButton__circle--infoOffer",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
});
