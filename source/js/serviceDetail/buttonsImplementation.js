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
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     true,
  //     true
  //   );
  // } catch (error) {}
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
  //     true,
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // offer
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     true,
  //     false
  //   );
  // } catch (error) {}
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
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
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
  // try {
  //   // offer
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});
