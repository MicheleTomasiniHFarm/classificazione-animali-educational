var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-terser'),
    rename = require('gulp-rename')

gulp.task('default', gulp.parallel(function(done) {
  console.log("task di default operativo") //riga di apprendimento
  gulp.watch('src/scss/*.scss', gulp.series(['css']));
  gulp.watch('src/js/*.js', gulp.series(['js']));
  
  done();
}));

gulp.task('css', function() {
  console.log("task css operativo") //riga di apprendimento
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('js', function() {
  console.log("task js operativo") //riga di apprendimento
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'))
});



