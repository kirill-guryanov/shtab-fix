try {
  window.addEventListener("load", function () {
    try {
      const splideItem1 = new Splide(".intro__splide-string1", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem1.mount(window.splide.Extensions);
    } catch (error) {}

    try {
      const splideItem2 = new Splide(".intro__splide-string2", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem2.mount(window.splide.Extensions);
    } catch (error) {}

    try {
      const splideItem3 = new Splide(".intro__splide-string3", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem3.mount(window.splide.Extensions);
    } catch (error) {}
  });
} catch (error) {}
