/* Global Plugins */
var $ = jQuery = require('jquery-browserify'),
    angular     = require('angular'),
    exports     = module.exports        = {};

//Plugins
require('angular-route');

exports.division_zero = angular.module("division_zero", []);

/* JS-Modules */
require('bulk-require')(__dirname, ['modules/*.js']);






