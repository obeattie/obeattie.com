const cachebust = require('gulp-cache-bust'),
      concat = require('gulp-concat'),
      copy = require('gulp-copy'),
      cssmin = require('gulp-cssmin'),
      { src, dest, series, parallel } = require('gulp'),
      gulpless = require('gulp-less');

function css() {
    return src('./static/*.less')
        .pipe(gulpless({}))
        .pipe(concat('obeattie.css'))
        .pipe(cssmin())
        .pipe(dest('./static'));
}
exports.css = css;

function distIndex() {
    return src('./index.html')
        .pipe(cachebust())
        .pipe(dest('./dist'));
}

function distStatic() {
    return src(['./static/*', '!./static/*.less'])
        .pipe(copy('./static'))
        .pipe(dest('./dist'));
}

exports.dist = series(css, parallel(distIndex, distStatic));

exports.default = function() {
    gulp.watch('./static/*.less', css);
}