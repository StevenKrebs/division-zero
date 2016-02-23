/* Get Discord Data */
function setupDiscord() {
    var serverID = $('#discord-serverlink').data('server-id');
    var div = $('#discord-userlist');
    var headline = $('#discord-userlist h3');
    var userlist = $('#discord-userlist ul');
    $(div).fadeOut('slow');
    if($(userlist).length > 0) {
        $(userlist).remove();
    }
    $(headline).after('<ul></ul>');

    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
        var membersOnline = data.members.length;
        if (membersOnline > 0) {
            if (membersOnline == 1) {
                $(headline).text(membersOnline + ' agent online:');
            } else {
                $(headline).text(membersOnline + ' agents online:');
            }
            $.each(data.members, function() {
                var game = '';
                if (this.game) {
                    game = '<span class="user_game">('+ this.game.name +')</span>';
                }
                $(userlist).append('<li><img src="' + this.avatar_url + '" class="user_avatar"/><span class="user_status" data-status="'+ this.status +'"></span><span class="user_name" data-role="' + this.discriminator + '">' + this.username + "</span>" + game + "</li>");
            });
        } else {
            $(headline).text('No agent online!').addClass('center');
        }
    },$(div).fadeIn('slow'));
};
setInterval(setupDiscord(), 60000);