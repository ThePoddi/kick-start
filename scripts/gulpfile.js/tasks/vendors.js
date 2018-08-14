// dependencies
const configJson    = require('config.json');
const gulp          = require('gulp');
const concat        = require('gulp-concat');

// config
const config = configJson('./config/config.gulp.json');
const vendors = configJson('./config/config.vendors.json');

/**
 * @task: gulp vendors:styles
 * concat vendor styles
 */
gulp.task('vendors:styles', function () {
  return gulp.src( vendors.styles )
    .pipe( concat('vendors.css') )
    .pipe( gulp.dest( config.paths.styles.dest ) );
});

/**
 * @task: gulp vendors:scripts
 * concat vendor scripts
 */
gulp.task('vendors:scripts', function () {
  return gulp.src( vendors.scripts )
    .pipe( concat('vendors.js') )
    .pipe( gulp.dest( config.paths.scripts.dest ) );
});

/**
 * @task: gulp vendors
 * run all vendors tasks
 */
gulp.task('vendors', ['vendors:styles','vendors:scripts']);
