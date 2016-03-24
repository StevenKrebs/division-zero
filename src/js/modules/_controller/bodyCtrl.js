var angular         =   require('angular'),
    config          =   require('../config.js'),
    app             =   angular.module(config.angularConfig.global.appName);

//angular modules
require('angular-animate');
app.requires.push('ngAnimate');

app.controller('bodyCtrl',['$scope','$timeout', function($scope, $timeout) {
    $timeout(function() {
        $scope.loaded = true;
    }, 1500);
    $scope.$on('$destroy', function() {
        $scope.loaded = false;
    })
}]);