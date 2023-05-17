try {
  window.addEventListener("load", function () {
    // const toBottomArrow = document.querySelector(
    //   ".intro__arrow-to-bottom-arrow-block"
    // );
    // const aboutUsTop = document.querySelector(".about-us").offsetTop;
    // const aboutUs = document.querySelector(".about-us");
    // // console.log(aboutUsTop);
    // toBottomArrow.addEventListener("click", () => {
    //   scroll.scrollTo(aboutUs), { offset: 200 };
    //   // scrollTo(0, aboutUsTop);
    // });
  });

  function scrollTo(left, top) {
    let headerHeight;

    if (window.innerWidth > 1280) {
      headerHeight = 83;
    }
    if (window.innerWidth <= 1280) {
      headerHeight = 65;
    }
    if (window.innerWidth <= 680) {
      headerHeight = 60;
    }

    const to = top - headerHeight;

    window.scroll({
      left: left,
      top: to,
      behavior: "smooth",
    });
  }
} catch (error) {}
