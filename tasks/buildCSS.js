'use strict';


const gulp 		= require('gulp');
const uncss     = require('gulp-uncss');


module.exports = function(options){
	
	return function(){
		
		return gulp.src(options.src)
		.pipe(uncss({
	        html: ['src/index.html']
	     }))
		.pipe(gulp.dest('dist/css'));

	}
};
