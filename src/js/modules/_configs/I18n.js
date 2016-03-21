var angular     = require('angular'),
    config      = require('./config.js'),
    app         = angular.module('division_zero');

//Plugins
require('angular-translate');
require('angular-translate-loader-static-files');

app.requires.push('pascalprecht.translate');
app.config(['$translateProvider', function ($translateProvider) {
    var fileNameConvention = {
        files : [
            {
                prefix    :   config.angularRoutes.locales() + 'locale-',
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

    