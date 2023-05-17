import { BrowserDetect } from "../utils/browserDetect";
try {
  BrowserDetect.init();

  let scroll;
  let scrollTop;

  window.onload = () => {
    let mult;
    if (BrowserDetect.browser !== "Safari") {
      mult = 1;
    } else {
      mult = 2;
    }
    scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: mult,
      offset: [300, 0],
    });

    if (window.innerWidth <= 1024) {
      const butter = document.querySelector("#butter");

      butter.style.position = "unset";
      butter.style.overflow = "unset";
      butter.style.minHeight = "unset";
    }
    // animations
    if (window.innerWidth > 1024) {
      scroll.on("call", (func, args, obj) => {
        const animationItems = document.querySelectorAll(".animationItem");

        const reg = /\d*/g;
        animationItems.forEach((animationItem, index) => {
          if (
            index ===
            Math.abs(
              obj.id
                .match(reg)
                .join()
                .replace(/[\s.,%]/g, "")
            )
          ) {
            animationItem.classList.add("animated");
          }
        });
      });
    }

    scroll.on("scroll", ({ limit, scroll }) => {
      if (window.innerWidth > 1024) {
        scrollTop = scroll.y;

        const headers = document.querySelectorAll(".header--main");

        headers.forEach((header) => {
          addPaddingsToHeader(header, scrollTop);
        });
      }
    });
    //  =====================
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

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference} ${circumference}`;

    function isActiveCircle(fromTom) {
      if (fromTom >= offsetTotal) {
        circleParent.classList.add("progress-circle--active");
      }
      if (fromTom < offsetTotal) {
        circleParent.classList.remove("progress-circle--active");
      }
    }
    isActiveCircle();
    // to top
    Array.from(circleArrows).forEach((circleArrow) => {
      circleArrow.addEventListener("click", () => {
        scroll.scrollTo("top");
      });
    });
    circleArrowsParent.addEventListener("click", () => {
      scroll.scrollTo("top");
    });
    circle.addEventListener("click", () => {
      scroll.scrollTo("top");
    });

    // progress
    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
    // updateProgress
    function updateProgress(fromTop) {
      // const scrollTop = scroll.y;
      const butterHeight = getComputedStyle(
        document.querySelector("#butter")
      ).height;
      const bodyHeight = getComputedStyle(
        document.querySelector("body")
      ).height;
      const pxIndexButter = butterHeight.lastIndexOf("px");
      const pxIndexBody = bodyHeight.lastIndexOf("px");
      const heightButter = Math.abs(butterHeight.slice(0, pxIndexButter));
      const heightBody = Math.abs(bodyHeight.slice(0, pxIndexBody));
      const height = heightButter - heightBody;

      const dashOffset = 0 + (fromTop * 100) / height;

      setProgress(dashOffset);
    }
    updateProgress();

    scroll.on("scroll", ({ limit, scroll }) => {
      updateProgress(scroll.y);
    });

    // sections
    scroll.on("scroll", ({ limit, scroll }) => {
      const scrollTop = scroll.y;

      isActiveCircle(scrollTop);

      const intro = document.querySelector(".intro").offsetTop;
      const footer = document.querySelector(".footer").offsetTop;

      const viewPortHeight = window.innerHeight;

      const currentPosition = viewPortHeight + scrollTop - 20;
      // blog
      if (currentPosition >= intro) {
        clearArrowsClasses();

        circle.style.fill = "#1D1D1D";
        circleArrowSalad.classList.add("progress-circle-arrow--active");
        circleArrowBlack.classList.add("progress-circle-arrow--not-active");
      }
      if (currentPosition >= footer && footer) {
        clearArrowsClasses();

        circle.style.fill = "#fff";
        circleArrowSalad.classList.add("progress-circle-arrow--not-active");
        circleArrowBlack.classList.add("progress-circle-arrow--active");
      }
    });
  };

  function addPaddingsToHeader(hdr, scrollTop) {
    if (scrollTop >= 1) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.add("header--main-white");
      }

      hdr.classList.add("header--main--min-padding");
    }
    if (scrollTop === 0) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.remove("header--main-white");
      }
      hdr.classList.remove("header--main--min-padding");
    }
  }
} catch (error) {}
