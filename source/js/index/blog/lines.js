try {
  // section
  const blog = document.querySelector(".blog-index");
  const blogContainer = document.querySelector(".blog-index .container");
  // lines
  const linesWrapper = document.querySelector(".blogLines-index");
  const lines = document.querySelectorAll(".blogLine-index");
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
