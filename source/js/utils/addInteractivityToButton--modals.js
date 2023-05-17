export function addInteractivityToButton(
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

  if (typeOfDecorativeImageOrSrc === true) {
    // create image
    let decorativeImage;
    // create white arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.whiteArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     "assets/images/utils/arrowForFillingButton--white.svg";
    // }
    if (typeOfDecorativeImageOrSrc === true) {
      decorativeImage = new Image(15, 15);
      let tagWithSrc = parent.querySelector(
        ".fillingButton__imageSrcInDataTag"
      );
      decorativeImage.src = tagWithSrc.dataset.src;
    }
    // // create black arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.blackArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     "assets/images/utils/arrowForFillingButton--black.svg";
    // }
    // if (
    //   typeOfDecorativeImageOrSrc !== imagesTypes.blackArrow &&
    //   typeOfDecorativeImageOrSrc !== imagesTypes.whiteArrow &&
    //   typeOfDecorativeImageOrSrc !== null
    // ) {
    //   // destructure custom sizes
    //   const [width, height] = [...decorativeImageSizes];

    //   decorativeImage = new Image(width, height);
    //   decorativeImage.src = typeOfDecorativeImageOrSrc;
    // }
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
