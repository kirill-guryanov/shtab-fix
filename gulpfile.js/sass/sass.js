const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const clean = require("gulp-clean-css");

exports.scss = function () {
  return (
    src("./source/sass/indexes/**.sass")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      // .pipe(
      //   clean({
      //     level: 2,
      //   })
      // )
      // .pipe(concat("style.css"))
      .pipe(sourcemaps.write())
      .pipe(dest("./dist/assets/css"))
  );
};
