// dependencies
const configJson    = require('config.json');
const gulp          = require('gulp');

// config
const config = configJson('./config/config.gulp.json');

/**
 * @task: gulp fonts
 * copy fonts
 */
gulp.task('fonts', function () {
  return gulp.src( config.paths.fonts.source )
    .pipe( gulp.dest( config.paths.fonts.dest ) );
});
