try {
  window.addEventListener("load", function () {
    try {
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-index");
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      const splideTop = splide.offsetTop;
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews-index"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          30 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            115 +
            "px";
        }
      });
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-index");
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      const splideTop = splide.offsetTop;

      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews-index"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          30 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            115 +
            "px";
        }
      });
    } catch (error) {}
  });
} catch (error) {}
