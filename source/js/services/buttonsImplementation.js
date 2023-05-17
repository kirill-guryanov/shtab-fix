import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     4,
  //     0,
  //     0,
  //     true,
  //     "blackArrow",
  //     false
  //   );
  // } catch (error) {}

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

window.addEventListener("resize", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     4,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoInfo",
  //     ".fillingButton__svg-circle--infoInfo",
  //     ".fillingButton__circle--infoInfo",
  //     3,
  //     4,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});
