/**
 * jumpUp
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js directive for jump-up animation
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any =   require('angular'),
    config      =   require('../config'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('jumpUp',['jumpUpScene', 'scrollmagicController', 'checkWindowSize', function(jumpUpScene:any, scrollmagicController:any, checkWindowSize:any){
    return {
        restrict: 'A',
        scope: {
            jumpUp : '@',
            loaded : '&'
        },
        link: function(scope:any, elem:any) {
            if(checkWindowSize.getDesktop() && scope.loaded) {
                jumpUpScene.setAnimation($(elem).find(scope.jumpUp), elem, scrollmagicController.createController(), config.debugConfig.status);
            }
        }
    }
}]);