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
})

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

$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.top-shadow').show();
    } else {
        $('.top-shadow').hide();
    }
})


/* Get Discord Data */
//$.getJSON("https://discordapp.com/api/servers/142339595105861632/widget.json", function(data) {
//    console.log(JSON.stringify(data));
//});
