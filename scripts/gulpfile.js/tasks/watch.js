// dependencies
const configJson  = require('config.json');
const gulp        = require('gulp');

// config
const config = configJson('./config/config.gulp.json');

/**
 * @task: gulp watch
 * watch task
 */
gulp.task('watch', function(){
  // watch styles
  gulp.watch( config.paths.watch.styles, function() {
    gulp.start('styles');
  } );

  // watch images
  gulp.watch( config.paths.watch.images, function() {
    gulp.start('images');
  } );
});
