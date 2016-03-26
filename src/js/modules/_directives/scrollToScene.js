/**
 * scrollToScene
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js directive for animated scrolling to the target
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName),
    velocity    =   require('velocity-animate');


app.directive('scrollToScene', function() {
    return {
        restrict: 'A',
        scope: {
            scrollToScene: "@"
        },
        link: function(scope, elem) {
            elem.on('click', function () {
                $(scope.scrollToScene).velocity("scroll", {
                    duration: config.scrollSettings.scrollSpeed,
                    easing: config.scrollSettings.scrollType
                });
            });
        }
    }
});