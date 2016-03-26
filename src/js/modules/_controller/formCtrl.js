/**
 * formCtrl
 * //division-zero.org
 * @author Steven Krebs
 * @file angular.js controller for the application form. 
 * @description Checks the form, creates a JSON to be posted to a php-script on the server.
 * Copyright 2016. MIT licensed.
 */
var angular = require('angular'),
    config  = require('../config.js'),
    app     = angular.module(config.angularConfig.global.appName);

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
                "EMail"     :   $scope.formInputEmail,
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