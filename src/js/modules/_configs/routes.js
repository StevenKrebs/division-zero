/**
 * routes
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js routing configuration
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular     = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

//Plugins
require('angular-route');
app.requires.push('ngRoute');

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when("", {
        templateUrl: "index.html"
    }).otherwise({
        redirectTo: ""
    });
    $locationProvider.html5Mode(true);
}]);