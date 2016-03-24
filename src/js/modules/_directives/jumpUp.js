var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('jumpUp',['jumpUpScene', 'scrollmagicController', 'checkWindowSize', function(jumpUpScene, scrollmagicController, checkWindowSize){
    return {
        restrict: 'A',
        scope: {
            jumpUp : '@',
            loaded : '&'
        },
        link: function(scope, elem) {
            if(checkWindowSize.getDesktop() && scope.loaded) {
                jumpUpScene.setAnimation($(elem).find(scope.jumpUp), elem, scrollmagicController.createController());
            }
        }
    }
}]);