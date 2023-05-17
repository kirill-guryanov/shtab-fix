try {
  const animationItems = document.querySelectorAll(".animationItem");

  document.addEventListener("DOMContentLoaded", () => {
    animationOnScroll();
  });

  window.addEventListener("scroll", () => {
    animationOnScroll(".animationItem");
  });

  function animationOnScroll(itemsSelectorForAnimation) {
    try {
      const animationItems = document.querySelectorAll(
        itemsSelectorForAnimation
      );

      animationItems.forEach((animationItem) => {
        // item height
        const animationItemHeight = animationItem.offsetHeight;
        // item distanse to top
        const animationItemTop = offset(animationItem).top;
        //
        const animationStart = 11;
        // window height
        const windowHeight = window.innerHeight;
        // when start animation
        let animationPoint =
          windowHeight - animationItemHeight / animationStart;

        // when start animation if item height grater than window height
        if (animationItemHeight > windowHeight) {
          animationPoint = windowHeight - windowHeight / animationStart;
        }

        if (
          pageYOffset > animationItemTop - animationPoint &&
          pageYOffset < animationItemTop + animationItemHeight
        ) {
          animationItem.classList.add("animated");
        } else {
          if (!animationItem.classList.contains("animationNoRepeat")) {
            animationItem.classList.remove("animated");
          }
        }
      });
    } catch (error) {
      console.log(`ERROR in animationOnScroll function ${error}`);
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
} catch (error) {}
