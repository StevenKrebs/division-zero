var angular     =   require('angular'),
config      =   require('../config.js'),
    app         =   angular.module(config.angularSettings.appName());

app.directive('parallax',['parallaxScene', function(parallaxScene){
    return {
        restrict: 'A',
        link: function(scope, elem) {
            if(config.windowSizes.checkDesktop() && scope.loaded) {
                parallaxScene.setAnimation(elem, elem, scope.controller);
            }
        }
    }
}]);