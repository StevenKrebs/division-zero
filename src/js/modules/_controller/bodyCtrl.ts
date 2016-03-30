/**
 * bodyCtrl
 * @author Steven Krebs
 * @description angular.js bodyController to set a html-body focused scope
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any     =   require('angular'),
    config          =   require('../config'),
    app             =   angular.module(config.angularConfig.global.appName);

//angular modules
require('angular-animate');
app.requires.push('ngAnimate');

app.controller('bodyCtrl',['$scope', '$timeout', function($scope:any, $timeout:any) {
    $scope.$on('$destroy', function() {
        $scope.loaded = false;
    });
    $scope.$on('$includeContentLoaded', function() {
        $timeout(function() {
            $scope.loaded = true;
        }, config.timing.regular);
    })
}]);