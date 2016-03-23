var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularSettings.appName());

app.directive('jumpUp',['jumpUpScene', function(jumpUpScene){
    return {
        restrict: 'A',
        link: function(scope, elem) {
            if(config.windowSizes.checkDesktop() && scope.loaded) {
                jumpUpScene.setAnimation(elem.find('article'), elem, scope.controller);
            }
        }
    }
}]);