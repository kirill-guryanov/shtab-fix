document.addEventListener("DOMContentLoaded", () => {
  let modalTriggers;
  let wrappers;
  let button;
  let form;
  let inputs;
  let isModalTrigger;
  let isWrapper;
  let body;

  try {
    modalTriggers = document.querySelectorAll(".modalTrigger");
    wrappers = document.querySelectorAll(".wrapper");
    // add form submisson with validation
    wrappers.forEach((wrapper) => {
      button = wrapper.querySelector(".fillingButton");
      form = wrapper.querySelector("form");
      inputs = form.querySelectorAll("input");
    });
    //
    modalTriggers.forEach((modalTrigger) => {
      modalTrigger.addEventListener("click", () => {
        //   modals.forEach((modal) => {
        wrappers.forEach((wrapper) => {
          isModalTrigger = modalTrigger.dataset.modal;
          isWrapper = wrapper.dataset.modal;

          if (isModalTrigger && isWrapper && isModalTrigger === isWrapper) {
            wrapper.classList.add("wrapper--visible");

            body = document.querySelector("body");
            body.classList.add("hidden");
          }
        });
      });
    });
  } catch (error) {}
});

document.addEventListener("keyup", (e) => {
  let wrappers;
  let visibleWrapper;
  let body;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      visibleWrapper = wrapper.classList.contains("wrapper--visible");

      if (e.key === "Escape" && visibleWrapper) {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      }
    });
  } catch (error) {}
});

window.addEventListener("load", () => {
  let wrappers;
  let body;
  let closeButton;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", (e) => {
        if (e.target === wrapper) {
          wrappers.forEach((wrapper) => {
            wrapper.classList.remove("wrapper--visible");

            body = document.querySelector("body");
            body.classList.remove("hidden");
          });
        }
      });

      closeButton = wrapper.querySelector(".modal__contentCross");

      closeButton.addEventListener("click", () => {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      });
    });
  } catch (error) {}
});
