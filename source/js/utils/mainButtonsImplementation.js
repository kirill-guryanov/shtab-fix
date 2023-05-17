// import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

// document.addEventListener("DOMContentLoaded", () => {
//   // services
//   try {
//     addInteractivityToButton(
//       ".fillingButton--services-item-1",
//       ".fillingButton__svg-circle--services-item-1",
//       ".fillingButton__circle--services-item-1",
//       2,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   try {
//     addInteractivityToButton(
//       ".fillingButton--services-item-2",
//       ".fillingButton__svg-circle--services-item-2",
//       ".fillingButton__circle--services-item-2",
//       2,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   try {
//     addInteractivityToButton(
//       ".fillingButton--services-item-3",
//       ".fillingButton__svg-circle--services-item-3",
//       ".fillingButton__circle--services-item-3",
//       2,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   try {
//     addInteractivityToButton(
//       ".fillingButton--services-item-4",
//       ".fillingButton__svg-circle--services-item-4",
//       ".fillingButton__circle--services-item-4",
//       2,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   //   404
//   try {
//     addInteractivityToButton(
//       ".fillingButton--404",
//       ".fillingButton__svg-circle--404",
//       ".fillingButton__circle--404",
//       2,
//       22,
//       0,
//       0,
//       true,
//       "blackArrow",
//       false
//     );
//   } catch (error) {}

//   //   attraction
//   try {
//     // intro bottom
//     addInteractivityToButton(
//       ".fillingButton--introBottom",
//       ".fillingButton__svg-circle--introBottom",
//       ".fillingButton__circle--introBottom",
//       3,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}
//   try {
//     // servicesTop
//     addInteractivityToButton(
//       ".fillingButton--servicesTop",
//       ".fillingButton__svg-circle--servicesTop",
//       ".fillingButton__circle--servicesTop",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}
//   try {
//     // answersQuestions
//     addInteractivityToButton(
//       ".fillingButton--answersQuestions",
//       ".fillingButton__svg-circle--answersQuestions",
//       ".fillingButton__circle--answersQuestions",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "blackArrow"
//     );
//   } catch (error) {}
//   try {
//     // introBottomOffer
//     addInteractivityToButton(
//       ".fillingButton--introBottomOffer",
//       ".fillingButton__svg-circle--introBottomOffer",
//       ".fillingButton__circle--introBottomOffer",
//       3,
//       4,
//       0,
//       0,
//       true,
//       "blackArrow"
//     );
//   } catch (error) {}

//   //   blog once page
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-once-page",
//       ".fillingButton__svg-circle--blog-once-page",
//       ".fillingButton__circle--blog-once-page",
//       2,
//       22,
//       0,
//       0,
//       true,
//       "blackArrow",
//       false
//     );
//   } catch (error) {}

//   //   brief
//   try {
//     addInteractivityToButton(
//       ".fillingButton--brief-intro",
//       ".fillingButton__svg-circle--brief-intro",
//       ".fillingButton__circle--brief-intro",
//       2,
//       22,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}
//   try {
//     addInteractivityToButton(
//       ".fillingButton--brief-bottom",
//       ".fillingButton__svg-circle--brief-bottom",
//       ".fillingButton__circle--brief-bottom",
//       2,
//       2,
//       0,
//       0,
//       false,
//       null,
//       true,
//       [20, 20],
//       "bigWhiteFirst"
//     );
//   } catch (error) {}

//   //   burger menu
//   let isServicesPage;

//   try {
//     isServicesPage = document.querySelector(
//       ".fillingButton--burgerMenuAddresses--services"
//     );
//   } catch (error) {}

//   if (isServicesPage) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--burgerMenuAddresses",
//         ".fillingButton__svg-circle--burgerMenuAddresses",
//         ".fillingButton__circle--burgerMenuAddresses",
//         2,
//         3,
//         0,
//         0,
//         true,
//         "whiteArrow",
//         true
//       );
//     } catch (error) {}
//   } else {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--burgerMenuAddresses",
//         ".fillingButton__svg-circle--burgerMenuAddresses",
//         ".fillingButton__circle--burgerMenuAddresses",
//         1,
//         1,
//         0,
//         0,
//         true,
//         "whiteArrow",
//         true
//       );
//     } catch (error) {}
//   }

