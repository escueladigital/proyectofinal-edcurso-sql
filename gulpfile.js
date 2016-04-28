const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      jade         = require('gulp-jade'),
      autoprefixer = require('gulp-autoprefixer'),
      sync         = require('browser-sync').create();

gulp.task('sass', () =>
  gulp.src('./sass/estilos.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(sync.stream())
);

gulp.task('jade', () =>
  gulp.src('./jade/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./'))
      .on('end', sync.reload)
);

gulp.task('default', () => {
  sync.init({
    server: './'
  });
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./jade/**/*.jade', ['jade']);
});