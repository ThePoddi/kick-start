// dependencies
const configJson  = require('config.json');
const gulp        = require('gulp');
const del         = require('del');

// config
const config = configJson('./config/config.gulp.json');

/**
 * @task: gulp clean:styles
 * clean and remove css directory
 */
gulp.task('clean:styles', function () {
  return del( config.paths.styles.dest, { force: true } );
});

/**
 * @task: gulp clean:scripts
 * clean and remove img directory
 */
gulp.task('clean:scripts', function () {
  return del( config.paths.scripts.dest, { force: true } );
});

/**
 * @task: gulp clean:sourcemaps
 * clean and remove maps directory
 */
gulp.task('clean:sourcemaps', function () {
  return del( config.paths.sourcemaps.dest, { force: true } );
});

/**
 * @task: gulp clean:images
 * clean and remove img directory
 */
gulp.task('clean:images', function () {
  return del( config.paths.images.dest, { force: true } );
});

/**
 * @task: gulp clean:fonts
 * clean and remove fonts directory
 */
gulp.task('clean:fonts', function () {
  return del( config.paths.fonts.dest, { force: true } );
});

/**
 * @task: gulp clean
 * run all clean tasks
 */
gulp.task('clean', ['clean:styles','clean:scripts','clean:sourcemaps','clean:images','clean:fonts']);
