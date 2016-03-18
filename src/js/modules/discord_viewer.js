//Get Discord Data
var velocity    = require('velocity-animate'),
    serverID    = require('./config.js').discord(),
    membersOnline,
    angular     = require('angular'),
    translator  = angular.module('translator');

translator.controller('discordCtrl', ['$scope', '$translate', function($scope, $translate) {
    var userList = $scope.userList = [];
    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {

            $.each(data.members, function() {
                var game = '';
                if (this.game) {
                    game = '<span class="user_game">('+ this.game.name +')</span>';
                }
                userList.push('<img src="' + this.avatar_url + '" class="user_avatar"/><span class="user_status" data-status="'+ this.status +'"></span><span class="user_name" data-role="' + this.discriminator + '">' + this.username + "</span>" + game + "');
            });
        });
}]);