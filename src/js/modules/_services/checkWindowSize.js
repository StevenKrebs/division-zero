/**
 * checkWindowSize
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js service to provide constant window size checking
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular = require('angular'),
    config  = require('../config'),
    app     = angular.module(config.angularConfig.global.appName);

app.factory('checkWindowSize', function(){
    return {
        getDesktop : function() {
            return $(window).height() > config.windowSizes.desktop || $(window).width() > config.windowSizes.desktop
        },
        getMobile : function() {
            return $(window).height() < config.windowSizes.desktop || $(window).width() < config.windowSizes.desktop
        }
    }
});