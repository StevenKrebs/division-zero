/**
 * scripts.js
 * //division-zero.org
 * @author Steven Krebs
 * @description Wrapper script to be the source for the bundled js 
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

//Global Plugins
global.$    = global.jQuery = require('jquery');
var angular     = require('angular'),
    exports     = module.exports        = {},
    config      = require('./modules/config');

exports.angularApp = angular.module(config.angularConfig.global.appName, []);

/* JS-Modules */
require('bulk-require')(__dirname, ['modules/**/*.js']);