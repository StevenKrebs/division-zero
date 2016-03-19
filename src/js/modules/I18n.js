var angular     = require('angular'),
    config      = require('./config.js'),
    app         = angular.module('division_zero');

//Plugins
require('angular-translate');

app.requires.push('pascalprecht.translate');
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .translations('de', require('../lang/locale-de.json'))
        .translations('en', require('../lang/locale-en.json'))
        .determinePreferredLanguage()
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
}]);

    