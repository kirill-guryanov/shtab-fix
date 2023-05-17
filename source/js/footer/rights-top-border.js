// window.addEventListener("load", () => {
//   // block with rights
//   const rights = document.querySelector(".footer__left-side-rights");
//   const itemForCalibration = document.querySelector(
//     ".footer__blocks-item--one"
//   );
//   // get left
//   const itemForCalibrationLeft =
//     itemForCalibration.getBoundingClientRect().left;
//   // set margin
//   rights.style.marginLeft = `${itemForCalibrationLeft}px`;

//   if (window.innerWidth <= 930) {
//     rights.style.marginLeft = 0;
//   }

//   // the same on resize
//   window.addEventListener("resize", () => {
//     const rights = document.querySelector(".footer__left-side-rights");
//     const itemForCalibration = document.querySelector(
//       ".footer__blocks-item--one"
//     );

//     const itemForCalibrationLeft =
//       itemForCalibration.getBoundingClientRect().left;
//     rights.style.marginLeft = itemForCalibrationLeft + "px";

//     if (window.innerWidth <= 930) {
//       rights.style.marginLeft = 0;
//     }
//   });
// });
