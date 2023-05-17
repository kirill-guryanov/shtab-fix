try {
  if (window.innerWidth > 550) {
    window.addEventListener("load", () => {
      const items = document.querySelectorAll(".galleryItem-attraction");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          const image = item.querySelector(".reviews__list-itemBgImage");
          const imageSource = image.getAttribute("src");
          const closeButtonGallery = item.querySelector(".galleryCrossButton");
          const closeButtonSrc = closeButtonGallery.src;

          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");
          wrapper.innerHTML = `
                <div class="galleryContainer">
                    <div class="galleryCrossWrapper">
                        <img class="galleryCross" src="${closeButtonSrc}">
                    </div>
                    <img class="galleryItem" src=${imageSource} alt="Отзыв">
                </div>
            `;
          const body = document.querySelector("body");
          document.body.append(wrapper);
          body.classList.add("hidden");

          const customImage = wrapper.querySelector(".galleryItem");
          if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 3 + "px";
          } else if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 1.4 + "px";
          }

          const cross = wrapper.querySelector(".galleryCross");
          if (window.innerWidth > 650) {
            cross.style.width = window.innerWidth / 99 + "px";
          } else {
            cross.style.width = window.innerWidth / 40 + "px";
          }

          const crossWrapper = wrapper.querySelector(".galleryCrossWrapper");
          crossWrapper.style.marginLeft = window.innerWidth / 99 + 60 + "px";

          setTimeout(() => {
            wrapper.classList.add("wrapper--visible", "wrapper--gallery");
          }, 150);

          const container = wrapper.querySelector(".galleryContainer");
          setTimeout(() => {
            if (container.offsetTop < 0) {
              container.style.marginTop =
                Math.abs(container.offsetTop) + 300 + "px";
            }
          }, 150);

          const closeButton = wrapper.querySelector(".galleryCross");

          closeButton.addEventListener("click", () => {
            wrapper.classList.remove("wrapper--visible");
            // modal.classList.remove("modal--visible");

            const body = document.querySelector("body");
            body.classList.remove("hidden");
          });

          wrapper.addEventListener("click", (e) => {
            if (e.target === wrapper) {
              wrapper.classList.remove("wrapper--visible");
              const body = document.querySelector("body");
              body.classList.remove("hidden");
            }
          });
        });
      });
    });
  }
} catch (error) {}
