try {
  window.addEventListener("load", function () {
    let aboutUs;
    let decorationImageLeft;
    let decorationImageRight;

    let aboutUsHeight;
    let decorationImageLeftHeight;
    let decorationImageRightHeight;

    try {
      aboutUs = document.querySelector(".about-us-index");
      decorationImageLeft = aboutUs.querySelector(
        ".about-us__decoration-image--left"
      );
      decorationImageRight = aboutUs.querySelector(
        ".about-us__decoration-image--right"
      );
    } catch (error) {}
    try {
      aboutUsHeight = aboutUs.getBoundingClientRect().height;
      decorationImageLeftHeight =
        decorationImageLeft.getBoundingClientRect().height;
      decorationImageRightHeight =
        decorationImageRight.getBoundingClientRect().height;
    } catch (error) {}

    try {
      decorationImageLeft.style.top =
        (aboutUsHeight - decorationImageLeftHeight) / 2 + "px";
      decorationImageRight.style.top =
        (aboutUsHeight - decorationImageRightHeight) / 3.5 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      let aboutUs;
      let decorationImageLeft;
      let decorationImageRight;

      try {
        aboutUsHeight = aboutUs.getBoundingClientRect().height;
        decorationImageLeftHeight =
          decorationImageLeft.getBoundingClientRect().height;

        decorationImageLeft.style.top =
          (aboutUsHeight - decorationImageLeftHeight) / 2 + "px";
      } catch (error) {}
    });

    window.addEventListener("resize", () => {
      let aboutUs;
      let decorationImageLeft;
      let decorationImageRight;

      try {
        aboutUsHeight = aboutUs.getBoundingClientRect().height;
        decorationImageRightHeight =
          decorationImageRight.getBoundingClientRect().height;

        decorationImageRight.style.top =
          (aboutUsHeight - decorationImageRightHeight * 2) / 2 + "px";
      } catch (error) {}
    });
  });
} catch (error) {}
