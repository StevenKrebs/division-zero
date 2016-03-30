/**
 * discordCtrl
 * @author Steven Krebs
 * @description angular.js controller for a discord server widget
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var config      = require('../config'),
    angular:any = require('angular'),
    app         = angular.module(config.angularConfig.global.appName);

app.controller('discordCtrl', ['$scope', '$http', function($scope:any, $http:any) {
    $http.get("https://discordapp.com/api/servers/"+ config.discord.serverID +"/widget.json").then(function(response:any) {
        $scope.discordUserList  = response.data.members;
    });
}]);