/**
 * scripts-wrapper
 * @author Steven Krebs
 * @description Wrapper script to be the source for the bundled js
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

//declarations
interface Window {
    $:JQueryStatic;
    jQuery:JQueryStatic;
}

//Global Plugins
window.$            = window.jQuery = require('jquery');
var angular         = require('angular');
var config          = require('./modules/config');

//Create angular app
angular['module'](config.angularConfig.global.appName, []);

// Require modules
require('bulk-require')(__dirname, ['modules/**/*.ts']);
