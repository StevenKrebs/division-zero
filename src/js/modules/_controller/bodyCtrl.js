var angular         =   require('angular'),
    config          =   require('../config.js'),
    app             =   angular.module('division_zero');

//angular modules
require('angular-animate');
app.requires.push('ngAnimate');

app.controller('bodyCtrl',['$scope','$timeout', 'scrollmagicController', function($scope, $timeout, scrollmagicController) {
    $timeout(function() {
        $('.svg').svgInject();
        $scope.controller = scrollmagicController.createController();
    }, 1500).then(function() {
        $scope.loaded = true;
    });
    $scope.$on('$destroy', function() {
        $scope.loaded = false;
    })
}]);