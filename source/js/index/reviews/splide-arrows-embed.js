try {
  window.addEventListener("load", function () {
    let splide;
    let splideArrows;
    let splideArrowsPrev;
    let splideArrowsNext;
    let reviews;
    let splideArrowsSlidePrev;
    let splideArrowsSlidesNext;
    let splideArrowsSlidePrevRemoved;
    let splideArrowsSlidesNextRemoved;

    try {
      // reviews section splide
      splide = document.querySelector(".reviews__splide-index");
      splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      // arrows prev and next
      splideArrowsPrev = document.querySelector(
        ".reviews__splide-index .splide__arrow--prev"
      );
      splideArrowsNext = document.querySelector(
        ".reviews__splide-index .splide__arrow--next"
      );
      // reviews section
      reviews = document.querySelector(".reviews");
      // get arrows for embed in for arrows block
      splideArrowsSlidePrev = reviews.querySelector(
        ".reviews__splide-index-arrow-prev"
      );
      splideArrowsSlidesNext = reviews.querySelector(
        ".reviews__splide-index-arrow-next"
      );
    } catch (error) {}
    try {
      // removed from html arrows
      splideArrowsSlidePrevRemoved = reviews.removeChild(splideArrowsSlidePrev);
      splideArrowsSlidesNextRemoved = reviews.removeChild(
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
} catch (error) {}
