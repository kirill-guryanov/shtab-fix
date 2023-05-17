const { watch, series } = require("gulp");

const { pug } = require("./pug");
const { scss } = require("./sass/sass");

const { clear } = require("./del");
const { server } = require("./browsersync");
const { img } = require("./images");
const { fonts } = require("./fonts");

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
const { serviceDetailSecond } = require("./scripts/serviceDetailSecond");
const { serm } = require("./scripts/serm");
const { seo } = require("./scripts/seo");
const { modification } = require("./scripts/modification");
const { support } = require("./scripts/support");
const { studio } = require("./scripts/studio");
const { main } = require("./scripts/main");

exports.clear = clear;
exports.build = series(
  clear,
  pug,
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
  main,
  modification,
  serviceDetailSecond,
  support,
  studio,
  fonts,
  scss,
  img,
  server
);
exports.serve = series(
  clear,
  pug,
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
  main,
  modification,
  serviceDetailSecond,
  support,
  studio,
  fonts,
  scss,
  img,
  server
);
