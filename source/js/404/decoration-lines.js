try {
  window.addEventListener("load", function () {
    setDecorativeLines();

    window.addEventListener("resize", () => {
      setDecorativeLines();
    });
  });

  function setDecorativeLines() {
    const margin = 130;
    // current footer
    const footer = document.querySelector(".footer");
    // current footer sizes
    const footerTop = footer.offsetTop;
    const footerHeight = footer.getBoundingClientRect().height;
    // current header container
    const headerContainer = document.querySelector(".container--header");
    // current header container sizes
    const headerContainerWidth = headerContainer.getBoundingClientRect().width;
    const headerContainerLeft = headerContainer.getBoundingClientRect().left;
    const headerContainerWidthComputedForLines =
      headerContainerWidth - margin * 2;
    // lines instances
    const linesWrapper = document.querySelector(".decoration-lines-404");
    const lines = document.querySelectorAll(".decoration-line-404");
    try {
      // set linesWrapper width
      linesWrapper.style.width = `${headerContainerWidthComputedForLines}px`;
      // set linesWrapper height
      linesWrapper.style.height = `${footerTop + footerHeight}px`;
      linesWrapper.style.left = `${headerContainerLeft + margin}px`;
      // set lines height
      lines.forEach((line) => {
        line.style.height = `${footerTop + footerHeight}px`;
      });
    } catch (error) {}
  }
} catch (error) {}
