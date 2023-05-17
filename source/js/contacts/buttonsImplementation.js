import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--contacts",
      ".fillingButton__svg-circle--contacts",
      ".fillingButton__circle--contacts",
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
      ".fillingButton--contacts",
      ".fillingButton__svg-circle--contacts",
      ".fillingButton__circle--contacts",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});
