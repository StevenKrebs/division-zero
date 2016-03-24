var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('jumpUp',['jumpUpScene', 'scrollmagicController', function(jumpUpScene, scrollmagicController){
    return {
        restrict: 'A',
        scope: {
            jumpUp : '@',
            loaded : '&'
        },
        link: function(scope, elem) {
            if(config.windowSizes.check.desktop() && scope.loaded) {
                jumpUpScene.setAnimation($(elem).find(scope.jumpUp), elem, scrollmagicController.createController());
            }
        }
    }
}]);