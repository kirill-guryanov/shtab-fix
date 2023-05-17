try {
  window.addEventListener("load", function () {
    changeSliderBulletsPosition();
  });

  window.addEventListener("resize", () => {
    changeSliderBulletsPosition();
  });

  // function for align bullets
  function changeSliderBulletsPosition() {
    let introTitle;
    let digitalTitle;
    let paginationContainer;
    let pagination;

    let paginationWidth;
    let paginationBullets;
    let introTitleLeft;
    let introTitleTop;
    let digitalTitleLeft;
    let digitalTitleTop;
    let digitalTitleWidth;
    let digitalTitleHeight;

    try {
      introTitle = document.querySelector(
        ".intro__content-top-title--for-pagination-calibration"
      );
      digitalTitle = document.querySelector(
        ".intro__content-digital-block--for-pagination-calibration"
      );

      paginationContainer = document.querySelector(
        ".intro__splider--container"
      );
      pagination = paginationContainer.querySelector(".splide__pagination");
      paginationWidth = pagination.getBoundingClientRect().width;
      paginationBullets = pagination.querySelectorAll("li");

      // const paginationLeft = pagination.getBoundingClientRect().left
      introTitleLeft = introTitle.getBoundingClientRect().left;
      introTitleTop = introTitle.getBoundingClientRect().top;

      // digital
      digitalTitleLeft = digitalTitle.getBoundingClientRect().left;
      digitalTitleTop = digitalTitle.getBoundingClientRect().top;
      digitalTitleWidth = digitalTitle.getBoundingClientRect().width;
      digitalTitleHeight = digitalTitle.getBoundingClientRect().height;
    } catch (error) {}

    try {
      paginationBullets.forEach((bullet, index) => {
        bullet.style.left = introTitleLeft - 150 + "px";
        bullet.style.top = introTitleTop - 30 + "px";

        if (window.innerWidth <= 1640) {
          bullet.style.left = introTitleLeft - 50 + "px";
          bullet.style.top = introTitleTop - 30 + "px";
        }

        if (window.innerWidth <= 1366) {
          bullet.style.left = introTitleLeft - 85 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 1239) {
          bullet.style.left = introTitleLeft - 50 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 1024) {
          bullet.style.left = introTitleLeft - 35 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 854) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 65 - 2 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 620) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 15 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 480) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 13 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 390) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 51 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }
      });
    } catch (error) {}
  }
} catch (error) {}
