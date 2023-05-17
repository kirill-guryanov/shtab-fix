const { src, dest } = require("gulp");

const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

exports.img = () => {
  return (
    src("./source/images/**/*.{jpg,png,webp,svg,mp4}")
      .pipe(newer("./source/images/**/*.{jpg,png,webp,svg}"))
      .pipe(webp())
      .pipe(dest("./dist/assets/images/"))
      .pipe(src("./source/images/**/*.{jpg,png,webp,svg}"))
      // .pipe(newer("./source/images/**/*.{jpg,png,webp,svg}"))
      // .pipe(imagemin({
      // 	progressive: true,
      // 	interlaced: true
      // 	optimizationLevel: 3,
      // 	svgoPlugins: [{ removeViewBox: false }]
      // }))
      .pipe(dest("./dist/assets/images/"))
  );
};
