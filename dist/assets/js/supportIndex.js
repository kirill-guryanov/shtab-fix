/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 793:
/***/ (function() {

try {
  const accordions = document.querySelectorAll(
    ".answers__contentBottomLeftAccordion"
  );

  document.addEventListener("DOMContentLoaded", () => {
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(
          ".answers__contentBottomLeftAccordionTop"
        );
        const content = self.querySelector(
          ".answers__contentBottomLeftAccordionBottom"
        );

        self.classList.toggle("open");

        if (self.classList.contains("open")) {
          control.setAttribute("aria-expanded", true);
          content.setAttribute("aria-hidden", false);
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          control.setAttribute("aria-expanded", false);
          content.setAttribute("aria-hidden", true);
          content.style.maxHeight = null;
        }
      });
    });
  });
} catch (error) {}


/***/ }),

/***/ 88:
/***/ (function() {

try {
  const body = document.querySelector("body");

  const WordToRight = document.querySelector(
    ".burgerMenu__animatedWords_wordToRight"
  );
  const WordToLeft = document.querySelector(
    ".burgerMenu__animatedWords_wordToLeft"
  );

  const burger = document.querySelector(".header__burger");

  const burgerMenu = document.querySelector(".burgerMenu");
  const itemsForHover = document.querySelectorAll(
    ".burgerMenu__contentNavigation-leftSideItem"
  );
  const rightSide = document.querySelector(
    ".burgerMenu__contentNavigation-rightSide"
  );
  const itemsForShow = document.querySelectorAll(
    ".burgerMenu__contentNavigation-rightSideList"
  );
  const closeButton = document.querySelector(".header__closeBurgerMenuBtn");

  burger.addEventListener("click", () => {
    body.classList.add("hidden");

    WordToRight.classList.add(
      "burgerMenu__animatedWords_wordToRight--animated"
    );
    WordToLeft.classList.add("burgerMenu__animatedWords_wordToLeft--animated");
    burgerMenu.classList.remove("burgerMenu--closed");
    burgerMenu.classList.add("burgerMenu--visible");
  });

  document.addEventListener("keyup", (e) => {
    const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

    if (e.key === "Escape" && isVisible) {
      body.classList.remove("hidden");

      WordToRight.classList.remove(
        "burgerMenu__animatedWords_wordToRight--animated"
      );
      WordToLeft.classList.remove(
        "burgerMenu__animatedWords_wordToLeft--animated"
      );
      burgerMenu.classList.remove("burgerMenu--visible");
      burgerMenu.classList.add("burgerMenu--closed");
    }
  });

  closeButton.addEventListener("click", (e) => {
    const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

    if (isVisible) {
      body.classList.remove("hidden");

      WordToRight.classList.remove(
        "burgerMenu__animatedWords_wordToRight--animated"
      );
      WordToLeft.classList.remove(
        "burgerMenu__animatedWords_wordToLeft--animated"
      );
      burgerMenu.classList.remove("burgerMenu--visible");
      burgerMenu.classList.add("burgerMenu--closed");
    }
  });

  itemsForHover.forEach((itemForHover) => {
    const imageArrow = itemForHover.querySelector(
      ".burgerMenu__contentNavigation-leftSideItemImage"
    );

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      itemForHover.addEventListener("click", () => {
        const imageArrows = document.querySelectorAll(
          ".burgerMenu__contentNavigation-leftSideItemImage"
        );

        imageArrows.forEach((imageArrowForResetClass) => {
          deleteAnimationClass(
            imageArrowForResetClass,
            "burgerMenu__contentNavigation-leftSideItemImage--visible"
          );
        });

        imageArrow.classList.add(
          "burgerMenu__contentNavigation-leftSideItemImage--visible"
        );
      });
    } else {
      itemForHover.addEventListener("mouseenter", () => {
        const imageArrows = document.querySelectorAll(
          ".burgerMenu__contentNavigation-leftSideItemImage"
        );

        imageArrows.forEach((imageArrowForResetClass) => {
          deleteAnimationClass(
            imageArrowForResetClass,
            "burgerMenu__contentNavigation-leftSideItemImage--visible"
          );
        });

        imageArrow.classList.add(
          "burgerMenu__contentNavigation-leftSideItemImage--visible"
        );
      });
    }
  });

  setDataAttributes();

  // add lister for mouseenter
  itemsForHover.forEach((itemForHover) => {
    itemsForShow.forEach((itemForShow) => {
      const showData = itemForShow.dataset.burgerMenuLink;

      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        itemForHover.addEventListener("click", (e) => {
          const hoverData = e.currentTarget.dataset.burgerMenuLink;

          rightSide.classList.add(
            "burgerMenu__contentNavigation-rightSide--visible"
          );
          // reset animation class on all itemForShow
          deleteAnimationClass(
            itemForShow,
            "burgerMenu__contentNavigation-rightSideList--animated"
          );
          // show dependent list
          if (hoverData === showData) {
            itemForShow.classList.add(
              "burgerMenu__contentNavigation-rightSideList--animated"
            );
          }
        });
      } else {
        itemForHover.addEventListener("mouseenter", (e) => {
          const hoverData = e.target.dataset.burgerMenuLink;

          rightSide.classList.add(
            "burgerMenu__contentNavigation-rightSide--visible"
          );
          // reset animation class on all itemForShow
          deleteAnimationClass(
            itemForShow,
            "burgerMenu__contentNavigation-rightSideList--animated"
          );
          // show dependent list
          if (hoverData === showData) {
            itemForShow.classList.add(
              "burgerMenu__contentNavigation-rightSideList--animated"
            );
          }
        });
      }
    });
  });
  // utils
  function deleteAnimationClass(itemForCheck, className) {
    const isVisible = itemForCheck.classList.contains(className);

    if (isVisible) {
      itemForCheck.classList.remove(className);
    }
  }

  function setDataAttributes() {
    itemsForHover.forEach((itemForHover, index) => {
      itemForHover.dataset.burgerMenuLink = index;
    });

    itemsForShow.forEach((itemForShow, index) => {
      itemForShow.dataset.burgerMenuLink = index;
    });
  }
} catch (error) {}


