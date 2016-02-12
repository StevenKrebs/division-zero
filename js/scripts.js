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
$(window).on('orientationchange', function() {
    getHeightForElements();
});


/* Get Discord Data */
(function queryOnlineUsers() {
    $.getJSON("https://discordapp.com/api/servers/142339595105861632/widget.json", function(data) {
        console.log(data.members);
        $.each(data.members, function() {
            $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar" /><span>' + this.username + "</span></li>");
        });
    });
})();


