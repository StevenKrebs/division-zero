window.$ = require('jquery');

/*Definition of variables */
var tablet = 1024;
var mobile = 768;
var height;

/* Generic Functions */
$("html, body").animate({ scrollTop: 0 });
$('i.blink').click(function() {
    $('html, body').animate({
        scrollTop: $('section:first').offset().top
    }, 1000);
});

function getHeightForElements() {
    height = $(window).height();
    $('header').css('min-height',height + 'px');
    $('.header-wrapper').css('min-height',height + 'px');
}

$(window).load(function() {
    getHeightForElements();
});
$(document).ready(function() {
    setTimeout(function() {
        $('.filter').fadeOut('slow');
        $('section').each(function() {
            $(this).fadeIn('slow').css('display','table');
        });
        $('footer').fadeIn('slow').css('display','table');
    }, 2000);
});
$(window).on('orientationchange', function() {
    getHeightForElements();
});


/* Get Discord Data */
(function queryOnlineUsers() {
    var serverID = $('#discord-serverlink').data('server-id');
    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
        $.each(data.members, function() {
            $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar" /><span>' + this.username + "</span></li>");
        });
    });
})();


