/**
 * scripts.js
 * //division-zero.org
 * @author Steven Krebs
 * @description Wrapper script to be the source for the bundled js
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

//declarations
declare var require: any, global: any, module: any, __dirname: any, jQuery: JQueryStatic;

//Global Plugins
global['$']         = global['jQuery'] = require('jquery');
var exports:any     = module['exports'] = {};
var angular:any     = require('angular');
var config:any      = require('./modules/config');

//Create angular app
exports['angularApp'] = angular['module'](config.angularConfig.global.appName, []);

// Require modules
require('bulk-require')(__dirname, ['modules/**/*.ts']);