/***/ }),

/***/ 497:
/***/ (function() {

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


/***/ }),

/***/ 951:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    changeItemsPositionsInFooter();

    window.addEventListener("resize", () => {
      changeItemsPositionsInFooter();
    });
  });

  // function for change items positions in footer
  function changeItemsPositionsInFooter() {
    // footer
    const footer = document.querySelector(".footer");
    // when width less 620
    if (window.innerWidth <= 600) {
      // get form parent
      const formParent = document.querySelector(".footer__right-side-form");
      // get form
      let form;
      try {
        form = formParent.querySelector(".footer__right-side-form-content");
      } catch {}
      // remove form
      if (form) {
        const deletedForm = formParent.removeChild(form);
        // create new item
        const newFooterItem = document.createElement("li");
        newFooterItem.className =
          "footer__blocks-item footer__blocks-item--new-item-with-form";
        newFooterItem.appendChild(deletedForm);
        // first item from footer items
        const firstItemWithLogo = document.querySelector(
          ".footer__blocks-item--one"
        );
        // append new item after first item
        firstItemWithLogo.after(newFooterItem);
      }
      // remove form parent
      if (formParent) {
        formParent.remove();
      }
    }
    // when width more than 600
    if (window.innerWidth > 600) {
      // items parent
      const footerItemsList = document.querySelector(".footer__blocks");
      // get form
      let formParent;
      let form;
      try {
        formParent = footerItemsList.querySelector(
          ".footer__blocks-item--new-item-with-form"
        );
        form = formParent.querySelector(".footer__right-side-form-content");
      } catch {}
      if (form) {
        // remove form
        const deletedFormElement = formParent.removeChild(form);
        // create form parent element
        const createdFormParentElement = document.createElement("div");
        createdFormParentElement.className = "footer__right-side-form";
        // append restored block to initial position
        footer.append(createdFormParentElement);
        // restore initial block with form
        const restoredFormParentElement = footer.querySelector(
          ".footer__right-side-form"
        );
        // append form to restored parent block
        restoredFormParentElement.appendChild(deletedFormElement);
        // remove created for small screens parent
        formParent.remove();
      }
    }
  }
} catch (error) {}


/***/ }),

/***/ 957:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const checkbox = document.querySelector(
      ".footer__right-side-form-form-checkbox"
    );
    const checkboxCustomActive = document.querySelector(
      ".footer__right-side-form-form-checkbox-custom--active"
    );

    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        checkboxCustomActive.style.opacity = 0;
      }
      if (checkbox.checked) {
        checkboxCustomActive.style.opacity = 1;
      }
    });
  });
} catch (error) {}


/***/ }),

/***/ 253:
/***/ (function() {

try {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 1024) {
      const headers = document.querySelectorAll(".header--main");

      headers.forEach((header) => {
        addPaddingsToHeader(header);
      });
    }
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 1024) {
      const headers = document.querySelectorAll(".header--main");

      headers.forEach((header) => {
        addPaddingsToHeader(header);
      });
    }
  });

  function addPaddingsToHeader(hdr) {
    const scrollTop = window.scrollY;

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


/***/ }),

