const { src, dest } = require("gulp");
const map = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const webpackStream = require("webpack-stream");
const { default: uglify } = require("gulp-uglify-es");
const concat = require("gulp-concat");

exports.modification = () => {
  return (
    src("./source/js/indexes/modificationIndex.js", {
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
      .pipe(concat("modificationIndex.js"))
      .pipe(map.write())
      .pipe(dest("./dist/assets/js"))
  );
};
