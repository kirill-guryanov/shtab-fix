const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const { pug } = require("./pug");

const { scss } = require("./sass/sass");

const { img } = require("./images");

const { script } = require("./scripts/index");
const { s404 } = require("./scripts/s404");
const { blog } = require("./scripts/blog");
const { contacts } = require("./scripts/contacts");
const { blogOncePage } = require("./scripts/blogOncePage");
const { brief } = require("./scripts/brief");
const { projects } = require("./scripts/projects");
const { services } = require("./scripts/services");
const { serviceDetail } = require("./scripts/serviceDetail");
const { productsOncePage } = require("./scripts/productsOncePage");
const { attraction } = require("./scripts/attraction");
const { sitesDevelopment } = require("./scripts/sitesDevelopment");
const { serm } = require("./scripts/serm");
const { seo } = require("./scripts/seo");
const { serviceDetailSecond } = require("./scripts/serviceDetailSecond");
const { modification } = require("./scripts/modification");
const { support } = require("./scripts/support");
const { studio } = require("./scripts/studio");
const { main } = require("./scripts/main");

exports.server = () => {
  browserSync.init({
    server: "./dist",
  });

  watch("./source/**/*.pug", series(pug)).on("change", browserSync.reload);
  watch("./source/sass/**/*.sass", series(scss)).on(
    "change",
    browserSync.reload
  );
  watch("./source/images/**/*.{jpg,png,webp,svg}", parallel(img)).on(
    "change",
    browserSync.reload
  );
  watch(
    "./source/js/**/*.js",
    parallel(
      script,
      s404,
      blog,
      contacts,
      blogOncePage,
      brief,
      projects,
      services,
      productsOncePage,
      serviceDetail,
      attraction,
      sitesDevelopment,
      serm,
      seo,
      serviceDetailSecond,
      modification,
      support,
      studio,
      main
    )
  ).on("change", browserSync.reload);
};
