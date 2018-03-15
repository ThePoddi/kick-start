// Config
const config = require('config.json')('./config/config.gulp.json');

// dependencies
const gulp          = require('gulp');
const stylus        = require('gulp-stylus');
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const cleanCSS      = require('gulp-clean-css');
const notify        = require('gulp-notify');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const imagemin      = require('gulp-imagemin');
const browserSync   = require('browser-sync').create();

// gulp build task
gulp.task('build', ['styl', 'js', 'fonts', 'img']);

// gulp stylus task
gulp.task('styl', function() {
  return gulp.src( config.paths.styles.styl.files )
    .pipe( sourcemaps.init() )
      .pipe( stylus({
        include: config.paths.styles.styl.includePath
      }).on('error', notify.onError("Error: <%= error.message %>") ) )
      .pipe( autoprefixer() )
      .pipe( cleanCSS() )
    .pipe( sourcemaps.write('../maps') )
    .pipe( gulp.dest( config.paths.styles.styl.dist ) )
    .pipe( notify({ title: 'STYLUS', message: 'CSS compiled' }) )
    .pipe( browserSync.stream() );
});

// gulp js task
gulp.task('js', function() {
  return gulp.src( config.paths.scripts.js.files )
    .pipe( sourcemaps.init() )
      .pipe( uglify() )
      .on('error', notify.onError("Error: <%= error.message %>") )
    .pipe( sourcemaps.write('../maps') )
    .pipe( gulp.dest( config.paths.scripts.js.dist ) )
    .pipe( notify({ title: 'JS', message: 'JS compiled' }) )
    .pipe( browserSync.stream() );
});

// gulp fonts task
gulp.task('fonts', function(){
  return gulp.src( config.paths.assets.fonts.files )
    .pipe( gulp.dest( config.paths.assets.fonts.dist ) )
    .pipe( notify({ title: 'Fonts', message: 'Font copied' }) );
});

// gulp img task
gulp.task('img', function() {
  return gulp.src( config.paths.assets.img.files )
    .pipe( imagemin() )
    .pipe( gulp.dest( config.paths.assets.img.dist ) )
    .pipe( notify({ title: 'IMG', message: 'Image minified' }) );
});



// gulp default watch task
gulp.task( 'default', ['styl', 'js', 'img', 'fonts'], function(){
	return gulp.watch( config.paths.watch, ['styl', 'js', 'img', 'fonts'] );
})

// gulp browser sync task
gulp.task('sync', ['styl', 'js', 'img', 'fonts'], function() {
  if ( config.options.browsersync.host ) {
    browserSync.init( config.options.browsersync );
  }
  gulp.watch( config.paths.watch, ['sync-build'] );
});

// gulp browser reload handler
gulp.task('sync-build', ['styl', 'js', 'img', 'fonts'], function(done){
  browserSync.reload();
  done();
});