//   //   contacts
//   try {
//     addInteractivityToButton(
//       ".fillingButton--contacts",
//       ".fillingButton__svg-circle--contacts",
//       ".fillingButton__circle--contacts",
//       2,
//       22,
//       0,
//       0,
//       true,
//       "blackArrow",
//       false
//     );
//   } catch (error) {}

//   //   index about-us
//   try {
//     addInteractivityToButton(
//       ".fillingButton--about-us",
//       ".fillingButton__svg-circle--about-us",
//       ".fillingButton__circle--about-us",
//       2,
//       22,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   //   index blog
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-top",
//       ".fillingButton__svg-circle--blog-top",
//       ".fillingButton__circle--blog-top",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "blackArrow",
//       false
//     );
//   } catch (error) {}
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-telegram",
//       ".fillingButton__svg-circle--blog-telegram",
//       ".fillingButton__circle--blog-telegram",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "assets/images/header/telegram--transparent.svg",
//       false,
//       [31, 25]
//     );
//   } catch (error) {}

//   //   //   index intro
//   //   try {
//   //     addInteractivityToButton(
//   //       ".fillingButton--intro-1",
//   //       ".fillingButton__svg-circle--intro-1",
//   //       ".fillingButton__circle--intro-1",
//   //       2,
//   //       1,
//   //       0,
//   //       -65,
//   //       true,
//   //       "blackArrow",
//   //       false
//   //     );
//   //   } catch (error) {}
//   //   try {
//   //     addInteractivityToButton(
//   //       ".fillingButton--intro-3",
//   //       ".fillingButton__svg-circle--intro-3",
//   //       ".fillingButton__circle--intro-3",
//   //       2,
//   //       1,
//   //       0,
//   //       -65,
//   //       true,
//   //       "blackArrow",
//   //       false
//   //     );
//   //   } catch (error) {}
//   //   try {
//   //     addInteractivityToButton(
//   //       ".fillingButton--intro-2",
//   //       ".fillingButton__svg-circle--intro-2",
//   //       ".fillingButton__circle--intro-2",
//   //       2,
//   //       1,
//   //       0,
//   //       -65,
//   //       true,
//   //       "blackArrow",
//   //       false
//   //     );
//   //   } catch (error) {}

//   //   if (window.innerWidth <= 1070) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}

//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   } else if (window.innerWidth <= 620) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   } else if (window.innerWidth <= 380) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         true,
//   //         "blackArrow",
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   }

//   //   products
//   try {
//     addInteractivityToButton(
//       ".fillingButton--products",
//       ".fillingButton__svg-circle--products",
//       ".fillingButton__circle--products",
//       2,
//       4,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}

//   //   modification
//   try {
//     // intro top
//     addInteractivityToButton(
//       ".fillingButton--introTop",
//       ".fillingButton__svg-circle--introTop",
//       ".fillingButton__circle--introTop",
//       3,
//       3,
//       0,
//       0,
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}
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
//       true,
//       "whiteArrow",
//       true
//     );
//   } catch (error) {}
//   try {
//     // answersQuestions
//     addInteractivityToButton(
//       ".fillingButton--answersQuestions",
//       ".fillingButton__svg-circle--answersQuestions",
//       ".fillingButton__circle--answersQuestions",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "blackArrow",
//       false
//     );
//   } catch (error) {}
//   try {
//     // benefitsRight
//     addInteractivityToButton(
//       ".fillingButton--benefitsRight",
//       ".fillingButton__svg-circle--benefitsRight",
//       ".fillingButton__circle--benefitsRight",
//       2,
//       2,
//       0,
//       0,
//       true,
//       "blackArrow",
//       true
//     );
//   } catch (error) {}
// });

// // +++++++++++++++++++++++++++++++++++

