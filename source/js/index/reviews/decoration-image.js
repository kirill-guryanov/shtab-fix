try {
  window.addEventListener("load", function () {
    let reviews;
    let decorationImage;
    let decorationImageLinesInReviews;
    let decorationImageLinesInProducts;
    let reviewsHeight;
    let decorationImageHeight;

    try {
      reviews = document.querySelector(".reviews");
      decorationImage = document.querySelector(
        ".reviews__decoration-text-index"
      );
      decorationImageLinesInReviews = document.querySelector(
        ".reviews__decoration-lines-index"
      );
      decorationImageLinesInProducts = document.querySelector(
        ".products__decoration-lines-index"
      );
    } catch (error) {}

    try {
      reviewsHeight = reviews.getBoundingClientRect().height;
      decorationImageHeight = decorationImage.getBoundingClientRect().height;

      decorationImage.style.top =
        (reviewsHeight - decorationImageHeight) / 2 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        reviewsHeight = reviews.getBoundingClientRect().height;
        decorationImageHeight = decorationImage.getBoundingClientRect().height;

        decorationImage.style.top =
          (reviewsHeight - decorationImageHeight) / 2 + "px";
      } catch (error) {}
    });

    document.addEventListener("DOMContentLoaded", () => {
      try {
        decorationImageLinesInProducts.style.left =
          decorationImageLinesInReviews.getBoundingClientRect().left +
          decorationImageLinesInReviews.getBoundingClientRect().width -
          decorationImageLinesInProducts.getBoundingClientRect().width +
          "px";
      } catch (error) {}
    });
  });
} catch (error) {}
