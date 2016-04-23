const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*.js').on('change', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
