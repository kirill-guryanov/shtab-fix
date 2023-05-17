try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-index", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",
        // autoWidth: true,
        perPage: 4,
        gap: 16,

        breakpoints: {
          1460: {
            gap: 16,
            perPage: 4,
            // gap: 50,
          },
          1350: {
            // gap: 20,
          },
          1200: {
            perPage: 4,
            // gap: 20,
          },
          1180: {
            perPage: 3,
            // gap: 60,
          },
          1060: {
            perPage: 2,
            gap: 30,
          },
          920: {
            perPage: 2,
            // gap: 160,
          },
          840: {
            // perPage: 2,
            // gap: 100,
          },
          765: {
            // perPage: 2,
            // gap: 30,
          },
          675: {
            perPage: 1,
            // gap: 30,
          },
          450: {
            perPage: 1,
            // gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}
