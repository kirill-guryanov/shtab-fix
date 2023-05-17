try {
  // section
  const blog = document.querySelector(".listAfterIntro");
  const blogContainer = document.querySelector(".listAfterIntro .container");
  // lines
  const linesWrapper = document.querySelector(".blogLines");
  const lines = document.querySelectorAll(".blogLine");
  // container
  const blogContainerWidth = blogContainer.getBoundingClientRect().width;
  const blogContainerWidthHalf = blogContainerWidth / 2;
  const blogContainerLeft = blogContainer.getBoundingClientRect().left;
  // lines
  const linesWrapperWidth = linesWrapper.getBoundingClientRect().width;
  const linesWrapperWidthHalf = linesWrapperWidth / 2;
  // needs
  const neededLeftMargin =
    blogContainerWidthHalf + blogContainerLeft - linesWrapperWidthHalf;

  linesWrapper.style.left = `${neededLeftMargin}px`;
} catch (error) {}
