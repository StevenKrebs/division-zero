var angular     =   require('angular'),
    app         =   angular.module('division_zero'),
    config      =   require('../config.js');

app.directive('parallax',['parallaxScene', function(parallaxScene){
    return {
        restrict: 'A',
        link: function($scope, $elem) {
            if(config.windowSizes.checkDesktop() && $scope.loaded) {
                parallaxScene.setAnimation($elem, $elem, $scope.controller);
            }
        }
    }
}]);