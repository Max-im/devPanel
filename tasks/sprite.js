'use strict';


const gulp 			= require('gulp');
const spritesmith 	= require('gulp.spritesmith');


module.exports = function(options){
	
	return function(){

		var spriteData = gulp.src(options.src)
		.pipe( spritesmith(
			{
				imgName: 'spriteImg.png',
				cssName: 'spriteStyle.scss',
				algorithm: 'binary-tree'
			})
		);
		spriteData.img.pipe(gulp.dest('src/_sprite')); // sprite dest
		spriteData.css.pipe(gulp.dest('src/_sprite')); // styles dest

	}
};

