var angular     =   require('angular'),
    app         =   angular.module('division_zero'),
    config      =   require('../_configs/config.js');

app.directive('jumpUp',['jumpUpScene', function(jumpUpScene){
    return {
        restrict: 'A',
        link: function($scope, $elem) {
            if(config.windowSizes.checkDesktop() && $scope.loaded) {
                jumpUpScene.setAnimation($elem.find('article'), $elem, $scope.controller, true);
            }
        }
    }
}]);