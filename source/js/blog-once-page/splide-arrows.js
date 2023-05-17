try {
  window.addEventListener("load", function () {
    try {
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const splide = document.querySelector(
        ".intro__related-publications-slider"
      );
      const splideArrows = document.querySelectorAll(
        ".intro__related-publications-slider .splide__arrow"
      );

      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height / 2;
      const titleForCalibrationArrowsTop = titleForCalibrationArrows.offsetTop;

      const splideTop = splide.offsetTop;

      Array.from(splideArrows).forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";

        if (window.innerWidth <= 560) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            70 +
            "px";
        }

        // if (window.innerWidth <= 450) {
        //   splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
        // }
      });
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        const titleForCalibrationArrows = document.querySelector(
          ".section__titles--reviews"
        );
        const splide = document.querySelector(
          ".intro__related-publications-slider"
        );
        const splideArrows = document.querySelectorAll(
          ".intro__related-publications-slider .splide__arrow"
        );

        const titleForCalibrationArrowsHeight =
          titleForCalibrationArrows.getBoundingClientRect().height / 2;
        const titleForCalibrationArrowsTop =
          titleForCalibrationArrows.offsetTop;

        const splideTop = splide.offsetTop;

        Array.from(splideArrows).forEach((splideArrow) => {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";

          if (window.innerWidth <= 560) {
            splideArrow.style.top =
              titleForCalibrationArrowsHeight +
              titleForCalibrationArrowsTop -
              splideTop +
              70 +
              "px";
          }

          // if (window.innerWidth <= 450) {
          //   splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
          // }
        });
      } catch (error) {}
    });
  });
} catch (error) {}
