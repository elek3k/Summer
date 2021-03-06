const {src, dest, watch, series} = require('gulp');   
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');


// Static server
function bs() {
  // [serveSass(), build()];
  serveSass(),
  
  browserSync.init({
      proxy: 'summer.loc',
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./*.php").on('change', browserSync.reload);

};

function serveSass(done) {
  return src('./sass/**/*.sass', './sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('./css/'))
  .pipe(browserSync.stream())
  done();
};

function buildCSS(done) {
  src('css/**/**.css')
    .pipe(dest('../../dist/clubSchelkovo/css/'));
  done();
}

function buildjs(done) {
  src(['js/**.js',])
    .pipe(minify({
      ext:{
        min:'.js'
    },
      ignoreFiles: ['*.min.js'],
      noSource: true
    }))
    .pipe(dest('../../dist/clubSchelkovo/js/'))
  done();
}

function buildHTML(done) {
  src(['**.html', '!thanks.html'])
    .pipe(htmlmin({ collapseWhitespace: true} ))
    .pipe(dest('../../dist/clubSchelkovo/'));
  done();
}

function php(done) {
  src('**.php')
    .pipe(dest('../../dist/clubSchelkovo/'));
  src('phpmailer/**.php')
  .pipe(dest('../../dist/clubSchelkovo/phpmailer'));
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('../../dist/clubSchelkovo/fonts'));
  done();
}

function img(done) {
  src('img/**/**')
    .pipe(dest('../../dist/clubSchelkovo/img'));
  done();
}

exports.build = series(buildCSS, buildjs, buildHTML, php, fonts, img);
exports.default = bs