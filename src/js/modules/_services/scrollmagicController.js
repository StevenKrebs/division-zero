var angular         = require('angular'),
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap'),
    config          = require('../config.js'),
    app         =   angular.module(config.angularSettings.appName());

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

//Controller service
app.factory('scrollmagicController', function() {
    function createController() {
        return new scrollmagic.Controller();
    }
    return {
        createController : createController
    }
});