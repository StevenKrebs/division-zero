var angular     = require('angular'),
    config      = require('./config.js'),
    exports     = module.exports        = {};

//Plugins
require('angular-route');
require('angular-translate');

var translator = exports.translator = angular.module("translator", ['pascalprecht.translate']);
    translator.config(['$translateProvider', function ($translateProvider) {
       $translateProvider.translations('de', {
            'info-about': 'Über uns'
        });
        $translateProvider.determinePreferredLanguage();
    }]);

    