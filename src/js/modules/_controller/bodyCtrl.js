var angular         =   require('angular'),
    config          =   require('../config.js'),
    app             =   angular.module(config.angularConfig.global.appName);

//angular modules
require('angular-animate');
app.requires.push('ngAnimate');

app.controller('bodyCtrl',['$scope', '$timeout', function($scope, $timeout) {
    $scope.$on('$destroy', function() {
            $scope.loaded = false;
    });
    $scope.$on('$includeContentLoaded', function() {
        $timeout(function() {
            $scope.loaded = true;
        }, config.timing.regular);
    })
}]);