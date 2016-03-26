/**
 * headCtrl
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js controller to take care of the meta-information
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular         =   require('angular'),
    config          =   require('../config.js'),
    app             =   angular.module(config.angularConfig.global.appName);

app.controller('headCtrl',['$scope', '$translate', function($scope, $translate) {
    $scope.lang = $translate.proposedLanguage() || $translate.use();
}]);