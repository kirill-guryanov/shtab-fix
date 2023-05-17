import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // intro bottom
    addInteractivityToButton(
      ".fillingButton--introBottom",
      ".fillingButton__svg-circle--introBottom",
      ".fillingButton__circle--introBottom",
      3,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // servicesTop
    addInteractivityToButton(
      ".fillingButton--servicesTop",
      ".fillingButton__svg-circle--servicesTop",
      ".fillingButton__circle--servicesTop",
      2,
      2,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //   );
  // } catch (error) {}
  try {
    // introBottomOffer
    addInteractivityToButton(
      ".fillingButton--introBottomOffer",
      ".fillingButton__svg-circle--introBottomOffer",
      ".fillingButton__circle--introBottomOffer",
      3,
      4,
      0,
      0,
      true,
      true
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // intro bottom
    addInteractivityToButton(
      ".fillingButton--introBottom",
      ".fillingButton__svg-circle--introBottom",
      ".fillingButton__circle--introBottom",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // servicesTop
    addInteractivityToButton(
      ".fillingButton--servicesTop",
      ".fillingButton__svg-circle--servicesTop",
      ".fillingButton__circle--servicesTop",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  try {
    // introBottomOffer
    addInteractivityToButton(
      ".fillingButton--introBottomOffer",
      ".fillingButton__svg-circle--introBottomOffer",
      ".fillingButton__circle--introBottomOffer",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
});
