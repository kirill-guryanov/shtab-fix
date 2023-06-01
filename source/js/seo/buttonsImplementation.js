import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // costsFooterItem
    addInteractivityToButton(
      ".fillingButton--costsFooterItem",
      ".fillingButton__svg-circle--costsFooterItem",
      ".fillingButton__circle--costsFooterItem",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // benefitsBottom
    addInteractivityToButton(
      ".fillingButton--benefitsBottom",
      ".fillingButton__svg-circle--benefitsBottom",
      ".fillingButton__circle--benefitsBottom",
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
    // benefitsRight
    addInteractivityToButton(
      ".fillingButton--benefitsRight",
      ".fillingButton__svg-circle--benefitsRight",
      ".fillingButton__circle--benefitsRight",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // answersQuestions
    addInteractivityToButton(
      ".fillingButton--answersQuestions",
      ".fillingButton__svg-circle--answersQuestions",
      ".fillingButton__circle--answersQuestions",
      2,
      2,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-seo"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-sup"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  //   try {
  //     // intro bottom
  //     addInteractivityToButton(
  //       ".fillingButton--introBottom",
  //       ".fillingButton__svg-circle--introBottom",
  //       ".fillingButton__circle--introBottom",
  //       2,
  //       2,
  //       0,
  //       0,
  //       false
  //     );
  //   } catch (error) {}
  try {
    // costsFooterItem
    addInteractivityToButton(
      ".fillingButton--costsFooterItem",
      ".fillingButton__svg-circle--costsFooterItem",
      ".fillingButton__circle--costsFooterItem",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // benefitsBottom
    addInteractivityToButton(
      ".fillingButton--benefitsBottom",
      ".fillingButton__svg-circle--benefitsBottom",
      ".fillingButton__circle--benefitsBottom",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // benefitsRight
    addInteractivityToButton(
      ".fillingButton--benefitsRight",
      ".fillingButton__svg-circle--benefitsRight",
      ".fillingButton__circle--benefitsRight",
      2,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // answersQuestions
    addInteractivityToButton(
      ".fillingButton--answersQuestions",
      ".fillingButton__svg-circle--answersQuestions",
      ".fillingButton__circle--answersQuestions",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-seo"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-sup"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});
