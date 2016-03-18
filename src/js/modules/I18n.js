var angular     = require('angular'),
    config      = require('./config.js'),
    exports     = module.exports        = {};

//Plugins
require('angular-route');
require('angular-translate');

var translator = exports.translator = angular.module("translator", ['pascalprecht.translate']);
    translator.config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            .translations('de', require('../lang/de_DE.json'))
            .translations('en', require('../lang/en_GB.json'))
            .determinePreferredLanguage()
            .fallbackLanguage('en')
            .useSanitizeValueStrategy(null);
    }]);

    