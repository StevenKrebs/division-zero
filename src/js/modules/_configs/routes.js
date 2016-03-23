var angular     = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularSettings.appName());

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
