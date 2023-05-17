window.addEventListener("load", function () {
  try {
    // reviews section splide
    const splide = document.querySelector(".reviews__splide-serviceDetail");
    const splideArrows = document.querySelectorAll(
      ".reviews__splide-serviceDetail .splide__arrow"
    );
    // arrows prev and next
    const splideArrowsPrev = document.querySelector(
      ".reviews__splide-serviceDetail .splide__arrow--prev"
    );
    const splideArrowsNext = document.querySelector(
      ".reviews__splide-serviceDetail .splide__arrow--next"
    );
    // reviews section
    const reviews = document.querySelector(".reviews");
    // get arrows for embed in for arrows block
    const splideArrowsSlidePrev = reviews.querySelector(
      ".reviews__splide-serviceDetail-arrow-prev"
    );
    const splideArrowsSlidesNext = reviews.querySelector(
      ".reviews__splide-serviceDetail-arrow-next"
    );
    // removed from html arrows
    const splideArrowsSlidePrevRemoved = reviews.removeChild(
      splideArrowsSlidePrev
    );
    const splideArrowsSlidesNextRemoved = reviews.removeChild(
      splideArrowsSlidesNext
    );
    // add custom arrows for slides
    splideArrowsPrev.appendChild(splideArrowsSlidePrevRemoved);
    splideArrowsNext.appendChild(splideArrowsSlidesNextRemoved);
    // remove not custom arrows for slides
    splideArrowsPrev.firstChild.remove();
    splideArrowsNext.firstChild.remove();
  } catch (error) {}
});
