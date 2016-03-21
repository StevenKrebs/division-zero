var angular = require('angular'),
    config  = require('../_configs/config.js'),
    app     = angular.module('division_zero');

// Form management
app.controller("formCtrl",["$scope", "$http", "$translate", function($scope, $http, $translate) {
    $scope.success              = false,
    $scope.error                = false,
    $scope.submitApplication    = function() {
        $scope.submitted        = true;
        if($scope.application.$valid) {
            var data = {
                "recipient" :   "application@division-zero.org",
                "subject"   :   "Neue Bewerbung für Team /0/ von " + $scope.formInputNickname,
                "Name"      :   $scope.formInputNickname,
                "E-Mail"    :   $scope.formInputEmail,
                "Uplay"     :   $scope.formInputUplay,
                "lang"      :   $translate.proposedLanguage()
            };
            $http({
                method      :   'POST',
                url         :   '/application.php',
                data        :   data
            })
                .then(function(response) {
                    $scope.success              = true;
                },
                function(response) {
                    $scope.error                = true;
                });
        }
    };
    $scope.retry                = function() {
        $scope.success          = false;
        $scope.error            = false;
    }
}]);