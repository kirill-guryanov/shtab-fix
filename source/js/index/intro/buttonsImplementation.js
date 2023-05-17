import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1070 || window.innerWidth >= 1070) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -65,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  } else if (window.innerWidth <= 620) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -10,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  } else if (window.innerWidth <= 380) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -50,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  }
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 1070) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 1070) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 620) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 380) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//   }
// });
