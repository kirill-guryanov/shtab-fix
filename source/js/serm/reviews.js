try {
  // bullets wrapper
  const bulletsWrapper = document.querySelector(
    ".formats__contentBottomRightItemsBullets"
  );
  // images
  const reviewsImages = document.querySelectorAll(
    ".formats__contentBottomRightItem"
  );
  const reviewsImage = document.querySelector(
    ".formats__contentBottomRightItem"
  );
  const reviewsImagesWrapper = document.querySelector(
    ".formats__contentBottomRightItems"
  );
  // elements
  const itemsForHover = document.querySelectorAll(
    ".formats__contentBottomLeftItem"
  );
  // const bullet = document.querySelector(
  //   ".formats__contentBottomRightItemsBullet"
  // );

  document.addEventListener("DOMContentLoaded", () => {
    try {
      reviewsImagesWrapper.style.height =
        reviewsImage.getBoundingClientRect().height + "px";
    } catch (error) {}
  });

  // set data attributes and create and append bullets for items
  itemsForHover.forEach((item, index) => {
    let currentIndex = index + 1;

    item.dataset.itemNumber = currentIndex;

    if (currentIndex === 1) {
      item.classList.add("formats__contentBottomLeftItem--active");
    }
  });

  reviewsImages.forEach((reviewsImage, index) => {
    let currentIndex = index + 1;

    reviewsImage.dataset.itemNumber = currentIndex;

    if (currentIndex === 1) {
      reviewsImage.classList.add("formats__contentBottomRightItem--active");
    }

    if (reviewsImage) {
      const bullet = document.createElement("div");
      bullet.dataset.itemNumber = currentIndex;
      bullet.classList.add("formats__contentBottomRightItemsBullet");

      bulletsWrapper.appendChild(bullet);
    }
  });

  const bullets = document.querySelectorAll(
    ".formats__contentBottomRightItemsBullet"
  );

  bullets.forEach((bullet, index) => {
    if (index < 1) {
      bullet.classList.add("formats__contentBottomRightItemsBullet--active");
    }
  });

  itemsForHover.forEach((item) => {
    reviewsImages.forEach((reviewsImage) => {
      item.addEventListener("mouseleave", (e) => {
        // reset active class from all images
        // itemsForHover.forEach((itemForResetActiveClass) => {
        //   itemForResetActiveClass.classList.remove(
        //     "formats__contentBottomLeftItem--active"
        //   );
        // });
      });
      item.addEventListener("mouseenter", (e) => {
        const itemDataset = e.currentTarget.dataset.itemNumber;
        const imageDataset = reviewsImage.dataset.itemNumber;
        // add active class
        // reset active class from all images
        itemsForHover.forEach((itemForResetActiveClass) => {
          itemForResetActiveClass.classList.remove(
            "formats__contentBottomLeftItem--active"
          );
        });

        e.currentTarget.classList.add("formats__contentBottomLeftItem--active");
        // bullets
        bullets.forEach((bullet) => {
          const bulletDataset = bullet.dataset.itemNumber;

          if (itemDataset === bulletDataset) {
            bullets.forEach((bulletForDeleteActiveClass) => {
              // reset active class from all images
              bulletForDeleteActiveClass.classList.remove(
                "formats__contentBottomRightItemsBullet--active"
              );
              // add class to active image
              bullet.classList.add(
                "formats__contentBottomRightItemsBullet--active"
              );
            });
          }
        });
        // images
        if (itemDataset === imageDataset) {
          reviewsImages.forEach((reviewsImageForDeleteActiveClass) => {
            // reset active class from all images
            reviewsImageForDeleteActiveClass.classList.remove(
              "formats__contentBottomRightItem--active"
            );
            // add class to active image
            reviewsImage.classList.add(
              "formats__contentBottomRightItem--active"
            );
          });
        }
      });
    });
  });
} catch (error) {}
