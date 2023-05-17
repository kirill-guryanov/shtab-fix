import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--projectsOffer",
      ".fillingButton__svg-circle--projectsOffer",
      ".fillingButton__circle--projectsOffer",
      2,
      2,
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
      ".fillingButton--projectsOffer",
      ".fillingButton__svg-circle--projectsOffer",
      ".fillingButton__circle--projectsOffer",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});
