/**
 * headCtrl
 * @author Steven Krebs
 * @description angular.js controller to take care of the meta-information
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any     =   require('angular'),
    config          =   require('../config'),
    app             =   angular.module(config.angularConfig.global.appName);

app.controller('headCtrl',['$scope', '$translate', function($scope:any, $translate:any) {
    $scope.lang = $translate.proposedLanguage() || $translate.use();
}]);