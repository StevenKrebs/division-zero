/**
 * formCtrl
 * @author Steven Krebs
 * @file angular.js controller for the application form.
 * @description Checks the form, creates a JSON to be posted to a php-script on the server.
 * Copyright 2016. MIT licensed.
 */
var angular     = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

// Form management
app.controller("formCtrl",["$scope", "$http", "$translate", function($scope:any, $http:any, $translate:any) {
    $scope.success              = false,
    $scope.error                = false,
    $scope.submitApplication    = function() {
        $scope.submitted        = true;
        if($scope.application.$valid) {
            var data:any = {
                "recipient" :   "application@division-zero.org",
                "subject"   :   "Neue Bewerbung für Team /0/ von " + $scope.formInputNickname,
                "Name"      :   $scope.formInputNickname,
                "EMail"     :   $scope.formInputEmail,
                "Uplay"     :   $scope.formInputUplay,
                "lang"      :   $translate.proposedLanguage()
            };
            $http({
                method      :   'POST',
                url         :   '/application.php',
                data        :   data
            })
                .then(function(response:any) {
                        $scope.success              = true;
                    },
                    function(response:any) {
                        $scope.error                = true;
                    });
        }
    };
    $scope.retry                = function() {
        $scope.success          = false;
        $scope.error            = false;
    }
}]);