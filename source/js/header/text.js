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
