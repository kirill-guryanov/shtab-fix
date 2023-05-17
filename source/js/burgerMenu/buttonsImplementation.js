import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  let isServicesPage;

  try {
    isServicesPage = document.querySelector(
      ".fillingButton--burgerMenuAddresses--services"
    );
  } catch (error) {}

  if (isServicesPage) {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        2,
        3,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  } else {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        1,
        1,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  }
});
