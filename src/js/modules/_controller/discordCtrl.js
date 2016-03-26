/**
 * discordCtrl
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js controller for a discord server widget
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var config      = require('../config.js'),
    angular     = require('angular'),
    app         = angular.module(config.angularConfig.global.appName);

app.controller('discordCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("https://discordapp.com/api/servers/"+ config.discord.serverID +"/widget.json").then(function(response) {
        $scope.discordUserList  = response.data.members;
    });
}]);