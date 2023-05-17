try {
  ("use strict");
  // parent
  const parent = document.querySelector(".quizComponent");
  // slider
  const slidesWrapper = document.querySelector(".quizComponentQuestions");
  const slides = document.querySelectorAll(".quizComponentQuestion");
  // controls
  const controls = document.querySelector(".quizComponentControls");
  // buttons
  const leftSideButton = document.querySelector(
    ".quizComponentControlsLeftButton"
  );

  const leftSideButtonSvg = document.querySelector(
    ".quizComponentControlsLeftButtonImage"
  );
  const rightSideButton = document.querySelector(
    ".quizComponentControlsRightButton"
  );
  // stages
  const currentStage = document.querySelector(
    ".quizComponentControlsStagesCurrentStage"
  );
  const stagesAtAll = document.querySelector(
    ".quizComponentControlsStagesAtAll"
  );

  //
  let currentLeftButtonFontSize = 0;

  window.addEventListener("load", () => {
    try {
      currentLeftButtonFontSize = getComputedStyle(leftSideButton).fontSize;
      let currentSlide = 1;
      let atAllSlides;
      //
      let currentTransformPosition = 0;
      // get width for scroll
      const parentWidth = parent.getBoundingClientRect().width;
      // set slides width
      slides.forEach((slide, index) => {
        const parentLeftPadding = getComputedStyle(parent).paddingLeft;
        const reg = /\d*/;
        slide.style.width = `${
          parentWidth - Number(parentLeftPadding.match(reg) * 2)
        }px`;
        slide.style.marginRight = `${Number(
          parentLeftPadding.match(reg) * 2
        )}px`;
        slide.dataset.slideNumber = index + 1;
        atAllSlides = slide.dataset.slideNumber = index + 1;
      });
      // set at all stages
      stagesAtAll.textContent = atAllSlides;
      // set buttons type for change animation and interaction
      leftSideButton.dataset.type = "next";
      // right side button
      rightSideButton.addEventListener("click", () => {
        const isActive = rightSideButton.dataset.type === "active";

        const notLastSlideNow = currentSlide !== atAllSlides;
        const lastSlideNow = currentSlide === atAllSlides;

        if (isActive && notLastSlideNow && atAllSlides - currentSlide !== 1) {
          switch (currentSlide) {
            case 2:
              slides.forEach((slide, index) => {
                if (currentSlide === 2 && index + 1 === 2) {
                  const inputs = slide.querySelectorAll("input");
                  inputs.forEach((input) => {
                    if (input.value !== "" || input.value.length > 3) {
                      currentTransformPosition -= parentWidth;
                      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                      // set current slide
                      currentSlide++;
                      console.log(currentSlide);
                      console.log(input.value);
                      currentStage.innerText = currentSlide;
                    }
                  });
                }
              });

            case 3:
              slides.forEach((slide, index) => {
                if (currentSlide === 3 && index + 1 === 3) {
                  const inputs = slide.querySelectorAll("input");
                  inputs.forEach((input) => {
                    if (input.checked) {
                      currentTransformPosition -= parentWidth;
                      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                      // set current slide
                      currentSlide++;
                      console.log(currentSlide);
                      console.log(input.value);
                      currentStage.innerText = currentSlide;
                    }
                  });
                }
              });
          }

          // currentTransformPosition -= parentWidth;
          // slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // // set current slide
          // currentSlide++;
          // currentStage.innerText = currentSlide;
        } else if (isActive && atAllSlides - currentSlide === 1) {
          if (currentSlide === 4) {
            slides.forEach((slide, index) => {
              if (currentSlide === 4 && index + 1 === 4) {
                console.log(currentSlide);
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  console.log(input);
                  if (input.value !== "" || input.value.length > 3) {
                    // set current slide
                    const submitButton = document.querySelector(
                      ".quizComponentControlsRightButtonSubmit"
                    );

                    let counter = 0;

                    rightSideButton.style.display = "none";
                    submitButton.style.display = "flex";
                    submitButton.removeAttribute("disabled");

                    currentTransformPosition -= parentWidth;
                    slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                    // set current slide
                    if (counter < 1) {
                      currentSlide++;
                      counter++;
                    }
                    currentStage.innerText = atAllSlides;
                  }
                });
              }
            });
          }
        }
        if (lastSlideNow) {
          if (currentSlide === 5) {
            slides.forEach((slide, index) => {
              if (currentSlide === 5 && index + 1 === 5) {
                console.log(currentSlide);
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  if (input.value !== "" || input.value.length > 3) {
                    parent.submit();
                  }
                });
              }
            });
          }
        }
      });
      // left side buttom
      leftSideButton.addEventListener("click", () => {
        const isNext = leftSideButton.dataset.type === "next";
        const isPrev = leftSideButton.dataset.type === "prev";

        const notLastSlideNow = currentSlide !== atAllSlides;
        const notLessThanOne = currentSlide !== 1;

        if (isNext && notLastSlideNow) {
          if (currentSlide === 1) {
            slides.forEach((slide, index) => {
              if (currentSlide === 1 && index + 1 === 1) {
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  if (input.checked) {
                    currentTransformPosition -= parentWidth;
                    slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                    // set current slide
                    currentSlide++;
                    currentStage.innerText = currentSlide;
                  }
                });
              }
            });
          }
          // currentTransformPosition -= parentWidth;
          // slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // // set current slide
          // currentSlide++;
          // currentStage.innerText = currentSlide;
        }

        if (isPrev && notLessThanOne) {
          currentTransformPosition += parentWidth;
          slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // set current slide
          currentSlide--;
          currentStage.innerText = currentSlide;
        }

        if (currentSlide > 1) {
          leftSideButton.dataset.type = "prev";
          // add active type to right button
          rightSideButton.dataset.type = "active";
          //
          rightSideButton.classList.remove(
            "quizComponentControlsRightButton--notActive"
          );
          //
          leftSideButton.classList.add("quizComponentControlsLeftButton--prev");
          leftSideButtonSvg.classList.add(
            "quizComponentControlsLeftButtonImage--prev"
          );
          //
          leftSideButton.style.fontSize = 0;
        }

        if (currentSlide === 1) {
          leftSideButton.style.fontSize = `${currentLeftButtonFontSize}`;
          //
          leftSideButton.dataset.type = "next";
          // reset active data type from right button
          rightSideButton.dataset.type = "";
          rightSideButton.classList.add(
            "quizComponentControlsRightButton--notActive"
          );
          //
          leftSideButtonSvg.classList.remove(
            "quizComponentControlsLeftButtonImage--prev"
          );
          leftSideButton.classList.remove(
            "quizComponentControlsLeftButton--prev"
          );
        }

        if (currentSlide < atAllSlides) {
          rightSideButton.textContent = "Далее";
        }
      });
    } catch (error) {}
  });
} catch (error) {}
