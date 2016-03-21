//Global Plugins
    global.$    = global.jQuery = require('jquery');
var angular     = require('angular'),
    exports     = module.exports        = {};

//Plugins
require('angular-route');

exports.division_zero = angular.module("division_zero", []);

/* JS-Modules */
require('bulk-require')(__dirname, ['modules/**/*.js']);






