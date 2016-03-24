var angular         = require('angular'),
    scrollmagic     = require('scrollmagic'),
    config          = require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

//Controller service
app.factory('scrollmagicController', function() {
    function createController() {
        return new scrollmagic.Controller();
    }
    return {
        createController : createController
    }
});