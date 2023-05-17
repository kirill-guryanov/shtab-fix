// // import { BrowserDetect } from "../utils/browserDetect";
// // BrowserDetect.init();

// // if (BrowserDetect.browser === "Safari")

// // if (window.innerWidth >= 1024) {
// // let whiteSections;
// // let blackSections;
// // let whiteArrayTopOffsets = [];
// // let blackArrayTopOffsets = [];

// window.addEventListener("load", function () {
//   // // +++++++++++++++
//   // blackSections = document.querySelectorAll(".blackSection");
//   // blackSections.forEach((black) => {
//   //   blackArrayTopOffsets.push(black.offsetTop);
//   // });
//   // console.log(blackArrayTopOffsets);

//   // whiteSections = document.querySelectorAll(".whiteSection");
//   // whiteSections.forEach((white) => {
//   //   whiteArrayTopOffsets.push(white.offsetTop);
//   // });
//   // console.log(whiteArrayTopOffsets);
//   // // +++++++++++++++
//   const circle = document.querySelector(".progress-ring__circle");
//   const circleParent = document.querySelector(".progress-circle");
//   const circleArrowsParent = document.querySelector(".progress-circle-arrows");

//   const circleArrows = document.querySelectorAll(".progress-circle-arrow");
//   const circleArrowsArray = Array.from(circleArrows);

//   const circleArrowSalad = document.querySelector(
//     ".progress-circle-arrow--salad"
//   );
//   const circleArrowBlack = document.querySelector(
//     ".progress-circle-arrow--black"
//   );

//   // clear arrow classes
//   function clearArrowsClasses() {
//     circleArrowsArray.forEach((circleArrow) => {
//       if (circleArrow.classList.contains("progress-circle-arrow--active")) {
//         circleArrow.classList.remove("progress-circle-arrow--active");
//       }
//       if (circleArrow.classList.contains("progress-circle-arrow--not-active")) {
//         circleArrow.classList.remove("progress-circle-arrow--not-active");
//       }
//     });
//   }

//   const radius = circle.r.baseVal.value;
//   const circumference = 2 * Math.PI * radius;
//   // offset
//   const offsetTotal = 100;
//   // get top
//   const getTop = () => window.scrollY || document.documentElement.scrollTop;

//   circle.style.strokeDasharray = `${circumference} ${circumference}`;
//   circle.style.strokeDashoffset = `${circumference} ${circumference}`;

//   // progress
//   function setProgress(percent) {
//     const offset = circumference - (percent / 100) * circumference;
//     circle.style.strokeDashoffset = offset;
//   }
//   // updateProgress
//   function updateProgress() {
//     const height = document.documentElement.scrollHeight - window.innerHeight;
//     const dashOffset = 0 + (getTop() * 100) / height;

//     setProgress(dashOffset);
//   }
//   updateProgress();

//   function isActiveCircle() {
//     if (getTop() >= offsetTotal) {
//       circleParent.classList.add("progress-circle--active");
//     }
//     if (getTop() < offsetTotal) {
//       circleParent.classList.remove("progress-circle--active");
//     }
//   }
//   isActiveCircle();

//   window.addEventListener("scroll", () => {
//     updateProgress();

//     isActiveCircle();
//   });

//   // to top
//   Array.from(circleArrows).forEach((circleArrow) => {
//     circleArrow.addEventListener("click", () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     });
//   });
//   circleArrowsParent.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
//   circle.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });

//   // sections
//   window.addEventListener("scroll", () => {
//     // whiteArrayTopOffsets.forEach((white) => {
//     //   console.log(white);
//     // });
//     // console.log(1);
//   });
// });
// // }
