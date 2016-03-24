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