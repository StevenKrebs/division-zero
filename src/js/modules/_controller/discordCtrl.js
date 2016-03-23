//Get Discord Data
var config      = require('../config.js'),
    angular     = require('angular'),
    app         = angular.module(config.angularSettings.appName());

app.controller('discordCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("https://discordapp.com/api/servers/"+ config.discord() +"/widget.json").then(function(response) {
        $scope.discordUserList  = response.data.members;
    });
}]);