var angular         =   require('angular'),
    config          =   require('../config.js'),
    app             =   angular.module(config.angularSettings.appName());


app.controller('headCtrl',['$scope', '$translate', function($scope, $translate) {
    $scope.lang = $translate.proposedLanguage() || $translate.use();
}]);