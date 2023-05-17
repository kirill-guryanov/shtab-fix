if (window.innerWidth <= 1024) {
  window.addEventListener("load", function () {
    const circle = document.querySelector(".progress-ring__circle");
    const circleParent = document.querySelector(".progress-circle");
    const circleArrowsParent = document.querySelector(
      ".progress-circle-arrows"
    );

    const circleArrows = document.querySelectorAll(".progress-circle-arrow");
    const circleArrowsArray = Array.from(circleArrows);

    const circleArrowSalad = document.querySelector(
      ".progress-circle-arrow--salad"
    );
    const circleArrowBlack = document.querySelector(
      ".progress-circle-arrow--black"
    );

    // clear arrow classes
    function clearArrowsClasses() {
      circleArrowsArray.forEach((circleArrow) => {
        if (circleArrow.classList.contains("progress-circle-arrow--active")) {
          circleArrow.classList.remove("progress-circle-arrow--active");
        }
        if (
          circleArrow.classList.contains("progress-circle-arrow--not-active")
        ) {
          circleArrow.classList.remove("progress-circle-arrow--not-active");
        }
      });
    }

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    // offset
    const offsetTotal = 100;
    // get top
    const getTop = () => window.scrollY || document.documentElement.scrollTop;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference} ${circumference}`;

    // progress
    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
    // updateProgress
    function updateProgress() {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const dashOffset = 0 + (getTop() * 100) / height;

      setProgress(dashOffset);
    }
    updateProgress();

    function isActiveCircle() {
      if (getTop() >= offsetTotal) {
        circleParent.classList.add("progress-circle--active");
      }
      if (getTop() < offsetTotal) {
        circleParent.classList.remove("progress-circle--active");
      }
    }
    isActiveCircle();

    window.addEventListener("scroll", () => {
      updateProgress();

      isActiveCircle();
    });

    // to top
    Array.from(circleArrows).forEach((circleArrow) => {
      circleArrow.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
    circleArrowsParent.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    circle.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // sections
    window.addEventListener("scroll", () => {
      try {
        let intro;
        let offer;
        let projectsSection;
        let footer;

        try {
          intro = document.querySelector(".intro").offsetTop;
          offer = document.querySelector(".offer").offsetTop;
          projectsSection = document.querySelector(".projects").offsetTop;
          footer = document.querySelector(".footer").offsetTop;
        } catch {}

        const viewPortHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        const currentPosition = viewPortHeight + scrollTop - 20;

        // intro
        if (currentPosition >= intro && intro) {
          clearArrowsClasses();

          circle.style.fill = "#fff";
          circleArrowSalad.classList.add("progress-circle-arrow--not-active");
          circleArrowBlack.classList.add("progress-circle-arrow--active");
        }
        // projectsSection
        if (currentPosition >= projectsSection && projectsSection) {
          clearArrowsClasses();

          circle.style.fill = "#fff";
          circleArrowSalad.classList.add("progress-circle-arrow--not-active");
          circleArrowBlack.classList.add("progress-circle-arrow--active");
        }
        // offer
        if (currentPosition >= offer && offer) {
          clearArrowsClasses();

          circle.style.fill = "#1D1D1D";
          circleArrowSalad.classList.add("progress-circle-arrow--active");
          circleArrowBlack.classList.add("progress-circle-arrow--not-active");
        }
        if (innerWidth <= 1460 && currentPosition >= footer && footer) {
          clearArrowsClasses();

          circle.style.fill = "#fff";
          circleArrowSalad.classList.add("progress-circle-arrow--not-active");
          circleArrowBlack.classList.add("progress-circle-arrow--active");
        }
      } catch (error) {}
    });
  });
}
