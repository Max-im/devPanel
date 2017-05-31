'use strict';


const gulp 			= require('gulp');
const svgSprite     = require('gulp-svg-sprite');
const svgmin     	= require('gulp-svgmin');
const cheerio     	= require('gulp-cheerio');
const replace 		= require('gulp-replace');
const gulpIf 		= require('gulp-if');
const debug 		= require('gulp-debug');



module.exports = function(options){
	
	return function(){

		return gulp.src(options.src)
		.pipe(svgmin())
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				css: {

					dest: '.',
					sprite: '../img/svg/sprite.svg',
					layout: 'vertical',
					prefix: '.svg__',
					dimensions: true,

					render: {
						scss: {
							dest: "_sprite.scss"
						}
					}
				}
			}
		}))
		.pipe(debug({ title: 'sprite:svg' }))
		.pipe( gulpIf( '*.scss', gulp.dest( 'src/sass/' ), gulp.dest( './src/img/' ) ) )
	}
};