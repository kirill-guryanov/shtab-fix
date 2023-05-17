const { src, dest } = require("gulp");
const map = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const webpackStream = require("webpack-stream");
const { default: uglify } = require("gulp-uglify-es");
const concat = require("gulp-concat");

exports.attraction = () => {
  return (
    src("./source/js/indexes/attractionIndex.js", {
      sourcemaps: true,
    })
      .pipe(map.init())
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(
        webpackStream({
          optimization: {
            minimize: false,
          },
        })
      )
      // .pipe(uglify())
      .pipe(concat("attractionIndex.js"))
      .pipe(map.write())
      .pipe(dest("./dist/assets/js"))
  );
};
