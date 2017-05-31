'use strict';

const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const uglify        = require('gulp-uglifyjs');
const htmlMin       = require('gulp-htmlmin');
const uncss         = require('gulp-uncss');



 function lazyRequireTask(taskName, path, options){
   options = options || {};
   options.taskName = taskName;
   gulp.task(taskName, function(callback){
     let task = require(path).call(this, options);
     return task(callback);
   })
 }


function myBuild() {

  // FONTS
  const buildFonts = gulp.src('src/fonts/**/*') 
  .pipe(gulp.dest('dist/fonts'))

  // CSS
  const buildCss = gulp.src([ 'src/css/**/*.css'])
  .pipe(uncss({
    html: ['src/index.html']
  }))
  .pipe(gulp.dest('dist/css'))

  // JavaScript
  const buildJs = gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('dist/js'))

  // HTML
  const buildHtml = gulp.src('src/*.html')
  .pipe(htmlMin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));

  // JSON
  const buildJSON = gulp.src('src/json/**/*.json')
  .pipe(uglify())
  .pipe(gulp.dest('dist/json'));

}


// -----------------------------------------------------------------------
// browser-sync
// -----------------------------------------------------------------------
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
});




// -----------------------------------------------------------------------
// sass
// -----------------------------------------------------------------------
lazyRequireTask('sass', './tasks/sass', { src: 'src/sass/media.scss' });




// -----------------------------------------------------------------------
// js
// -----------------------------------------------------------------------
lazyRequireTask('js', './tasks/js', { src: './src/es6/app.js' });




// -----------------------------------------------------------------------
// spritesmith
// -----------------------------------------------------------------------
lazyRequireTask('sprite:png', './tasks/sprite', { src: 'src/img/_sprite/*.png' });




// -----------------------------------------------------------------------
// sprite:svg
// -----------------------------------------------------------------------
lazyRequireTask('sprite:svg', './tasks/sprite:svg', { src: 'assets/sprite:svg/**/*.svg' });




// -----------------------------------------------------------------------
// W A T C H
// -----------------------------------------------------------------------
gulp.task('watch', ['browser-sync', 'sprite:svg', 'sass', 'js' ], function() {
  gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/es6/**/*.js', ['js', browserSync.reload]);
  gulp.watch('assets/sprite:svg/**/*.svg', ['sprite:svg', 'sass', browserSync.reload]);
});









//========================================================================

// - P-R-O-D-U-C-T-I-O-N -

//========================================================================


// -----------------------------------------------------------------------
// clean
// -----------------------------------------------------------------------
lazyRequireTask('clean', './tasks/clean' );




// -----------------------------------------------------------------------
// img optimisation
// -----------------------------------------------------------------------
lazyRequireTask('img', './tasks/img', { src: 'src/img/**/*.*' });




// -----------------------------------------------------------------------
// clear cache
// -----------------------------------------------------------------------
lazyRequireTask('clear', './tasks/clear');




// B U I L D
// =======================================================================
lazyRequireTask('clear', './tasks/clear');



gulp.task('build', ['clean', 'img', 'sass' ,'js'], myBuild);
// gulp.task('build',  );



//========================================================================

// D E F A U L T

// =======================================================================
gulp.task('default', ['watch']);