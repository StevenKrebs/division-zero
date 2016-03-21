var angular     =   require('angular'),
    config      =   require('../_configs/config.js'),
    app         =   angular.module('division_zero');

//angular modules
require('angular-animate');
app.requires.push('ngAnimate');

app.controller('bodyCtrl',['$scope','$timeout', 'scrollmagicController', function($scope, $timeout, scrollmagicController){
    $timeout(function() {
        $scope.loaded = true;
        $('.svg').svgInject();
    }, 3000).then(function() {
        $scope.controller = scrollmagicController.createController();
    });
    $scope.$on('$destroy', function() {
        $scope.loaded = false;
    })
}]);