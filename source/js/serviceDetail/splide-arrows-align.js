try {
  window.addEventListener("load", function () {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });
} catch (error) {}
