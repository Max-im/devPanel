'use strict';


const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const sourcemaps	= require('gulp-sourcemaps');
const notify		= require('gulp-notify');
const browserify	= require('browserify');
const source		= require('vinyl-source-stream');
const babelify		= require('babelify');
const streamify		= require('gulp-streamify');
const uglify 		= require('gulp-uglifyjs');


module.exports = function(options){
	
	return function(){

		 return browserify(options.src)
       	.transform("babelify", {
    		presets: ["es2015", "react"],
    		sourceMaps: true
    	})
    	.bundle()
        .on('error', notify.onError(function(err){
	    	return{
		    	title: 'JavaScript',
		    	message: err.message
	    	}
	    }))
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./src/js/'));	

	}
};
