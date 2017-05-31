'use strict';


const gulp 	= require('gulp');
const cache = require('gulp-cache');


module.exports = function(options){
	
	return function(){
		return cache.clearAll();
	}
};