/***/ 370:
/***/ (function() {

try {
  document.addEventListener("DOMContentLoaded", () => {
    let headerItemText = document.querySelectorAll(".header__nav-item-text");

    headerItemText.forEach((element) => {
      let innerText = element.innerText; // услуги
      element.innerHTML = ""; // ""

      let textContainer = document.createElement("div"); // create div
      textContainer.classList.add("block"); // add div to class

      for (let letter of innerText) {
        // get each letter of innerText (услуги)
        let span = document.createElement("span"); // create span
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });
  });

  // fix font-weight animation bag when animated text moves siblings elements
  // window.addEventListener("load", () => {
  //   let headerItems = document.querySelectorAll(".header__nav-item");

  //   headerItems.forEach((headerItem, index) => {
  //     const itemText = headerItem.textContent;

  //     const classForAdd = `headerItem-${index}`;
  //     const classForSearch = `.headerItem-${index}`;

  //     const createdElement = document.createElement("p");

  //     createdElement.textContent = itemText;
  //     createdElement.classList.add(classForAdd);

  //     document.body.appendChild(createdElement);

  //     const appendedElement = document.querySelector(classForSearch);
  //     const appendedElementWidth = appendedElement.getBoundingClientRect().width;

  //     console.log(appendedElement);
  //     console.log(appendedElementWidth);

  //     // const headerItemWidth = headerItem.getBoundingClientRect().width;
  //     headerItem.style.width = `${appendedElementWidth + 5}px`;

  //     // appendedElement.remove();
  //   });
  // });

  window.addEventListener("load", () => {
    let headerItems = document.querySelectorAll(".header__nav-item");

    headerItems.forEach((headerItem) => {
      const headerItemWidth = headerItem.getBoundingClientRect().width;
      headerItem.style.width = `${headerItemWidth + 10}px`;
    });
  });
} catch (error) {}


/***/ }),

/***/ 38:
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  let modalTriggers;
  let wrappers;
  let button;
  let form;
  let inputs;
  let isModalTrigger;
  let isWrapper;
  let body;

  try {
    modalTriggers = document.querySelectorAll(".modalTrigger");
    wrappers = document.querySelectorAll(".wrapper");
    // add form submisson with validation
    wrappers.forEach((wrapper) => {
      button = wrapper.querySelector(".fillingButton");
      form = wrapper.querySelector("form");
      inputs = form.querySelectorAll("input");
    });
    //
    modalTriggers.forEach((modalTrigger) => {
      modalTrigger.addEventListener("click", () => {
        //   modals.forEach((modal) => {
        wrappers.forEach((wrapper) => {
          isModalTrigger = modalTrigger.dataset.modal;
          isWrapper = wrapper.dataset.modal;

          if (isModalTrigger && isWrapper && isModalTrigger === isWrapper) {
            wrapper.classList.add("wrapper--visible");

            body = document.querySelector("body");
            body.classList.add("hidden");
          }
        });
      });
    });
  } catch (error) {}
});

document.addEventListener("keyup", (e) => {
  let wrappers;
  let visibleWrapper;
  let body;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      visibleWrapper = wrapper.classList.contains("wrapper--visible");

      if (e.key === "Escape" && visibleWrapper) {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      }
    });
  } catch (error) {}
});

window.addEventListener("load", () => {
  let wrappers;
  let body;
  let closeButton;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", (e) => {
        if (e.target === wrapper) {
          wrappers.forEach((wrapper) => {
            wrapper.classList.remove("wrapper--visible");

            body = document.querySelector("body");
            body.classList.remove("hidden");
          });
        }
      });

      closeButton = wrapper.querySelector(".modal__contentCross");

      closeButton.addEventListener("click", () => {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      });
    });
  } catch (error) {}
});


/***/ }),

/***/ 893:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    items.forEach((item) => {
      const spanAnimationBgWrapper = item.querySelector(
        ".servisec-list__item-title-span-wrapper"
      );
      const titleWithSpan = item.querySelector(
        ".servisec-list__item-title span"
      );
      const span = item.querySelector(".servisec-list__item-title span");

      spanAnimationBgWrapper.style.left =
        titleWithSpan.offsetLeft +
        titleWithSpan.offsetParent.offsetLeft -
        2 +
        "px";
      spanAnimationBgWrapper.style.top =
        titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
      spanAnimationBgWrapper.style.width =
        span.getBoundingClientRect().width + "px";

      if (
        spanAnimationBgWrapper.classList.contains(
          "servisec-list__item-title-span-wrapper--wide"
        )
      ) {
        spanAnimationBgWrapper.style.width =
          span.getBoundingClientRect().width + 5 + "px";
      }
      spanAnimationBgWrapper.style.height =
        span.getBoundingClientRect().height / 1.2 + "px";
    });
  });

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    items.forEach((item) => {
      const spanAnimationBgWrapper = item.querySelector(
        ".servisec-list__item-title-span-wrapper"
      );
      const titleWithSpan = item.querySelector(
        ".servisec-list__item-title span"
      );
      const span = item.querySelector(".servisec-list__item-title span");

      spanAnimationBgWrapper.style.left =
        titleWithSpan.offsetLeft +
        titleWithSpan.offsetParent.offsetLeft -
        2 +
        "px";
      spanAnimationBgWrapper.style.top =
        titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
      spanAnimationBgWrapper.style.width =
        span.getBoundingClientRect().width + "px";
      spanAnimationBgWrapper.style.height =
        span.getBoundingClientRect().height / 1.2 + "px";
    });
  });
} catch (error) {}


