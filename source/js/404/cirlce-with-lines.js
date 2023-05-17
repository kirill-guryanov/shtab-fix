try {
  window.addEventListener("load", function () {
    const circle = document.querySelector(
      ".intro404__decoration-circle-with-lines"
    );
    const calibrationTitle = document.querySelector(".intro404__title");

    try {
      const calibrationTitleTop = calibrationTitle.offsetTop;
      // const calibrationTitleLeft = calibrationTitle.getBoundingClientRect().width / 2
      const calibrationTitleParentLeft =
        calibrationTitle.offsetParent.offsetWidth / 2;

      const circleWidth = circle.getBoundingClientRect().width / 2;

      circle.style.top = calibrationTitleTop - 40 + "px";
      circle.style.left = calibrationTitleParentLeft - circleWidth - 120 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        const calibrationTitleTop = calibrationTitle.offsetTop;
        const calibrationTitleParentLeft =
          calibrationTitle.offsetParent.offsetWidth / 2;

        const circleWidth = circle.getBoundingClientRect().width / 2;

        circle.style.top = calibrationTitleTop - 40 + "px";
        circle.style.left =
          calibrationTitleParentLeft - circleWidth - 120 + "px";
      } catch (error) {}
    });
  });
} catch (error) {}
