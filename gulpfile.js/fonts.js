const { src, dest } = require('gulp');

const newer = require("gulp-newer")
const ttf2woff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');

exports.fonts = (done) => {
	src('source/fonts/**/*.ttf')
		.pipe(newer('source/fonts/**/*.ttf'))
		.pipe(ttf2woff2())
		.pipe(dest('./dist/assets/fonts'))
		.pipe(newer('source/fonts/**/*.ttf'))

	src('source/fonts/**/*.ttf')
		.pipe(newer('source/fonts/**/*.ttf'))
		.pipe(ttf2woff())
		.pipe(dest('./dist/assets/fonts'))
		.pipe(newer('source/fonts/**/*.ttf'))
	done();
}