/**
 * debug
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js config for debug information
 * @copyright 2016,
 * @license MIT
 */

var angular     = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

app.config(['$compileProvider', function ($compileProvider) {
    // change debug option
    $compileProvider.debugInfoEnabled(config.angularConfig.debug);
}]);