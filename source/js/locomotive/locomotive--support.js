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
    });

    scroll.on("scroll", ({ limit, scroll }) => {
      if (window.innerWidth > 1024) {
        scrollTop = scroll.y;

        const headers = document.querySelectorAll(".header--main");

        headers.forEach((header) => {
          addPaddingsToHeader(header, scrollTop);
        });
      }
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
    // +++++++++++++++++++++
    try {
      // sticky support
      scroll.on("scroll", ({ limit, scroll }) => {
        if (window.innerWidth >= 1370) {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let headerHeight;
          let rightSideSectionTop;
          let itemForStickyWrapperTop;

          try {
            itemForSticky = document.querySelector(".benefits__contentLeft");
            rightSideSection = document.querySelector(
              ".benefits__contentRight"
            );
            itemForStickyWrapper = document.querySelector(
              ".benefits__contentLeftWrapper"
            );

            header = document.querySelector(".header--main");

            scrollTop = scroll.y;
            console.log(scrollTop);

            headerHeight = header.getBoundingClientRect().height;
            // how much was scrolled

            try {
              // right side section from top with height
              rightSideSectionTop =
                rightSideSection.offsetTop +
                rightSideSection.offsetParent.offsetTop +
                rightSideSection.getBoundingClientRect().height;
              // left side section from top with margin that is header height and addition
              itemForStickyWrapperTop =
                itemForStickyWrapper.offsetTop +
                itemForStickyWrapper.offsetParent.offsetTop -
                headerHeight -
                50;
            } catch (error) {}

            let counter = 0;
            // item's for sticky bottom side current postition from top
            let itemForStickyBottomSide;

            try {
              if (scrollTop >= itemForStickyWrapperTop) {
                itemForSticky.style.position = "unset";
              }

              if (scrollTop >= itemForStickyWrapperTop) {
                // set sticky
                if (counter === 0) {
                  itemForSticky.style.position = "fixed";
                  itemForSticky.style.top = `${
                    +scrollTop + headerHeight + 50
                  }px`;
                }
                // item's for sticky bottom side current postition from top
                itemForStickyBottomSide =
                  itemForSticky.offsetTop +
                  itemForSticky.getBoundingClientRect().height;

                // set absolute to press itemForStick to bottom to allign with right side item's bottom side
                if (itemForStickyBottomSide >= rightSideSectionTop) {
                  itemForSticky.style.position = "unset";
                  itemForSticky.style.top = `unset`;

                  itemForStickyWrapper.style.display = "flex";
                  itemForStickyWrapper.style.alignItems = "flex-end";

                  counter++;
                }
              }
            } catch (error) {}

            try {
              if (itemForStickyBottomSide < rightSideSectionTop) {
                counter--;

                itemForSticky.style.position = "fixed";
                itemForSticky.style.top = `${scrollTop + headerHeight + 50}px`;
              }
            } catch (error) {}
          } catch (error) {}
        }
      });
    } catch (error) {}
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

    function isActiveCircle(fromTom) {
      if (fromTom >= offsetTotal) {
        circleParent.classList.add("progress-circle--active");
      }
      if (fromTom < offsetTotal) {
        circleParent.classList.remove("progress-circle--active");
      }
    }
    isActiveCircle();
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

      let intro;
      let benefits;
      let costs;
      let reviews;
      let answers;
      let why;
      let whatMore;
      let footer;

      try {
        intro = document.querySelector(".intro").offsetTop;
        benefits = document.querySelector(".benefits").offsetTop;
        costs = document.querySelector(".costs").offsetTop;
        reviews = document.querySelector(".reviews").offsetTop;
        answers = document.querySelector(".answers").offsetTop;
        why = document.querySelector(".why").offsetTop;
        whatMore = document.querySelector(".whatMore").offsetTop;
        footer = document.querySelector(".footer").offsetTop;
      } catch (error) {}

      const viewPortHeight = window.innerHeight;

      const currentPosition = viewPortHeight + scrollTop - 20;
      // intro
      if (currentPosition >= intro) {
        clearArrowsClasses();

        circle.style.fill = "#fff";
        circleArrowSalad.classList.add("progress-circle-arrow--not-active");
        circleArrowBlack.classList.add("progress-circle-arrow--active");
      }
      // benefits
      if (currentPosition >= benefits) {
        clearArrowsClasses();

        circle.style.fill = "#1D1D1D";
        circleArrowSalad.classList.add("progress-circle-arrow--active");
        circleArrowBlack.classList.add("progress-circle-arrow--not-active");
      }
      // costs
      if (currentPosition >= costs) {
        clearArrowsClasses();

        circle.style.fill = "#fff";
        circleArrowSalad.classList.add("progress-circle-arrow--not-active");
        circleArrowBlack.classList.add("progress-circle-arrow--active");
      }
      // reviews
      if (currentPosition >= reviews) {
        clearArrowsClasses();

        circle.style.fill = "#1D1D1D";
        circleArrowSalad.classList.add("progress-circle-arrow--active");
        circleArrowBlack.classList.add("progress-circle-arrow--not-active");
      }
      // answers
      if (currentPosition >= answers) {
        clearArrowsClasses();

        circle.style.fill = "#1D1D1D";
        circleArrowSalad.classList.add("progress-circle-arrow--active");
        circleArrowBlack.classList.add("progress-circle-arrow--not-active");
      }
      // why
      if (currentPosition >= why) {
        clearArrowsClasses();

        circle.style.fill = "#fff";
        circleArrowSalad.classList.add("progress-circle-arrow--not-active");
        circleArrowBlack.classList.add("progress-circle-arrow--active");
      }
      // whatMore
      if (currentPosition >= whatMore) {
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
