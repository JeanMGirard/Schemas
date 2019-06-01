'use strict';

var gulp = require('gulp');
var sass = require('node-sass');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var zip = require('gulp-zip');
var rimraf = require('gulp-rimraf');
var webserver = require('gulp-webserver');

gulp.task('build', [], function() {

});
/*
gulp.task('clean', function() {
  return gulp.src('dist', {
      read: false
    })
    .pipe(rimraf());
});
*/
gulp.task('images', function() {
  return gulp.src('template/images/*')
    .pipe(gulp.dest('build/images'))
    .pipe(zip('images.zip'))
    .pipe(gulp.dest('build'));
});

gulp.task('webserver', ['build'], function() {
  return gulp.src('src')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html'
    }));
});

gulp.task('watch', ['webserver'], function() {
  return gulp.watch('src/**', ['build']);
});
