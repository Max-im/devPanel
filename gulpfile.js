'use strict';

const gulp          = require('gulp');
const browserSync   = require('browser-sync');



 function lazyRequireTask(taskName, path, options){
   options = options || {};
   options.taskName = taskName;
   gulp.task(taskName, function(callback){
     let task = require(path).call(this, options);
     return task(callback);
   })
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
// clean:svg
// -----------------------------------------------------------------------
lazyRequireTask('clean:svg', './tasks/clean:svg');




// -----------------------------------------------------------------------
// sprite:svg
// -----------------------------------------------------------------------
lazyRequireTask('sprite:svg', './tasks/sprite:svg', { src: 'assets/sprite:svg/**/*.svg' });




// -----------------------------------------------------------------------
// W A T C H
// -----------------------------------------------------------------------
gulp.task('watch', ['browser-sync',  'sprite:svg', 'sass', 'js' ], function() {
  gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/es6/**/*.js', ['js', browserSync.reload]);
  gulp.watch('assets/sprite:svg/**/*.svg', ['clean:svg', 'sprite:svg', 'sass', browserSync.reload]);
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
gulp.task('build', ['clean', 'img', 'buildHTML', 'buildCSS', 'buildJS',  'buildJSON', 'buildFONTS' ] );


// -----------------------------------------------------------------------
// buildHTML
// -----------------------------------------------------------------------
lazyRequireTask('buildHTML', './tasks/buildHTML', { src: 'src/*.html'});

// -----------------------------------------------------------------------
// buildCSS
// -----------------------------------------------------------------------
lazyRequireTask('buildCSS', './tasks/buildCSS', { src: 'src/css/**/*.*'});

// -----------------------------------------------------------------------
// buildJS
// -----------------------------------------------------------------------
lazyRequireTask('buildJS', './tasks/buildJS', { src: 'src/js/**/*.*'});


// -----------------------------------------------------------------------
// buildJSON
// -----------------------------------------------------------------------
lazyRequireTask('buildJSON', './tasks/buildJSON', { src: 'src/json/**/*.*'});


// -----------------------------------------------------------------------
// buildFONTS
// -----------------------------------------------------------------------
lazyRequireTask('buildFONTS', './tasks/buildFONTS', { src: 'src/fonts/**/*.*'});







//========================================================================

// D E F A U L T

// =======================================================================
gulp.task('default', ['watch']);