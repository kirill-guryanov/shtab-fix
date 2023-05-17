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
