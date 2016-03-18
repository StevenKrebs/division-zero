var angular     = require('angular'),
    config      = require('./config.js'),
    exports     = module.exports        = {},
    translator  = exports.translator    = angular.module('translator', ['pascalprecht.translate']);

require('angular-translate');

translator.config(function ($translateProvider) {
   $translateProvider.translations('de', {
       'info-about':  'Über uns'
   }) ;
    $translateProvider.preferredLanguage('de');
});
