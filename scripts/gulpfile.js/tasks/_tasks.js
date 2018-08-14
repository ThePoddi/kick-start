// dependencies
const gulp        = require('gulp');
const runSequence = require('run-sequence');

/**
 * @task: gulp build
 * build task
 */
gulp.task('build', function(callback){
  runSequence('styles', ['scripts','vendors','images','fonts'], callback);
});

/**
 * @task: gulp
 * default task
 */
gulp.task('default', function(callback){
  runSequence('clean', 'build', ['watch','sync'], callback);
});
