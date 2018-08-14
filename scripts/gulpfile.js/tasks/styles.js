// dependencies
const configJson    = require('config.json');
const gulp          = require('gulp');
const autoprefixer  = require('gulp-autoprefixer');
const cleanCSS      = require('gulp-clean-css');
const plumber       = require('gulp-plumber');
const rename        = require('gulp-rename');
const stylus        = require('gulp-stylus');
const sourcemaps    = require('gulp-sourcemaps');
const noop          = require('gulp-noop');

// config
const config = configJson('./config/config.gulp.json');

// helper
function handleError(err) {
  console.log( err.name, ' in ', err.plugin, ': ', err.message );
  this.emit('end');
}

/**
 * @task: gulp styles
 * convert stylus to css, minify, create sourcemaps
 */
gulp.task('styles', function () {
  return gulp.src( config.paths.styles.source )
    .pipe( plumber() )
    .pipe( config.run[env].sourcemaps ? sourcemaps.init() : noop() )
    .pipe( stylus({ include: config.paths.styles.includePath } ).on('error', handleError) )
    .pipe( config.run[env].autoprefixer ? autoprefixer() : noop() )
    .pipe( rename({ suffix: ".min" }) )
    .pipe( config.run[env].cleancss ? cleanCSS() : noop() )
    .pipe( config.run[env].sourcemaps ? sourcemaps.write( config.paths.sourcemaps.write ) : noop() )
    .pipe( gulp.dest( config.paths.styles.dest ) )
    .pipe( browserSync.stream() );
});
