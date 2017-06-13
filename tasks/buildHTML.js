'use strict';


const gulp 		= require('gulp');
const htmlMin   = require('gulp-htmlmin');


module.exports = function(options){
	
	return function(){
		
		return gulp.src(options.src)
		.pipe(htmlMin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));

	}
};
