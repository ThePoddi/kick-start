// dependencies
const configJson  = require('config.json');
const gulp        = require('gulp');
const imagemin    = require('gulp-imagemin');
const webp        = require('gulp-webp');

// config
const config = configJson('./config/config.gulp.json');

/**
 * @task: gulp images:optimize
 * minify and optimize images
 */
gulp.task('images:optimize', function() {
  return gulp.src( config.paths.images.source )
    .pipe( imagemin([
      imagemin.gifsicle( { interlaced: true } ),
      imagemin.jpegtran( { progressive: true } ),
      imagemin.optipng( { optimizationLevel: 5 } ),
      imagemin.svgo( { plugins: [ {removeViewBox: true}, {cleanupIDs: false} ] } )
    ]) )
    .pipe( gulp.dest( config.paths.images.dest ) );
});

/**
 * @task: gulp images:webp
 * convert images to webp
 */
gulp.task('images:webp', function () {
  return gulp.src( config.paths.images.source )
    .pipe( webp() )
    .pipe( gulp.dest( config.paths.images.dest ) );
});

/**
 * @task: gulp images
 * run all images tasks
 */
gulp.task('images', ['images:optimize','images:webp']);
