var gulp = require('gulp');
var config = require('../config').pens;

gulp.task('pens', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
