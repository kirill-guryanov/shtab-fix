try {
  if (window.innerWidth >= 1260) {
    const itemForSticky = document.querySelector(".solve__contentLeft");
    const rightSideSection = document.querySelector(".solve__contentRight");
    const itemForStickyWrapper = document.querySelector(
      ".solve__contentLeftWrapper"
    );
    const header = document.querySelector(".header--main");

    const initialWidth = itemForSticky.getBoundingClientRect().width;
    itemForSticky.style.width = `${initialWidth}px`;
    itemForStickyWrapper.style.width = `${initialWidth}px`;

    window.addEventListener("load", () => {
      scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 2,
      });

      scroll.on("scroll", ({ limit, scroll }) => {
        scrollTop = scroll.y;

        // header height
        const headerHeight = header.getBoundingClientRect().height;
        // how much was scrolled
        // const windowY = window.scrollY;

        // right side section from top with height
        rightSideSectionTop =
          rightSideSection.offsetTop +
          rightSideSection.offsetParent.offsetTop +
          rightSideSection.getBoundingClientRect().height;

        // left side section from top with margin that is header height and addition
        const itemForStickyWrapperTop =
          itemForStickyWrapper.offsetTop +
          itemForStickyWrapper.offsetParent.offsetTop -
          headerHeight -
          60;

        let counter = 0;
        // item's for sticky bottom side current postition from top
        let itemForStickyBottomSide;

        if (scrollTop >= itemForStickyWrapperTop) {
          itemForSticky.style.position = "unset";
        }

        if (scrollTop >= itemForStickyWrapperTop) {
          // set sticky
          if (counter === 0) {
            itemForSticky.style.position = "fixed";
            itemForSticky.style.top = `${scrollTop + headerHeight + 60}px`;
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

        if (itemForStickyBottomSide < rightSideSectionTop) {
          counter--;

          itemForSticky.style.position = "fixed";
          itemForSticky.style.top = `${scrollTop + headerHeight + 60}px`;
        }
      });
    });
  }
} catch (error) {}
