//Global Plugins
    global.$    = global.jQuery = require('jquery');
var angular     = require('angular'),
    exports     = module.exports        = {},
    config      = require('./modules/config');

exports.angularApp = angular.module(config.angularSettings.appName(), []);

/* JS-Modules */
require('bulk-require')(__dirname, ['modules/**/*.js']);






