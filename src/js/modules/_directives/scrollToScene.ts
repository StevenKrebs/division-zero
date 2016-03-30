/**
 * scrollToScene
 * @author Steven Krebs
 * @description angular.js directive for animated scrolling to the target
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any     = require('angular'),
    config          = require('../config'),
    app             = angular.module(config.angularConfig.global.appName),
    velocity        = require('velocity-animate');


app.directive('scrollToScene', function() {
    return {
        restrict: 'A',
        scope: {
            href: "@"
        },
        link: function(scope:any, elem:any) {
            elem.on('click', function (e:any) {
                e.preventDefault();
                $(scope.href).velocity("scroll", {
                    duration: config.scrollSettings.scrollSpeed,
                    easing: config.scrollSettings.scrollType
                });
            });
        }
    }
});