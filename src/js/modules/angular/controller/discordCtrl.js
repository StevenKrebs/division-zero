//Get Discord Data
var serverID    = require('../../config.js').discord(),
    angular     = require('angular'),
    app         = angular.module('division_zero');

app.controller('discordCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("https://discordapp.com/api/servers/"+ serverID +"/widget.json").then(function(response) {
        $scope.discordUserList      = response.data.members;
    });
}]);