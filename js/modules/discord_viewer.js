/* Get Discord Data */
function setupDiscord() {
    var serverID = $('#discord-serverlink').data('server-id');
    $('#discord-userlist').fadeOut('slow');
    if($('#discord-userlist ul').length > 0) {
        $('#discord-userlist ul').remove();
    } else {
        $('#discord-userlist h3').after('<ul></ul>');
    }
    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
        var membersOnline = data.members.length;
        if (membersOnline > 0) {
            if (membersOnline == 1) {
                $('#discord-userlist h3').text(membersOnline + ' agent online:');
            } else {
                $('#discord-userlist h3').text(membersOnline + ' agents online:');
            }
            $.each(data.members, function() {
                var game = '';
                if (this.game) {
                    game = '<span class="user_game">('+ this.game.name +')</span>';
                }
                $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar"/><span class="user_status" data-status="'+ this.status +'"></span><span class="user_name" data-role="' + this.discriminator + '">' + this.username + "</span>" + game + "</li>");
            });
        } else {
            $('#discord-userlist h3').text('No agent online!').addClass('center');
        }
    },$('#discord-userlist').fadeIn('slow'));
};
setInterval(setupDiscord(), 60000);