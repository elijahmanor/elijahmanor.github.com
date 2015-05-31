var gulp = require('gulp');
var config = require('../config').markdown;

gulp.task('markdown', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
