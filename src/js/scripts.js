/* Global Plugins */
window.$ = window.jQuery = require('jquery');

/* Global variables */
window.tablet_resolution = 1024;
window.mobile_resolution = 768;


/* JS-Modules */
require('bulk-require')(__dirname, ['modules/*.js']);






