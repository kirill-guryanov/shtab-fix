import { BrowserDetect } from "../utils/browserDetect";
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
    offset: [300, 0],
  });

  if (window.innerWidth <= 1024) {
    const butter = document.querySelector("#butter");

    butter.style.position = "unset";
    butter.style.overflow = "unset";
    butter.style.minHeight = "unset";
  }

  scroll.on("scroll", ({ limit, scroll }) => {
    if (window.innerWidth > 1024) {
      scrollTop = scroll.y;

      const headers = document.querySelectorAll(".header--main");

      headers.forEach((header) => {
        addPaddingsToHeader(header, scrollTop);
      });
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
