try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-serviceDetail", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",

        breakpoints: {
          5000: {
            perPage: 4,
            gap: 16,
          },
          1460: {
            perPage: 4,
            gap: 50,
          },
          1350: {
            gap: 20,
          },
          1200: {
            perPage: 4,
            gap: 20,
          },
          1180: {
            perPage: 3,
            gap: 60,
            // gap: 200
          },
          1060: {
            // perPage: 2,
            gap: 20,
          },
          920: {
            perPage: 2,
            gap: 160,
          },
          840: {
            // perPage: 2,
            gap: 100,
          },
          765: {
            // perPage: 2,
            gap: 30,
          },
          675: {
            perPage: 1,
            gap: 30,
          },
          450: {
            perPage: 1,
            gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}
