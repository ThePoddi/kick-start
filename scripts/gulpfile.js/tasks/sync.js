// dependencies
const configJson  = require('config.json');
const gulp        = require('gulp');

// config
const config = configJson('./config/config.gulp.json');
const browserSyncConfig = configJson('./config/config.browsersync.json');

global.browserSync  = require('browser-sync');

/**
 * @task: gulp sync
 * browser sync
 */
gulp.task('sync', function() {
  if ( browserSyncConfig ) {
    browserSync( browserSyncConfig );
    gulp.watch( config.paths.watch.livereload, browserSync.reload );
  } else {
    console.log( 'There is no config.browsersync.json.' );
  }
});