// window.addEventListener("resize", () => {
//   // 404
//   try {
//     addInteractivityToButton(
//       ".fillingButton--404",
//       ".fillingButton__svg-circle--404",
//       ".fillingButton__circle--404",
//       2,
//       22,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   attraction
//   try {
//     // intro bottom
//     addInteractivityToButton(
//       ".fillingButton--introBottom",
//       ".fillingButton__svg-circle--introBottom",
//       ".fillingButton__circle--introBottom",
//       3,
//       3,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
//   try {
//     // servicesTop
//     addInteractivityToButton(
//       ".fillingButton--servicesTop",
//       ".fillingButton__svg-circle--servicesTop",
//       ".fillingButton__circle--servicesTop",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
//   try {
//     // answersQuestions
//     addInteractivityToButton(
//       ".fillingButton--answersQuestions",
//       ".fillingButton__svg-circle--answersQuestions",
//       ".fillingButton__circle--answersQuestions",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
//   try {
//     // introBottomOffer
//     addInteractivityToButton(
//       ".fillingButton--introBottomOffer",
//       ".fillingButton__svg-circle--introBottomOffer",
//       ".fillingButton__circle--introBottomOffer",
//       3,
//       3,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   // blogoncepage
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-once-page",
//       ".fillingButton__svg-circle--blog-once-page",
//       ".fillingButton__circle--blog-once-page",
//       2,
//       22,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   brief
//   try {
//     addInteractivityToButton(
//       ".fillingButton--brief-intro",
//       ".fillingButton__svg-circle--brief-intro",
//       ".fillingButton__circle--brief-intro",
//       2,
//       22,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   contacts
//   try {
//     addInteractivityToButton(
//       ".fillingButton--contacts",
//       ".fillingButton__svg-circle--contacts",
//       ".fillingButton__circle--contacts",
//       2,
//       22,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   index about-us
//   try {
//     addInteractivityToButton(
//       ".fillingButton--about-us",
//       ".fillingButton__svg-circle--about-us",
//       ".fillingButton__circle--about-us",
//       2,
//       22,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   index blog
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-top",
//       ".fillingButton__svg-circle--blog-top",
//       ".fillingButton__circle--blog-top",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
//   try {
//     addInteractivityToButton(
//       ".fillingButton--blog-telegram",
//       ".fillingButton__svg-circle--blog-telegram",
//       ".fillingButton__circle--blog-telegram",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   //   index intro
//   //   if (window.innerWidth > 1070) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         2,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         2,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         2,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   }

//   //   if (window.innerWidth <= 1070) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -65,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   }

//   //   if (window.innerWidth <= 620) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -10,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   }

//   //   if (window.innerWidth <= 380) {
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-1",
//   //         ".fillingButton__svg-circle--intro-1",
//   //         ".fillingButton__circle--intro-1",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-2",
//   //         ".fillingButton__svg-circle--intro-2",
//   //         ".fillingButton__circle--intro-2",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //     try {
//   //       addInteractivityToButton(
//   //         ".fillingButton--intro-3",
//   //         ".fillingButton__svg-circle--intro-3",
//   //         ".fillingButton__circle--intro-3",
//   //         1,
//   //         1,
//   //         0,
//   //         -50,
//   //         false
//   //       );
//   //     } catch (error) {}
//   //   }

//   //   products
//   try {
//     addInteractivityToButton(
//       ".fillingButton--products",
//       ".fillingButton__svg-circle--products",
//       ".fillingButton__circle--products",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}

//   //   modification
//   try {
//     // intro top
//     addInteractivityToButton(
//       ".fillingButton--introTop",
//       ".fillingButton__svg-circle--introTop",
//       ".fillingButton__circle--introTop",
//       3,
//       3,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
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
//   try {
//     // answersQuestions
//     addInteractivityToButton(
//       ".fillingButton--answersQuestions",
//       ".fillingButton__svg-circle--answersQuestions",
//       ".fillingButton__circle--answersQuestions",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
//   try {
//     // benefitsRight
//     addInteractivityToButton(
//       ".fillingButton--benefitsRight",
//       ".fillingButton__svg-circle--benefitsRight",
//       ".fillingButton__circle--benefitsRight",
//       2,
//       2,
//       0,
//       0,
//       false
//     );
//   } catch (error) {}
// });
