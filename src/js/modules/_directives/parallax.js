/**
 * parallax
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js directive for parallax animations
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('parallax',['parallaxScene', 'scrollmagicController', 'checkWindowSize', function(parallaxScene, scrollmagicController, checkWindowSize){
    return {
        restrict: 'A',
        link: function(scope, elem) {
            if(checkWindowSize.getDesktop && scope.loaded) {
                parallaxScene.setAnimation(elem, elem, scrollmagicController.createController(), config.debugConfig.status);
            }
        }
    }
}]);