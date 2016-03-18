//Get Discord Data
var velocity    = require('velocity-animate'),
    serverID    = require('./config.js').discord(),
    angular     = require('angular'),
    translator  = require('./I18n.js');
    membersOnline;
require('angular-route');
require('angular-translate');

var discord = module.exports.discord = angular.module('discord', ['translator'])
    .controller('discordCtrl', function($scope) {
        $scope.memberCount = function() {
            if (membersOnline < 1) {
                return 'Keine Agenten online'
            }
            else if (membersOnline == 1) {
                return '1 Agent online:'
            }
            else {
                return membersOnline + " Agenten online:"
            }
        };
    });

var discordViewer = function() {
    $('#discord-userlist').hide();
    if($('#discord-userlist ul').length > 0) {
        $('#discord-userlist ul').remove();
    } else {
        $('#discord-userlist h3').after('<ul></ul>');
    }
    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
            return data
        })


        .done(function() {
            $('#discord-userlist').velocity("fadeIn",{duration:"slow"});
        });
};
discordViewer();

var getDiscordData = $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
    return data
});

var discordMemberCount = function(data) {
    return data.members.length;
}

var discordUserList = function(data) {
    return $.each(data.members, function() {
        var game = '';
        if (this.game) {
            game = '<span class="user_game">('+ this.game.name +')</span>';
        }
        $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar"/><span class="user_status" data-status="'+ this.status +'"></span><span class="user_name" data-role="' + this.discriminator + '">' + this.username + "</span>" + game + "</li>");
    });
}