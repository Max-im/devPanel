const header 	= require('./header.es6.js');
// const main		= require('./main.es6.js');


// jQuery
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
// require('../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js');


// React
const React 	= require('react');
const ReactDOM 	= require('react-dom');


// FancyBox
const fancybox = require('fancybox');


// Mustache
const mustache = require('mustache');


// mixitup
const mixitup = require('mixitup');


// main(React, ReactDOM);

header(jQuery, fancybox, mustache, mixitup);