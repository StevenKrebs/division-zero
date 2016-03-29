/**
 * parallax
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js directive for parallax animations
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any =   require('angular'),
    config      =   require('../config'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('parallax',['parallaxScene', 'scrollmagicController', 'checkWindowSize', function(parallaxScene:any, scrollmagicController:any, checkWindowSize:any){
    return {
        restrict: 'A',
        link: function(scope:any, elem:any) {
            if(checkWindowSize.getDesktop && scope.loaded) {
                parallaxScene.setAnimation(elem, elem, scrollmagicController.createController(), config.debugConfig.status);
            }
        }
    }
}]);