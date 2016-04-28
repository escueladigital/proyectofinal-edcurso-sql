const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      jade         = require('gulp-jade'),
      autoprefixer = require('gulp-autoprefixer'),
      broswerSync  = require('browser-sync').create(),
      watch        = require('gulp-watch');

gulp.task('sass', () =>
  gulp.src('./sass/estilos.scss')
    .pipe(watch('sass/**/*.scss'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(broswerSync.stream())
);

gulp.task('jade', () =>
  gulp.src('./jade/*.jade')
      .pipe(watch('./jade/**/*.jade'))
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./'))
      .on('end', broswerSync.reload)
);

gulp.task('default', () => {
  broswerSync.init({
    server: './'
  });
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./jade/**/*.jade', ['jade']);
  gulp.watch('./efectos.js').on('change', broswerSync.reload);
});