import { BrowserDetect } from "../utils/browserDetect";
try {
  BrowserDetect.init();

  let scroll;
  let scrollTop;

  let whiteArrayTopOffsets = [];
  let blackArrayTopOffsets = [];

  let blackSections;
  let whiteSections;

  // window.onresize = () => {
  //   const footer = document.querySelector(".footer");
  //   if (window.innerWidth >= 1700) {
  //     footer.classList.remove("whiteSection");
  //     footer.classList.remove("blackSection");
  //     footer.classList.add("whiteSection");
  //   } else {
  //     footer.classList.remove("whiteSection");
  //     footer.classList.remove("blackSection");
  //     footer.classList.add("blackSection");
  //   }
  // };

  window.onload = () => {
    const footer = document.querySelector(".footer");
    if (window.innerWidth >= 1700 && !footer.classList.contains("blackPage")) {
      footer.classList.add("whiteSection");
    } else {
      footer.classList.add("blackSection");
    }
    // +++++++++++++++
    try {
      blackSections = document.querySelectorAll(".blackSection");
      blackSections.forEach((blackSection) => {
        blackArrayTopOffsets.push(blackSection.offsetTop);
      });

      whiteSections = document.querySelectorAll(".whiteSection");
      whiteSections.forEach((whiteSection) => {
        whiteArrayTopOffsets.push(whiteSection.offsetTop);
      });
    } catch (error) {}
    // +++++++++++++++

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
    // brief croll to next section
    try {
      const toBottomArrowBrief = document.querySelector(
        ".fillingButton--brief-intro"
      );
      const formsTop = document.querySelector(".forms-brief");

      let headerHeight;
      if (window.innerWidth >= 1400) {
        headerHeight = -86;
      } else {
        headerHeight = -66;
      }

      if (toBottomArrowBrief) {
        toBottomArrowBrief.addEventListener("click", () => {
          scroll.scrollTo(formsTop, { offset: headerHeight });
        });
      }
    } catch (error) {}

    try {
      if (window.innerWidth >= 1115) {
        scroll.on("scroll", ({ limit, scroll }) => {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
          let headerHeight;
          let rightSideSectionBottom;
          let itemForStickyWrapperTop;

          try {
            // sticky products once page
            itemForSticky = document.querySelector(".info__contentBottomLeft");
            rightSideSection = document.querySelector(
              ".info__contentBottomRight"
            );
            itemForStickyWrapper = document.querySelector(
              ".info__contentBottomLeftWrapper"
            );
            header = document.querySelector(".header--main");
            // get fixed width from width of sticky item
            initialWidth = itemForSticky.getBoundingClientRect().width;
            // set fixed width from width of sticky item
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;
            // scroll from top in px
            scrollTop = scroll.y;
            // =====================
            // header height
            headerHeight = header.getBoundingClientRect().height;
            // right side section from top with height
            rightSideSectionBottom =
              rightSideSection.offsetTop +
              rightSideSection.offsetParent.offsetTop +
              rightSideSection.offsetParent.offsetParent.offsetTop +
              rightSideSection.getBoundingClientRect().height;
            // left side section from top with margin that is header height and addition
            itemForStickyWrapperTop =
              itemForStickyWrapper.offsetTop +
              itemForStickyWrapper.offsetParent.offsetTop +
              itemForStickyWrapper.offsetParent.offsetParent.offsetTop -
              headerHeight -
              50;
          } catch (error) {}
          //
          let counter = 0;
          // item's for sticky bottom side current postition from top
          let itemForStickyBottomSideInFixed;

          if (scrollTop >= itemForStickyWrapperTop) {
            // set sticky
            if (counter === 0) {
              itemForSticky.style.position = "fixed";
              itemForSticky.style.top = `${+scrollTop + headerHeight + 50}px`;
            }
            // item's for sticky bottom side current postition from top
            itemForStickyBottomSideInFixed =
              itemForSticky.offsetTop +
              itemForSticky.getBoundingClientRect().height;

            // set absolute to press itemForStick to bottom to allign with right side item's bottom side
            if (itemForStickyBottomSideInFixed >= rightSideSectionBottom) {
              itemForSticky.style.position = "unset";
              itemForSticky.style.top = `unset`;

              itemForStickyWrapper.style.display = "flex";
              itemForStickyWrapper.style.alignItems = "flex-end";

              counter++;
            }
          }
        });
      }
    } catch (error) {}
    // attraction sticky
    try {
      scroll.on("scroll", ({ limit, scroll }) => {
        if (window.innerWidth >= 1261) {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
          let headerHeight;
          let rightSideSectionTop;
          let itemForStickyWrapperTop;

          try {
            itemForSticky = document.querySelector(
              ".solve__contentLeft-attraction"
            );
            rightSideSection = document.querySelector(
              ".solve__contentRight-attraction"
            );
            itemForStickyWrapper = document.querySelector(
              ".solve__contentLeftWrapper-attraction"
            );
            header = document.querySelector(".header--main");

            initialWidth = itemForSticky.getBoundingClientRect().width;
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;

            scrollTop = scroll.y;

            // header height
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
                60;
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
                    scrollTop + headerHeight + 60
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
    try {
      scroll.on("scroll", ({ limit, scroll }) => {
        if (window.innerWidth >= 1261) {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
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

            initialWidth = itemForSticky.getBoundingClientRect().width;
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;

            scrollTop = scroll.y;

            // header height
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
                60;
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
                    scrollTop + headerHeight + 60
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
    // header
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

    if (window.innerWidth > 1024) {
      scroll.on("call", (func, args, obj) => {
        let animationItems;

        try {
          animationItems = document.querySelectorAll(".animationItem");
        } catch (error) {}

        const reg = /\d*/g;
        try {
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
        } catch (error) {}
      });
    }
    // statistics
    if (window.innerWidth > 1024) {
      let itemsForAnimation;

      try {
        itemsForAnimation = document.querySelectorAll(
          ".statistics__itemNumber"
        );
      } catch (error) {}

      try {
        itemsForAnimation.forEach((itemForAnimation) => {
          itemForAnimation.addEventListener(
            "animationStarted",
            () => {
              animateNumbers(itemForAnimation);
            },
            {
              once: true,
            }
          );
        });
      } catch (error) {}
      // statistics
      scroll.on("scroll", ({ limit, scroll }) => {
        const animationStarted = new Event("animationStarted");

        const itemsForAnimation = document.querySelectorAll(
          ".statistics__itemNumber.animated"
        );

        if (itemsForAnimation) {
          itemsForAnimation.forEach((itemForAnimation) => {
            itemForAnimation.dispatchEvent(animationStarted);
          });
        }
      });

      function animateNumbers(itemForAnimation) {
        const animeationDuration = 4;
        let counter = 1;
        // if dataset present
        if (itemForAnimation.dataset.neededAmount) {
          // how many numbers need to change
          const neededAmount = itemForAnimation.dataset.neededAmount;
          // step of time for interval
          const timeStep = (1000 * animeationDuration) / neededAmount;
          // change numbers
          const animate = setInterval(() => {
            if (counter <= neededAmount) {
              // continue
              if (itemForAnimation.dataset.withSign === undefined) {
                itemForAnimation.textContent = counter;
              } else {
                itemForAnimation.textContent = `${
                  counter + itemForAnimation.dataset.withSign
                }`;
              }
            } else {
              // stop
              clearInterval(animate);
            }

            counter++;
          }, timeStep);
        }
      }
    }
    // index
    const toBottomArrow = document.querySelector(
      ".intro__arrow-to-bottom-arrow-block"
    );
    const aboutUs = document.querySelector(".about-us-index");

    let headerHeight;
    if (window.innerWidth >= 1400) {
      headerHeight = -83;
    } else {
      headerHeight = -63;
    }

    if (toBottomArrow) {
      toBottomArrow.addEventListener("click", () => {
        scroll.scrollTo(aboutUs, { offset: headerHeight });
      });
    }

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

    // to top
    try {
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
    } catch (error) {}

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

    let radius;
    let circumference;

    try {
      radius = circle.r.baseVal.value;
      circumference = 2 * Math.PI * radius;
    } catch (error) {}
    // offset
    const offsetTotal = 100;

    try {
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference} ${circumference}`;
    } catch (error) {}

    // progress
    function setProgress(percent) {
      try {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      } catch (error) {}
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

    function isActiveCircle(fromTop) {
      if (fromTop >= offsetTotal) {
        try {
          circleParent.classList.add("progress-circle--active");
        } catch (error) {}
      }
      if (fromTop < offsetTotal) {
        try {
          circleParent.classList.remove("progress-circle--active");
        } catch (error) {}
      }
    }

    try {
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
    } catch (error) {}

    // sections
    scroll.on("scroll", ({ limit, scroll }) => {
      const scrollTop = scroll.y;

      isActiveCircle(scrollTop);

      const viewPortHeight = window.innerHeight;

      const currentPosition = viewPortHeight + scrollTop - 20;

      const sections = document.querySelectorAll(
        ".sectionForProgresCircleColor"
      );
      let sectionsDataWithTypesAndOffsets = [];
      let sectionsDataWithOffsets = [];

      sections.forEach((section) => {
        const sectionDistanceFromTop = section.offsetTop;
        const sectionWhite = section.classList.contains("whiteSection");
        const sectionType = sectionWhite ? "white" : "black";
        // const sectionData = ;
        const sectionDataMArginsFromTop = sectionDistanceFromTop;

        sectionsDataWithTypesAndOffsets.push([
          sectionType,
          sectionDistanceFromTop,
        ]);
        sectionsDataWithOffsets.push(sectionDataMArginsFromTop);
      });

      let clossestOffsets = [];

      sectionsDataWithOffsets.forEach((offsetFromTop) => {
        const clossestOffset = offsetFromTop - currentPosition;
        if (clossestOffset < 0) {
          clossestOffsets.push(offsetFromTop);
        }
      });
      let isClosest = clossestOffsets[clossestOffsets.length - 1];

      sectionsDataWithTypesAndOffsets.forEach(
        (sectionsDataWithTypesAndOffset) => {
          if (isClosest === sectionsDataWithTypesAndOffset[1]) {
            if (sectionsDataWithTypesAndOffset[0] === "white") {
              clearArrowsClasses();
              try {
                circle.style.fill = "#1D1D1D";
                circleArrowSalad.classList.add("progress-circle-arrow--active");
                circleArrowBlack.classList.add(
                  "progress-circle-arrow--not-active"
                );
              } catch (error) {}
            } else {
              clearArrowsClasses();
              try {
                circle.style.fill = "#fff";
                circleArrowSalad.classList.add(
                  "progress-circle-arrow--not-active"
                );
                circleArrowBlack.classList.add("progress-circle-arrow--active");
              } catch (error) {}
            }
          }
        }
      );
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