/***/ }),

/***/ 411:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 721:
/***/ (function() {

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


/***/ }),

/***/ 922:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-serviceDetail", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",

        breakpoints: {
          5000: {
            perPage: 4,
            gap: 16,
          },
          1460: {
            perPage: 4,
            gap: 50,
          },
          1350: {
            gap: 20,
          },
          1200: {
            perPage: 4,
            gap: 20,
          },
          1180: {
            perPage: 3,
            gap: 60,
            // gap: 200
          },
          1060: {
            // perPage: 2,
            gap: 20,
          },
          920: {
            perPage: 2,
            gap: 160,
          },
          840: {
            // perPage: 2,
            gap: 100,
          },
          765: {
            // perPage: 2,
            gap: 30,
          },
          675: {
            perPage: 1,
            gap: 30,
          },
          450: {
            perPage: 1,
            gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 339:
/***/ (function() {

if (window.innerWidth >= 1370) {
  const itemForSticky = document.querySelector(".benefits__contentLeft");
  const rightSideSection = document.querySelector(".benefits__contentRight");
  const itemForStickyWrapper = document.querySelector(
    ".benefits__contentLeftWrapper"
  );
  const header = document.querySelector(".header--main");

  const initialWidth = itemForSticky.getBoundingClientRect().width;
  itemForSticky.style.width = `${initialWidth}px`;
  itemForStickyWrapper.style.width = `${initialWidth}px`;

  window.addEventListener("scroll", () => {
    // header height
    const headerHeight = header.getBoundingClientRect().height;
    // how much was scrolled
    const windowY = window.scrollY;

    // right side section from top with height
    const rightSideSectionTop =
      rightSideSection.offsetTop +
      rightSideSection.offsetParent.offsetTop +
      rightSideSection.getBoundingClientRect().height;

    // left side section from top with margin that is header height and addition
    const itemForStickyWrapperTop =
      itemForStickyWrapper.offsetTop +
      itemForStickyWrapper.offsetParent.offsetTop -
      headerHeight;

    let counter = 0;
    // item's for sticky bottom side current postition from top
    let itemForStickyBottomSide;

    if (windowY >= itemForStickyWrapperTop) {
      itemForSticky.style.position = "unset";
    }

    if (windowY >= itemForStickyWrapperTop) {
      // set sticky
      if (counter === 0) {
        itemForSticky.style.position = "fixed";
        itemForSticky.style.top = `${windowY + headerHeight}px`;
      }
      // item's for sticky bottom side current postition from top
      itemForStickyBottomSide =
        itemForSticky.offsetTop + itemForSticky.getBoundingClientRect().height;

      // set absolute to press itemForStick to bottom to allign with right side item's bottom side
      if (itemForStickyBottomSide >= rightSideSectionTop) {
        itemForSticky.style.position = "unset";
        itemForSticky.style.top = `unset`;

        itemForStickyWrapper.style.display = "flex";
        itemForStickyWrapper.style.alignItems = "end";

        counter++;
      }
    }

    if (itemForStickyBottomSide < rightSideSectionTop) {
      counter--;

      itemForSticky.style.position = "fixed";
      itemForSticky.style.top = `${windowY + headerHeight}px`;
    }
  });
}


/***/ }),

/***/ 314:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const allButtons = document.querySelectorAll(".fillingButton");

    allButtons.forEach((button) => {
      // get span
      const buttonSpan = button.querySelector("span");
      const buttonSpanWidth = buttonSpan.getBoundingClientRect().width;
      // get content block
      const buttonContent = button.querySelector(".fillingButton__content");

      if (
        buttonSpan &&
        buttonSpan.classList.contains("fillingButton__span--smallMargin")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth / 2}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      } else if (
        buttonSpan &&
        buttonSpan.classList.contains(
          "fillingButton__span--smallMargin-and-partial"
        )
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth}px`;
        }
      } else if (
        buttonSpan &&
        !buttonSpan.closest(".fillingButton__content--big")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth + 3}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      }
    });
  });
} catch (error) {}


/***/ }),

/***/ 802:
/***/ (function() {

try {
  const body = document.querySelector("body");
  const loaderBg = document.querySelector(".loader");
  const loaderFirst = document.querySelector(".loader-first");
  const loaderSecond = document.querySelector(".loader-second");

  window.addEventListener("load", () => {
    if (window.innerWidth <= 1024) {
      body.classList.remove("hidden");
    }

    loaderBg.classList.add("loader--hide");
    loaderFirst.classList.add("loader-first--active");
    loaderSecond.classList.add("loader-second--active");

    loaderBg.addEventListener(
      "animationstart",
      () => {
        setTimeout(() => {
          loaderBg.classList.add("loader--none");
        }, 1100);
      },
      {
        once: true,
        useCapture: false,
      }
    );
  });
} catch (error) {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./source/js/utils/preloader.js
var preloader = __webpack_require__(802);
// EXTERNAL MODULE: ./source/js/burgerMenu/burgerMenu.js
var burgerMenu = __webpack_require__(88);
;// CONCATENATED MODULE: ./source/js/utils/addInteractivityToButton.js
function addInteractivityToButton(
  parentSelector,
  circleSvgSelector,
  circleSelector,
  left,
  top,
  additionalLeft,
  additionalTop,
  addArrow,
  typeOfDecorativeImageOrSrc = null,
  withTextInversion,
  [...decorativeImageSizes] = [],
  mode,
  addedSelectors
) {
  // mode present ?
  const isMode = mode;
  // type of modes
  const modes = {
    // modeType:
    //   mode === 'bigWhite' ? "big" : null
    //   || mode === 'bigBlack' ? "big" : null,
    bigWhiteFirst: "bigWhiteFirst",
    // bigBlackFirst: 'bigBlackFirst',
  };
  // type of images
  const imagesTypes = {
    blackArrow: "blackArrow",
    whiteArrow: "whiteArrow",
  };

  let matrixFrom;
  let matrixTo;
  let matrixValue = 0;

  let parent, circleSvg, circle;

  if (addedSelectors !== true) {
    // get paren block
    parent = document.querySelector(parentSelector);
    // get circle svg for :hover interactions
    circleSvg = document.querySelector(circleSvgSelector);
    // get circle for add coordinates to fill-circle  interactions
    circle = document.querySelector(circleSelector);
  } else {
    // get paren block
    parent = parentSelector;
    // get circle svg for :hover interactions
    circleSvg = circleSvgSelector;
    // get circle for add coordinates to fill-circle  interactions
    circle = circleSelector;
  }

  // create coordinates for circle
  let x;
  let y;
  // get coordinates to do margin from left
  // depend on position of whole button block (parent)
  // by given number
  switch (left) {
    case 0:
      x = (event, addedLeft) => event.pageX + addedLeft;
      break;
    case 1:
      x = (event, addedLeft) => event.pageX - parent.offsetLeft + addedLeft;
      break;
    case 2:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case 3:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case "servicesPage-infoSection":
      x = (event, addedLeft) => event.pageX - parent.offsetLeft - w;
      parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
  }
  // get coordinates to do margin from top
  // depend on position of whole button block (parent)
  // by given number
  switch (top) {
    case 0:
      y = (event, addedTop) => event.pageY + addedTop + matrixValue;
      break;
    case 1:
      y = (event, addedTop) =>
        event.pageY - parent.offsetTop + addedTop + matrixValue;
      break;
    case 2:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 22:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 3:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 33:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        window.scrollY +
        matrixValue +
        addedTop;
      break;
    case 4:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case "servicesPage-infoSection":
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
  }
  // get span for color inversion
  let buttonContentBlockSpan;

  if (withTextInversion) {
    buttonContentBlockSpan = parent.querySelector(
      ".fillingButton__content span"
    );
  }
  // for images
  let blackImage;
  let whiteImage;

  if (mode === modes.bigWhiteFirst) {
    let width;
    let height;

    if (decorativeImageSizes.length !== 0) {
      [width, height] = [...decorativeImageSizes];
      // create black
      blackImage = new Image(width, height);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(width, height);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    } else {
      // create black
      blackImage = new Image(20, 20);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(20, 20);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    }
    // big mode and white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstInitialization(whiteImage, blackImage);
    }
    // +++++++++++++++++++
    // big mode and black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInitialization(whiteImage, blackImage)
    // }
    // +++++++++++++++++++
    // add styles
    whiteImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    blackImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    // add styles to p tag
    const buttonSpanParent = parent.querySelector(".fillingButton__p");
    buttonSpanParent.classList.add("fillingButton__p--big");
    // get images parent block
    const buttonImagesBlock = parent.querySelector(
      ".fillingButton__imagesWrapper"
    );
    if (width && height) {
      buttonImagesBlock.style.width = `${width}px`;
      buttonImagesBlock.style.height = `${height}px`;
    } else {
      buttonImagesBlock.style.width = `20px`;
      buttonImagesBlock.style.height = `20px`;
    }
    // append images
    buttonImagesBlock.appendChild(blackImage);
    buttonImagesBlock.appendChild(whiteImage);
  }
  // =======
  if (typeOfDecorativeImageOrSrc === imagesTypes.blackArrow) {
    // create image
    let decorativeImage;
    // // create black arrow
    decorativeImage = new Image(15, 15);
    decorativeImage.src =
      "assets/images/utils/arrowForFillingButton--black.svg";
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  } else if (typeOfDecorativeImageOrSrc === imagesTypes.whiteArrow) {
    // create image
    let decorativeImage;
    // // create black arrow
    decorativeImage = new Image(15, 15);
    decorativeImage.src =
      "assets/images/utils/arrowForFillingButton--white.svg";
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  } else if (typeOfDecorativeImageOrSrc === true) {
    // create image
    let decorativeImage;
    if (typeOfDecorativeImageOrSrc === true) {
      decorativeImage = new Image(15, 15);
      let tagWithSrc = parent.querySelector(
        ".fillingButton__imageSrcInDataTag"
      );
      decorativeImage.src = tagWithSrc.dataset.src;
    }
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  }

  // add listeners
  circleSvg.addEventListener("mousemove", (event) => {
    matrixFrom = +getComputedStyle(
      document.querySelector("main")
    ).transform.lastIndexOf("-");
    matrixTo = +getComputedStyle(
      document.querySelector("main")
    ).transform.lastIndexOf(")");
    matrixValue = Math.abs(
      +getComputedStyle(document.querySelector("main")).transform.slice(
        matrixFrom,
        matrixTo
      )
    );

    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstInversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInversion(whiteImage, blackImage)
    // }
    // add coordinates to circle for it's ::before pseudo-element
    circle.style.setProperty("--x", `${x(event, additionalLeft)}px`);
    circle.style.setProperty("--y", `${y(event, additionalTop)}px`);
    // add class for give size to filling
    circle.classList.add("fillingButton__circle--active");
    // add for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.add("fillingButton__p--black");
    }
  });
  // remove class for reset size to filling
  circleSvg.addEventListener("mouseleave", () => {
    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstReversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstReversion(whiteImage, blackImage)
    // }
    circle.classList.remove("fillingButton__circle--active");
    // remove for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.remove("fillingButton__p--black");
    }
  });
}

// big white first utils
function bigWhiteFirstInitialization(white, black) {
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
function bigWhiteFirstInversion(white, black) {
  white.classList.remove("fillingButton__image--white-visible");
  black.classList.remove("fillingButton__image--black-hidden");
  // colors inversions
  white.classList.add("fillingButton__image--white-hidden");
  black.classList.add("fillingButton__image--black-visible");
}
function bigWhiteFirstReversion(white, black) {
  white.classList.remove("fillingButton__image--white-hidden");
  black.classList.remove("fillingButton__image--black-visible");
  // colors inversions
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
// // big black first utils
// function bigBlackFirstInitialization(white, black) {
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }
// function bigBlackFirstInversion(white, black) {
//   white.classList.remove('fillingButton__image--white-hidden')
//   black.classList.remove('fillingButton__image--black-visible')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-visible')
//   black.classList.add('fillingButton__image--black-hidden')
// }
// function bigBlackFirstReversion(white, black) {
//   white.classList.remove('fillingButton__image--white-visible')
//   black.classList.remove('fillingButton__image--black-hidden')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }

;// CONCATENATED MODULE: ./source/js/burgerMenu/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  let isServicesPage;

  try {
    isServicesPage = document.querySelector(
      ".fillingButton--burgerMenuAddresses--services"
    );
  } catch (error) {}

  if (isServicesPage) {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        2,
        3,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  } else {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        1,
        1,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  }
});

// EXTERNAL MODULE: ./source/js/header/text.js
var header_text = __webpack_require__(370);
// EXTERNAL MODULE: ./source/js/header/animationWithScroll.js
var animationWithScroll = __webpack_require__(253);
;// CONCATENATED MODULE: ./source/js/support/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}

  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        3,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(one, two, three, 3, 3, 0, 0, false);
    });
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/support/sticky.js
var sticky = __webpack_require__(339);
// EXTERNAL MODULE: ./source/js/serviceDetail/spanBg.js
var spanBg = __webpack_require__(893);
// EXTERNAL MODULE: ./source/js/attraction/answersAccordion.js
var answersAccordion = __webpack_require__(793);
// EXTERNAL MODULE: ./source/js/footer/checkbox.js
var footer_checkbox = __webpack_require__(957);
// EXTERNAL MODULE: ./source/js/footer/add-space-between-items.js
var add_space_between_items = __webpack_require__(497);
// EXTERNAL MODULE: ./source/js/footer/changeFooterColumnsOrder.js
var changeFooterColumnsOrder = __webpack_require__(951);
// EXTERNAL MODULE: ./source/js/modals/modals.js
var modals = __webpack_require__(38);
;// CONCATENATED MODULE: ./source/js/utils/addInteractivityToButton--modals.js
function addInteractivityToButton_modals_addInteractivityToButton(
  parentSelector,
  circleSvgSelector,
  circleSelector,
  left,
  top,
  additionalLeft,
  additionalTop,
  addArrow,
  typeOfDecorativeImageOrSrc = null,
  withTextInversion,
  [...decorativeImageSizes] = [],
  mode,
  addedSelectors
) {
  // mode present ?
  const isMode = mode;
  // type of modes
  const modes = {
    // modeType:
    //   mode === 'bigWhite' ? "big" : null
    //   || mode === 'bigBlack' ? "big" : null,
    bigWhiteFirst: "bigWhiteFirst",
    // bigBlackFirst: 'bigBlackFirst',
  };
  // type of images
  const imagesTypes = {
    blackArrow: "blackArrow",
    whiteArrow: "whiteArrow",
  };

  let matrixFrom;
  let matrixTo;
  let matrixValue = 0;

  let parent, circleSvg, circle;

  if (addedSelectors !== true) {
    // get paren block
    parent = document.querySelector(parentSelector);
    // get circle svg for :hover interactions
    circleSvg = document.querySelector(circleSvgSelector);
    // get circle for add coordinates to fill-circle  interactions
    circle = document.querySelector(circleSelector);
  } else {
    // get paren block
    parent = parentSelector;
    // get circle svg for :hover interactions
    circleSvg = circleSvgSelector;
    // get circle for add coordinates to fill-circle  interactions
    circle = circleSelector;
  }

  // create coordinates for circle
  let x;
  let y;
  // get coordinates to do margin from left
  // depend on position of whole button block (parent)
  // by given number
  switch (left) {
    case 0:
      x = (event, addedLeft) => event.pageX + addedLeft;
      break;
    case 1:
      x = (event, addedLeft) => event.pageX - parent.offsetLeft + addedLeft;
      break;
    case 2:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case 3:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case "servicesPage-infoSection":
      x = (event, addedLeft) => event.pageX - parent.offsetLeft - w;
      parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
  }
  // get coordinates to do margin from top
  // depend on position of whole button block (parent)
  // by given number
  switch (top) {
    case 0:
      y = (event, addedTop) => event.pageY + addedTop + matrixValue;
      break;
    case 1:
      y = (event, addedTop) =>
        event.pageY - parent.offsetTop + addedTop + matrixValue;
      break;
    case 2:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 22:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 3:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 33:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        window.scrollY +
        matrixValue +
        addedTop;
      break;
    case 4:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case "servicesPage-infoSection":
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
  }
  // get span for color inversion
  let buttonContentBlockSpan;

  if (withTextInversion) {
    buttonContentBlockSpan = parent.querySelector(
      ".fillingButton__content span"
    );
  }
  // for images
  let blackImage;
  let whiteImage;

  if (mode === modes.bigWhiteFirst) {
    let width;
    let height;

    if (decorativeImageSizes.length !== 0) {
      [width, height] = [...decorativeImageSizes];
      // create black
      blackImage = new Image(width, height);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(width, height);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    } else {
      // create black
      blackImage = new Image(20, 20);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(20, 20);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    }
    // big mode and white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstInitialization(whiteImage, blackImage);
    }
    // +++++++++++++++++++
    // big mode and black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInitialization(whiteImage, blackImage)
    // }
    // +++++++++++++++++++
    // add styles
    whiteImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    blackImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    // add styles to p tag
    const buttonSpanParent = parent.querySelector(".fillingButton__p");
    buttonSpanParent.classList.add("fillingButton__p--big");
    // get images parent block
    const buttonImagesBlock = parent.querySelector(
      ".fillingButton__imagesWrapper"
    );
    if (width && height) {
      buttonImagesBlock.style.width = `${width}px`;
      buttonImagesBlock.style.height = `${height}px`;
    } else {
      buttonImagesBlock.style.width = `20px`;
      buttonImagesBlock.style.height = `20px`;
    }
    // append images
    buttonImagesBlock.appendChild(blackImage);
    buttonImagesBlock.appendChild(whiteImage);
  }

  if (typeOfDecorativeImageOrSrc === imagesTypes.blackArrow) {
    // create image
    let decorativeImage;
    // // create black arrow
    decorativeImage = new Image(15, 15);
    decorativeImage.src =
      "assets/images/utils/arrowForFillingButton--black.svg";
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  } else if (typeOfDecorativeImageOrSrc === imagesTypes.whiteArrow) {
    // create image
    let decorativeImage;
    // // create black arrow
    decorativeImage = new Image(15, 15);
    decorativeImage.src =
      "assets/images/utils/arrowForFillingButton--white.svg";
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  } else if (typeOfDecorativeImageOrSrc === true) {
    // create image
    let decorativeImage;
    if (typeOfDecorativeImageOrSrc === true) {
      decorativeImage = new Image(15, 15);
      let tagWithSrc = parent.querySelector(
        ".fillingButton__imageSrcInDataTag"
      );
      decorativeImage.src = tagWithSrc.dataset.src;
    }
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  }
  // add listeners
  circleSvg.addEventListener("mousemove", (event) => {
    //   matrixFrom = +getComputedStyle(
    //     document.querySelector("main")
    //   ).transform.lastIndexOf("-");
    //   matrixTo = +getComputedStyle(
    //     document.querySelector("main")
    //   ).transform.lastIndexOf(")");
    //   matrixValue = Math.abs(
    //     +getComputedStyle(document.querySelector("main")).transform.slice(
    //       matrixFrom,
    //       matrixTo
    //     )
    //   );

    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstInversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInversion(whiteImage, blackImage)
    // }
    // add coordinates to circle for it's ::before pseudo-element
    circle.style.setProperty("--x", `${x(event, additionalLeft)}px`);
    circle.style.setProperty("--y", `${y(event, additionalTop)}px`);
    // add class for give size to filling
    circle.classList.add("fillingButton__circle--active");
    // add for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.add("fillingButton__p--black");
    }
  });
  // remove class for reset size to filling
  circleSvg.addEventListener("mouseleave", () => {
    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstReversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstReversion(whiteImage, blackImage)
    // }
    circle.classList.remove("fillingButton__circle--active");
    // remove for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.remove("fillingButton__p--black");
    }
  });
}

// big white first utils
function addInteractivityToButton_modals_bigWhiteFirstInitialization(white, black) {
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
function addInteractivityToButton_modals_bigWhiteFirstInversion(white, black) {
  white.classList.remove("fillingButton__image--white-visible");
  black.classList.remove("fillingButton__image--black-hidden");
  // colors inversions
  white.classList.add("fillingButton__image--white-hidden");
  black.classList.add("fillingButton__image--black-visible");
}
function addInteractivityToButton_modals_bigWhiteFirstReversion(white, black) {
  white.classList.remove("fillingButton__image--white-hidden");
  black.classList.remove("fillingButton__image--black-visible");
  // colors inversions
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
// // big black first utils
// function bigBlackFirstInitialization(white, black) {
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }
// function bigBlackFirstInversion(white, black) {
//   white.classList.remove('fillingButton__image--white-hidden')
//   black.classList.remove('fillingButton__image--black-visible')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-visible')
//   black.classList.add('fillingButton__image--black-hidden')
// }
// function bigBlackFirstReversion(white, black) {
//   white.classList.remove('fillingButton__image--white-visible')
//   black.classList.remove('fillingButton__image--black-hidden')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }

;// CONCATENATED MODULE: ./source/js/modals/modalButtons.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    const costsItems = document.querySelectorAll(".modal");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--modal");
      const two = item.querySelector(".fillingButton__svg-circle--modal");
      const three = item.querySelector(".fillingButton__circle--modal");

      addInteractivityToButton_modals_addInteractivityToButton(
        one,
        two,
        three,
        3,
        3,
        0,
        0,
        true,
        "whiteArrow",
        true,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {});

// EXTERNAL MODULE: ./source/js/utils/allignButtonsSpan.js
var allignButtonsSpan = __webpack_require__(314);
// EXTERNAL MODULE: ./source/js/serviceDetail/splide.js
var splide = __webpack_require__(922);
// EXTERNAL MODULE: ./source/js/serviceDetail/splide-arrows-align.js
var splide_arrows_align = __webpack_require__(411);
// EXTERNAL MODULE: ./source/js/serviceDetail/splide-arrows-embed.js
var splide_arrows_embed = __webpack_require__(721);
;// CONCATENATED MODULE: ./source/js/utils/browserDetect.js
const BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version =
      this.searchVersion(navigator.userAgent) ||
      this.searchVersion(navigator.appVersion) ||
      "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      } else if (dataProp) return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(
      dataString.substring(index + this.versionSearchString.length + 1)
    );
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome",
    },
    {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb",
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version",
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version",
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab",
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror",
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox",
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino",
    },
    {
      /* For Newer Netscapes (6+) */
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape",
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Internet Explorer",
      versionSearch: "MSIE",
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv",
    },
    {
      /* For Older Netscapes (4-) */
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla",
    },
  ],
  dataOS: [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows",
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac",
    },
    {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iPhone/iPod",
    },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux",
    },
  ],
};

;// CONCATENATED MODULE: ./source/js/locomotive/locomotive--support.js

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

;// CONCATENATED MODULE: ./source/js/indexes/supportIndex.js
// preloader

// burgerMenu


// circle
// import "../circle/circle--support";
// header


// local


// adds


// footer




// modal


// utils


// import "../utils/butter";
// import "../utils/animationOnScroll";
// splide






}();
/******/ })()
;