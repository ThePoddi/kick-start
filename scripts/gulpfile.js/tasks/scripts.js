// dependencies
const configJson    = require('config.json');
const gulp          = require('gulp');
const rename        = require('gulp-rename');
const uglify        = require('gulp-uglify');
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
 * @task: gulp scripts
 * convert stylus to css, minify, create sourcemaps
 */
gulp.task('scripts', function() {
  return gulp.src( config.paths.scripts.source )
    .pipe( config.run[env].sourcemaps ? sourcemaps.init() : noop() )
    .pipe( config.run[env].uglify ? uglify().on('error', handleError) : noop() )
    .pipe( rename({ suffix: ".min" }) )
    .pipe( config.run[env].sourcemaps ? sourcemaps.write( config.paths.sourcemaps.write ) : noop() )
    .pipe( gulp.dest( config.paths.scripts.dest ) )
    .pipe( browserSync.stream() );
});
