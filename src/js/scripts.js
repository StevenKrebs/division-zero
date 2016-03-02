/* Global Plugins */
window.$                = require('jquery'),
window.imagesLoaded     = require('imagesloaded'),
window.scrollmagic      = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
window.gsap             = require('gsap');
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

imagesLoaded.makeJQueryPlugin( $ );

/* Global variables */
window.tablet_resolution = 1024;
window.mobile_resolution = 768;


/* JS-Modules */
require('bulk-require')(__dirname, ['modules/*.js']);






