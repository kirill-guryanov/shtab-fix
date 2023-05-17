const { src, dest } = require("gulp");
const map = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const webpackStream = require("webpack-stream");
const { default: uglify } = require("gulp-uglify-es");
const concat = require("gulp-concat");

exports.blog = () => {
  return (
    src("./source/js/indexes/index--blog.js", { sourcemaps: true })
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
      .pipe(concat("index--blog.js"))
      .pipe(map.write())
      .pipe(dest("./dist/assets/js"))
  );
};
