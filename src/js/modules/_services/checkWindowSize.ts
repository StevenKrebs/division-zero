/**
 * checkWindowSize
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js service to provide constant window size checking
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

app.factory('checkWindowSize', function(){
    return {
        getDesktop : function() {
            return window.innerHeight > config.windowSizes.desktop || window.innerWidth > config.windowSizes.desktop
        },
        getMobile : function() {
            return window.innerHeight < config.windowSizes.desktop || window.innerWidth < config.windowSizes.desktop
        }
    }
});