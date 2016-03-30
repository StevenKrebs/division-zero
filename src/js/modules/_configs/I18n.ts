/**
 * I18n
 * @author Steven Krebs
 * @description angular.js configuration for Internationalization
 * @copyright 2016,
 * @license MIT
 */

var angular     = require('angular'),
    config      = require('./../config'),
    app         = angular.module(config.angularConfig.global.appName);

//Plugins
require('angular-translate');
require('angular-translate-loader-static-files');

app.requires.push('pascalprecht.translate');
app.config(['$translateProvider', function ($translateProvider:any) {
    var fileNameConvention = {
        files : [
            {
                prefix    :   config.angularConfig.routes.locales + 'locale-',
                suffix    :   '.json'
            }
        ]
    };

    var langMap = {
        'en_UK' : 'en',
        'en_US' : 'en',
        'de_DE' : 'de'
    };

    $translateProvider
        .useStaticFilesLoader(fileNameConvention)
        .registerAvailableLanguageKeys(['en','de'], langMap)
        .determinePreferredLanguage()
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
}]);