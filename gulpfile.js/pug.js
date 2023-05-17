const { src, dest } = require("gulp");
const pug = require("gulp-pug");

exports.pug = () => {
  return src([
    "./source/pug/layouts/index/index.pug",
    "./source/pug/layouts/404/404.pug",
    "./source/pug/layouts/blog/blog.pug",
    "./source/pug/layouts/contacts/contacts.pug",
    "./source/pug/layouts/blog-once-page/blog-once-page.pug",
    "./source/pug/layouts/brief/brief.pug",
    "./source/pug/layouts/projects/projects.pug",
    "./source/pug/layouts/services/services.pug",
    "./source/pug/layouts/productsOncePage/productsOncePage.pug",
    "./source/pug/layouts/serviceDetail/serviceDetail.pug",
    "./source/pug/layouts/attraction/attraction.pug",
    "./source/pug/layouts/sitesDevelopment/sitesDevelopment.pug",
    "./source/pug/layouts/serm/serm.pug",
    "./source/pug/layouts/seo/seo.pug",
    "./source/pug/layouts/serviceDetailSecond/serviceDetailSecond.pug",
    "./source/pug/layouts/serviceDetailSecond-2/serviceDetailSecond-2.pug",
    "./source/pug/layouts/serviceDetailSecond-3/serviceDetailSecond-3.pug",
    "./source/pug/layouts/modification/modification.pug",
    "./source/pug/layouts/support/support.pug",
    "./source/pug/layouts/studio/studio.pug",
  ])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./dist"));
};
