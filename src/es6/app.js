const header 		= require('./header.es6.js');
const devPanel 		= require('./devPanel.es6.js');
const dp_cours_jsx 	= require('./devPanel_carousel.jsx.js');
const dp_cours 		= require('./devPanel_carousel.es6.js');
// const main		= require('./main.es6.js');


// jQuery
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
require('../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js');


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

devPanel(jQuery);

dp_cours_jsx(React, ReactDOM, React.Component, jQuery);

dp_cours(jQuery);

