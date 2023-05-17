try {
  window.addEventListener("load", function () {
    // header
    const header = document.querySelectorAll(".header--main");
    // const headerNav  = document.querySelector(".header__nav")
    // logo image
    // const headerLogoImageBlack = document.querySelector(".header__logo-block-image--black")
    // const headerLogoImageWhite = document.querySelector(".header__logo-block-image--white")
    // nav item
    // const navItem = document.querySelectorAll(".header__nav-item")
    // const navItemArray = Array.from(navItem)
    // contacts item
    // const contactsItems = document.querySelectorAll(".header__contacts-item-number")
    // const contactsItemsArray = Array.from(contactsItems)
    // back call
    // const backCalls = document.querySelectorAll(".header__contacts-item-back-call")
    // const backCallsArray = Array.from(backCalls)
    // burger span
    // const burgerSpans = document.querySelectorAll(".header__burger-span")
    // const burgerSpansArray = Array.from(burgerSpans)
    // contacts item social
    // const itemSocialsWhite = document.querySelectorAll(".header__contacts-item-image--white")
    // const itemSocialsWhiteArray = Array.from(itemSocialsWhite)
    // const itemSocialsBlack = document.querySelectorAll(".header__contacts-item-image--black")
    // const itemSocialsBlackArray = Array.from(itemSocialsBlack)

    // offset
    // const offsetTotal = 100
    // get top
    // const getTop = () => window.scrollY || document.documentElement.scrollTop
    const scrollTop = window.scrollY;

    // function resetHeaderNavClassesBg() {
    //   if (headerNav.classList.contains("header__nav--black")) {
    //     headerNav.classList.remove("header__nav--black")
    //   }
    //   if (headerNav.classList.contains("header__nav--white")) {
    //     headerNav.classList.remove("header__nav--white")
    //   }
    // }
    if (window.scrollY >= 1) {
      if (header.classList.contains("header--main-transparent")) {
        header.classList.add("header--main-white");
      }

      header.classList.add("header--main--min-padding");
    }
    if (window.scrollY === 0) {
      if (header.classList.contains("header--main-transparent")) {
        header.classList.remove("header--main-white");
      }
      header.classList.remove("header--main--min-padding");
    }
    // header nav
    // if (scrollTop >= 1) {
    //   headerNav.classList.add("header__nav--top")
    // }
    // // reset classes
    // if (window.innerWidth >= 960) {
    //   headerNav.classList.remove("header__nav--black")
    //   headerNav.classList.remove("header__nav--white")
    // }
    // // add white
    // if (!header.classList.contains("header--inversion")) {
    //   headerNav.classList.add("header__nav--white")
    //   headerNav.classList.remove("header__nav--black")
    // }
    // // add black
    // if (header.classList.contains("header--inversion")) {
    //   headerNav.classList.add("header__nav--black")
    //   headerNav.classList.remove("header__nav--white")
    // }
    //
    // window.addEventListener("resize", () => {
    //   // reset classes
    //   resetHeaderNavClassesBg()
    // })
    //
    // resetHeaderNavClassesBg()
    //
    // // sections
    window.addEventListener("scroll", () => {
      // const aboutUsTop = document.querySelector(".about-us").offsetTop
      // const services = document.querySelector(".services").offsetTop
      // const products = document.querySelector(".products").offsetTop
      // const blog = document.querySelector(".blog").offsetTop

      // const viewPortHeight = window.innerHeight
      const scrollTop = window.scrollY;
      console.log(scrollTop);
      console.log(header);

      // let currentPosition
      if (window.scrollY >= 1) {
        if (header.classList.contains("header--main-transparent")) {
          header.classList.add("header--main-white");
        }
        header.classList.add("header--main--min-padding");
      }
      if (window.scrollY === 0) {
        if (header.classList.contains("header--main-transparent")) {
          header.classList.remove("header--main-white");
        }
        header.classList.remove("header--main--min-padding");
      }
    });
  });
  //
  //   if (window.innerWidth > 1401) {
  //     currentPosition = scrollTop + 125
  //   }
  //   if (window.innerWidth > 680) {
  //     currentPosition = scrollTop + 98
  //   }
  //   if (window.innerWidth <= 680) {
  //     currentPosition = scrollTop + 50
  //   }
  //   // header nav
  //   if (scrollTop >= 1) {
  //     headerNav.classList.add("header__nav--top")
  //   }
  //   // add white
  //   if (!header.classList.contains("header--inversion")) {
  //     headerNav.classList.remove("header__nav--white")
  //     headerNav.classList.add("header__nav--black")
  //   }
  //   // add black
  //   if (header.classList.contains("header--inversion")) {
  //     headerNav.classList.remove("header__nav--black")
  //     headerNav.classList.add("header__nav--white")
  //   }
  //   // reset classes
  //   if (window.innerWidth >= 960) {
  //     resetHeaderNavClassesBg()
  //   }
  //
  //   if (currentPosition >= aboutUsTop) {
  //     // header
  //     header.classList.add("header--inversion")
  //     // header logo images
  //     headerLogoImageBlack.classList.add("header__logo-block-image--black--not-active")
  //     headerLogoImageWhite.classList.add("header__logo-block-image--white--active")
  //     // nav item
  //     navItemArray.forEach(navItem => {
  //       navItem.classList.add("header__nav-item--inversion")
  //     })
  //     // contact item
  //     contactsItemsArray.forEach(contactsItem => {
  //       contactsItem.classList.add("header__contacts-item-number--inversion")
  //     })
  //     // back call
  //     backCallsArray.forEach(backCall => {
  //       backCall.classList.add("header__contacts-item-back-call--inversion")
  //     })
  //     // burger spans
  //     burgerSpansArray.forEach(burgerSpan => {
  //       burgerSpan.classList.add("header__burger-span--inversion")
  //     })
  //     // contacts item social
  //     itemSocialsWhiteArray.forEach(itemSocialsWhiteItem => {
  //       itemSocialsWhiteItem.classList.add("header__contacts-item-image--white--not-active")
  //     })
  //     itemSocialsBlackArray.forEach(itemSocialsBlackItem => {
  //       itemSocialsBlackItem.classList.add("header__contacts-item-image--black--active")
  //     })
  //   }
  //   if (currentPosition < aboutUsTop) {
  //     // header
  //     header.classList.remove("header--inversion")
  //     // header logo images
  //     headerLogoImageBlack.classList.remove("header__logo-block-image--black--not-active")
  //     headerLogoImageWhite.classList.remove("header__logo-block-image--white--active")
  //     // nav item
  //     navItemArray.forEach(navItem => {
  //       navItem.classList.remove("header__nav-item--inversion")
  //     })
  //     // contact item
  //     contactsItemsArray.forEach(contactsItem => {
  //       contactsItem.classList.remove("header__contacts-item-number--inversion")
  //     })
  //     // back call
  //     backCallsArray.forEach(backCall => {
  //       backCall.classList.remove("header__contacts-item-back-call--inversion")
  //     })
  //     // burger spans
  //     burgerSpansArray.forEach(burgerSpan => {
  //       burgerSpan.classList.remove("header__burger-span--inversion")
  //     })
  //     // contacts item social
  //     itemSocialsWhiteArray.forEach(itemSocialsWhiteItem => {
  //       itemSocialsWhiteItem.classList.remove("header__contacts-item-image--white--not-active")
  //     })
  //     itemSocialsBlackArray.forEach(itemSocialsBlackItem => {
  //       itemSocialsBlackItem.classList.remove("header__contacts-item-image--black--active")
  //     })
  //   }
  //   // services
  //   if (currentPosition >= services) {
  //     // header
  //     header.classList.remove("header--inversion")
  //     // header logo images
  //     headerLogoImageBlack.classList.remove("header__logo-block-image--black--not-active")
  //     headerLogoImageWhite.classList.remove("header__logo-block-image--white--active")
  //     // nav item
  //     navItemArray.forEach(navItem => {
  //       navItem.classList.remove("header__nav-item--inversion")
  //     })
  //     // contact item
  //     contactsItemsArray.forEach(contactsItem => {
  //       contactsItem.classList.remove("header__contacts-item-number--inversion")
  //     })
  //     // back call
  //     backCallsArray.forEach(backCall => {
  //       backCall.classList.remove("header__contacts-item-back-call--inversion")
  //     })
  //     // burger spans
  //     burgerSpansArray.forEach(burgerSpan => {
  //       burgerSpan.classList.remove("header__burger-span--inversion")
  //     })
  //     // contacts item social
  //     itemSocialsWhiteArray.forEach(itemSocialsWhiteItem => {
  //       itemSocialsWhiteItem.classList.remove("header__contacts-item-image--white--not-active")
  //     })
  //     itemSocialsBlackArray.forEach(itemSocialsBlackItem => {
  //       itemSocialsBlackItem.classList.remove("header__contacts-item-image--black--active")
  //     })
  //   }
  //   // products
  //   if (currentPosition >= products) {
  // // header
  //     header.classList.add("header--inversion")
  //     // header logo images
  //     headerLogoImageBlack.classList.add("header__logo-block-image--black--not-active")
  //     headerLogoImageWhite.classList.add("header__logo-block-image--white--active")
  //     // nav item
  //     navItemArray.forEach(navItem => {
  //       navItem.classList.add("header__nav-item--inversion")
  //     })
  //     // contact item
  //     contactsItemsArray.forEach(contactsItem => {
  //       contactsItem.classList.add("header__contacts-item-number--inversion")
  //     })
  //     // back call
  //     backCallsArray.forEach(backCall => {
  //       backCall.classList.add("header__contacts-item-back-call--inversion")
  //     })
  //     // burger spans
  //     burgerSpansArray.forEach(burgerSpan => {
  //       burgerSpan.classList.add("header__burger-span--inversion")
  //     })
  //     // contacts item social
  //     itemSocialsWhiteArray.forEach(itemSocialsWhiteItem => {
  //       itemSocialsWhiteItem.classList.add("header__contacts-item-image--white--not-active")
  //     })
  //     itemSocialsBlackArray.forEach(itemSocialsBlackItem => {
  //       itemSocialsBlackItem.classList.add("header__contacts-item-image--black--active")
  //     })
  //   }
  //   // blog
  //   if (currentPosition >= blog) {
  //     // header
  //     header.classList.remove("header--inversion")
  //     // header logo images
  //     headerLogoImageBlack.classList.remove("header__logo-block-image--black--not-active")
  //     headerLogoImageWhite.classList.remove("header__logo-block-image--white--active")
  //     // nav item
  //     navItemArray.forEach(navItem => {
  //       navItem.classList.remove("header__nav-item--inversion")
  //     })
  //     // contact item
  //     contactsItemsArray.forEach(contactsItem => {
  //       contactsItem.classList.remove("header__contacts-item-number--inversion")
  //     })
  //     // back call
  //     backCallsArray.forEach(backCall => {
  //       backCall.classList.remove("header__contacts-item-back-call--inversion")
  //     })
  //     // burger spans
  //     burgerSpansArray.forEach(burgerSpan => {
  //       burgerSpan.classList.remove("header__burger-span--inversion")
  //     })
  //     // contacts item social
  //     itemSocialsWhiteArray.forEach(itemSocialsWhiteItem => {
  //       itemSocialsWhiteItem.classList.remove("header__contacts-item-image--white--not-active")
  //     })
  //     itemSocialsBlackArray.forEach(itemSocialsBlackItem => {
  //       itemSocialsBlackItem.classList.remove("header__contacts-item-image--black--active")
  //     })
  //   }
  // })

  // })
} catch (error) {}
