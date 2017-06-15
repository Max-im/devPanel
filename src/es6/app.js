const header 		= require('./header.es6.js');


// jQuery
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
require('../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js');

// react-bootstrap
import { Button } from 'react-bootstrap';
 

// React
const React 	= require('react');
const ReactDOM 	= require('react-dom');


// FancyBox
const fancybox = require('../../node_modules/fancybox/dist/js/jquery.fancybox.js');
// require('jquery-fancybox.js')


// Mustache
const mustache = require('mustache');


// mixitup
const mixitup = require('mixitup');


// main(React, ReactDOM, React.Component);

header(jQuery, mustache, mixitup);



