try {
  window.addEventListener("load", function () {
    try {
      const splideMain = new Splide(".intro__splider--container", {
        perPage: 1,

        type: "loop",
        focus: "center",
        arrows: false,

        pagination: true,

        speed: 1000,

        interval: 6000,

        pauseOnHover: false,
        pauseOnFocus: false,

        breakpoints: {
          1000000: {
            direction: "ttb",
            paginationDirection: "ttb",
            height: 1000,
          },
          1070: {
            direction: "ltr",
            focus: "center",
          },
          854: {
            paginationDirection: "ltr",
          },
          620: {
            height: null,
            autoHeight: true,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}
