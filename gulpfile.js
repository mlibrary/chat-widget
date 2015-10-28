'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('chat_widget.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
});

gulp.task('default', ['sass']);
