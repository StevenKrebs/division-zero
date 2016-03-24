var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('parallax',['parallaxScene', 'scrollmagicController', function(parallaxScene, scrollmagicController){
    return {
        restrict: 'A',
        link: function(scope, elem) {
            if(config.windowSizes.check.desktop() && scope.loaded) {
                parallaxScene.setAnimation(elem, elem, scrollmagicController.createController());
            }
        }
    }
}]);