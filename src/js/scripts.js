/* Global Plugins */
window.$                = require('jquery'),
window.imagesLoaded     = require('imagesloaded'),
window.skrollr          = require('skrollr');

imagesLoaded.makeJQueryPlugin( $ );

/* Global variables */
window.tablet_resolution = 1024;
window.mobile_resolution = 768;


/* JS-Modules */
require('bulk-require')(__dirname, ['modules/*.js']);






