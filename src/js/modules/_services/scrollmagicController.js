/**
 * scrollmagicController
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js service to get the controller instance needed for scrollmagic.js to work
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular         = require('angular'),
    scrollmagic     = require('scrollmagic'),
    config          = require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

//Controller service
app.service('scrollmagicController', function() {
    return {
        createController : function() {
            return new scrollmagic.Controller();
        }
    }
});