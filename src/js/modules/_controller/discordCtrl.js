//Get Discord Data
var config      = require('../config.js'),
    angular     = require('angular'),
    app         = angular.module(config.angularConfig.global.appName);

app.controller('discordCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("https://discordapp.com/api/servers/"+ config.discord.serverID +"/widget.json").then(function(response) {
        $scope.discordUserList  = response.data.members;
    });
}]);