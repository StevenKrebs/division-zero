/**
 * debug
 * @author Steven Krebs
 * @description angular.js config for debug information
 * @copyright 2016,
 * @license MIT
 */
declare var require: any;

var angular:any = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

app.config(['$compileProvider', function ($compileProvider:any) {
    // change debug option
    $compileProvider.debugInfoEnabled(config.angularConfig.debug);
}]);