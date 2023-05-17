try {
  document.addEventListener("DOMContentLoaded", () => {
    let aboutSection;
    let videoWrapper;
    let wrapperHeight;

    try {
      aboutSection = document.querySelector(".about-studio");
      videoWrapper = document.querySelector(
        ".intro__videoBlockVideoWrapper-studio"
      );
      wrapperHeight = videoWrapper.getBoundingClientRect().height;
    } catch (error) {}

    if (window.innerWidth > 800) {
      try {
        aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
      } catch (error) {}
    } else {
      try {
        aboutSection.style.marginTop = `${0}px`;
      } catch (error) {}
    }
  });

  window.addEventListener("resize", () => {
    try {
      aboutSection = document.querySelector(".about");
      videoWrapper = document.querySelector(
        ".intro__videoBlockVideoWrapper-studio"
      );
      wrapperHeight = videoWrapper.getBoundingClientRect().height;
    } catch (error) {}

    if (window.innerWidth > 800) {
      try {
        aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
      } catch (error) {}
    } else {
      try {
        aboutSection.style.marginTop = `${0}px`;
      } catch (error) {}
    }
  });
} catch (error) {}
