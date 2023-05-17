try {
  window.addEventListener("load", function () {
    try {
      const splide = new Splide(".intro__related-publications-slider", {
        arrows: true,
        perMove: 1,
        // perPage: 4,
        // gap: 10,
        pagination: false,
        arrowPath:
          "M26.7071 7.29289C27.0976 7.68342 27.0976 8.31658 26.7071 8.70711L20.3431 15.0711C19.9526 15.4616 19.3195 15.4616 18.9289 15.0711C18.5384 14.6805 18.5384 14.0474 18.9289 13.6569L24.5858 8L18.9289 2.34315C18.5384 1.95262 18.5384 1.31946 18.9289 0.928932C19.3195 0.538407 19.9526 0.538407 20.3431 0.928932L26.7071 7.29289ZM1 9C0.447716 9 -4.82823e-08 8.55228 0 8C4.82823e-08 7.44771 0.447716 7 1 7L1 9ZM26 9L1 9L1 7L26 7L26 9Z",
        focus: "center",

        breakpoints: {
          5000: {
            perPage: 4,
            gap: 90,
          },
          1440: {
            perPage: 4,
            gap: 15,
          },
          1090: {
            perPage: 3,
            gap: 15,
          },
          980: {
            perPage: 2,
            gap: 15,
          },
          555: {
            fixedWidth: "320px",
            perPage: 1,
            focus: "center",
            gap: 15,
          },
          380: {
            fixedWidth: null,
            perPage: 1,
            gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}
