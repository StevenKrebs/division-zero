window.$ = require('jquery');

/*Definition of variables */
var tablet = 1024;
var mobile = 768;
var height;

/* Generic Functions */
$('i.blink').click(function() {
    $('html, body').animate({
        scrollTop: $('section:first').offset().top
    }, 1000);
});

$(window).load(function() {
    $("html, body").animate({ scrollTop: 0 });
    getHeightForElements();
});

/* Loading animation handler */
$(document).ready(function() {
    setTimeout(function() {
        $('.loader').fadeOut('slow');
        $('section').each(function() {
            $(this).fadeIn('slow').css('display','table');
        });
        $('footer').fadeIn('slow').css('display','table');
    }, 2000);
});

/* Element resizer */
$(window).on('orientationchange', function() {
    getHeightForElements();
});


function getHeightForElements() {
    height = $(window).height();
    $('header').css('min-height',height + 'px');
    $('.header-wrapper').css('min-height',height + 'px');
}


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
                $('#discord-userlist h3').text(membersOnline + ' Agent online:');
            } else {
                $('#discord-userlist h3').text(membersOnline + ' Agenten online:');
            }
            $.each(data.members, function() {
                $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar" /><span class="user_name">' + this.username + "</span></li>");
            });
        } else {
            $('#discord-userlist h3').text('Kein Agent online!');
        }
    },$('#discord-userlist').fadeIn('slow'));
};
setInterval(setupDiscord(), 60000);


