try {
  window.addEventListener("load", () => {
    addMarginsBetweenFooterItems();
  });

  function addMarginsBetweenFooterItems() {
    // to add margins between items
    const itemsParent = document.querySelector(".footer__blocks");

    if (window.innerWidth > 1920) {
      itemsParent.classList.add("footer__blocks--between");
    }
    if (window.innerWidth <= 2340) {
      itemsParent.classList.remove("footer__blocks--between");
    }
    // the same as above on resize
    window.addEventListener("resize", () => {
      const itemsParent = document.querySelector(".footer__blocks");

      if (window.innerWidth > 1920) {
        itemsParent.classList.add("footer__blocks--between");
      }
      if (window.innerWidth <= 2340) {
        itemsParent.classList.remove("footer__blocks--between");
      }
    });
  }

  //  set width
  if (window.innerWidth >= 1537) {
    document.addEventListener("DOMContentLoaded", () => {
      let counter = 0;

      const footer = document.querySelector(".footer");

      const containerFooter = document.querySelector(".container--footer");

      const container = document.querySelector(".container");
      const containerLeftMargin = container.getBoundingClientRect().left;
      const containerLeftWidth = container.getBoundingClientRect().width;

      if (counter < 1) {
        counter++;

        if (containerFooter) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }
      }

      if (window.innerWidth >= 1537) {
        if (containerFooter) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }
      }

      if (window.innerWidth <= 1536) {
        footer.style.width = 100 + "%";

        if (containerFooter) {
          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          footer
            .querySelector(".container")
            .classList.remove("container--footer");
        }
      }
    });

    window.addEventListener("resize", () => {
      const footer = document.querySelector(".footer");

      const containerFooter = document.querySelector(".container--footer");

      const container = document.querySelector(".container");
      const containerLeftMargin = container.getBoundingClientRect().left;
      const containerLeftWidth = container.getBoundingClientRect().width;

      if (window.innerWidth >= 1537) {
        try {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        } catch (error) {}
      }

      if (window.innerWidth <= 1536) {
        footer.style.maxWidth = 100 + "%";

        if (containerFooter) {
          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          containerFooter.classList.remove("container--footer");
        }
      }
    });
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1537) {
      document.addEventListener("DOMContentLoaded", () => {
        let counter = 0;

        const footer = document.querySelector(".footer");

        const containerFooter = document.querySelector(".container--footer");

        let containerFooterSecond;
        try {
          containerFooterSecond = document.querySelector(
            ".container--footerSecond"
          );
        } catch (e) {}

        const container = document.querySelector(".container");
        const containerLeftMargin = container.getBoundingClientRect().left;
        const containerLeftWidth = container.getBoundingClientRect().width;

        if (counter < 1) {
          counter++;

          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }

        if (window.innerWidth >= 1537) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;

          if (containerFooterSecond) {
            containerFooterSecond.replace(
              "container--footerSecond",
              "container--footer"
            );
          }
        }

        if (window.innerWidth <= 1536) {
          footer.style.width = 100 + "%";

          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          footer
            .querySelector(".container")
            .classList.remove("container--footer");
        }
      });

      window.addEventListener("resize", () => {
        const footer = document.querySelector(".footer");

        const containerFooter = document.querySelector(".container--footer");

        let containerFooterSecond;
        try {
          containerFooterSecond = document.querySelector(
            ".container--footerSecond"
          );
        } catch (e) {}

        const container = document.querySelector(".container");
        const containerLeftMargin = container.getBoundingClientRect().left;
        const containerLeftWidth = container.getBoundingClientRect().width;

        if (window.innerWidth >= 1537) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;

          if (containerFooterSecond) {
            containerFooterSecond.replace(
              "container--footerSecond",
              "container--footer"
            );
          }
        }

        if (window.innerWidth <= 1536) {
          footer.style.maxWidth = 100 + "%";

          if (containerFooter) {
            containerFooter.classList.add("container");
            containerFooter.classList.add("container--footerSecond");
            containerFooter.classList.remove("container--footer");
          }
        }

        if (window.innerWidth <= 1090) {
          footer.style.maxWidth = 100 + "%";
          if (containerFooter) {
            containerFooter.style.marginLeft = null;
          }

          if (containerFooter) {
            containerFooter.classList.add("container");
            containerFooter.classList.add("container--footerSecond");
            containerFooter.classList.remove("container--footer");
          }
        }
      });
    }
  });
  // ==============

  const container = document.querySelector(".container");
  const containerLeftMargin = container.getBoundingClientRect().left;
  const containerLeftPadding = getComputedStyle(container).paddingLeft;

  const containerFooter = document.querySelector(".container--footer");

  if (window.innerWidth >= 1091) {
    if (containerFooter) {
      containerFooter.style.marginLeft = `${
        containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
      }px`;
    }
  }
  if (window.innerWidth <= 1090) {
    if (containerFooter) {
      containerFooter.style.marginLeft = null;
    }
    if (containerFooter) {
      containerFooter.classList.add("container");
      containerFooter.classList.add("container--footerSecond");
      containerFooter.classList.remove("container--footer");
    }
  }

  window.addEventListener("resize", () => {
    const container = document.querySelector(".container");
    const containerLeftMargin = container.getBoundingClientRect().left;
    const containerLeftPadding = getComputedStyle(container).paddingLeft;

    const containerFooter = document.querySelector(".container--footer");
    const containerFooterSecond = document.querySelector(
      ".container--footerSecond"
    );

    if (window.innerWidth > 1090) {
      if (containerFooterSecond) {
        containerFooterSecond.classList.remove("container");
        containerFooterSecond.classList.add("container--footer");
        containerFooterSecond.classList.remove("container--footerSecond");
      }
      if (containerFooter) {
        containerFooter.style.marginLeft = `${
          containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
        }px`;
      }
      if (containerFooterSecond) {
        containerFooterSecond.style.marginLeft = `${
          containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
        }px`;
      }
    }
    if (window.innerWidth <= 1090) {
      if (containerFooter) {
        containerFooter.style.marginLeft = null;
      }
      if (containerFooter) {
        containerFooter.classList.add("container");
        containerFooter.classList.add("container--footerSecond");
        containerFooter.classList.remove("container--footer");
      }
    }
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   const footer = document.querySelector(".footer");
  //   const footerWidth = footer.getBoundingClientRect().width;

  //   const containerFooter = document.querySelector(".container--footer");
  //   const containerFooterSecond = document.querySelector(
  //     ".container--footerSecond"
  //   );

  //   const footerForm = document.querySelector(".footer__right-side-form");
  //   const footerFormWidth = footerForm.getBoundingClientRect().width;

  //   const container = document.querySelector(".container");
  //   const containerLeftMargin = container.getBoundingClientRect().left;

  //   if (containerFooterSecond) {
  //     containerFooterSecond.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  //   if (containerFooter) {
  //     containerFooter.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  // });

  // window.addEventListener("resize", () => {
  //   const footer = document.querySelector(".footer");
  //   const footerWidth = footer.getBoundingClientRect().width;

  //   const containerFooter = document.querySelector(".container--footer");
  //   const containerFooterSecond = document.querySelector(
  //     ".container--footerSecond"
  //   );

  //   const footerForm = document.querySelector(".footer__right-side-form");
  //   const footerFormWidth = footerForm.getBoundingClientRect().width;

  //   const container = document.querySelector(".container");
  //   const containerLeftMargin = container.getBoundingClientRect().left;

  //   if (containerFooterSecond) {
  //     containerFooterSecond.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  //   if (containerFooter) {
  //     containerFooter.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  // });
} catch (error) {}
