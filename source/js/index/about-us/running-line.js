try {
  window.addEventListener("load", function () {
    let whiteLine;
    let saladLine;

    try {
      whiteLine = document.querySelector(
        ".about-us__running-line-list-white-index"
      );
      saladLine = document.querySelector(
        ".about-us__running-line-list-salad-index"
      );
    } catch (error) {}

    const marqueElementsDisplayed = 8;

    try {
      for (let i = 0; i < marqueElementsDisplayed; i++) {
        saladLine.appendChild(saladLine.children[i].cloneNode(true));
      }
    } catch (error) {}

    try {
      for (let i = 0; i < marqueElementsDisplayed; i++) {
        whiteLine.prepend(whiteLine.children[i]);
      }
    } catch (error) {}
  });
} catch (error) {}
