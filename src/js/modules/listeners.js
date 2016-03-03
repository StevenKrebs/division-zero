/* Adding event listeners */

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    controller      = animator.createController(),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    desktopParallax, desktopInfo, desktopCommunity,
    velocity        = require('velocity-animate');

//ImagesLoaded
var imagesLoaded     = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );


//Actual Listeners
$('body').imagesLoaded({background:true}).always(function() {
        var loaded = false;
        $('.mobile-nav a').removeClass('highlight');
            $('.loader').velocity("fadeOut", {delay: 2000, duration: "slow"});
            $('main').velocity("fadeIn", {delay: 2500, duration: "slow"});
            $('footer').velocity("fadeIn", {delay: 2500, duration: "slow"});
            if($(window).height() > window.tablet_resolution || $(window).width() > window.tablet_resolution) {
                desktopParallax     = desktop.createParallax(controller),
                desktopInfo         = desktop.createInfo(controller),
                desktopCommunity    = desktop.createCommunity(controller);
            } else if ($(window).width() <= window.mobile_resolution) {
                $('.mobile-nav').velocity("fadeIn", {delay: 2000, duration: "slow"});
                loaded = true;
            }
            $(window).velocity('scroll');


    $('.forward').click(function () {
        $('main').velocity('scroll',{
            duration: 1000
        });
    });

    $('.backward').click(function () {
        $('body').velocity('scroll',{
            duration: 1000
        });
    });

    $('#retry').click(function() {
        $('#form-result').hide();
        $('#form').show();
    });

    $(window).on({
        orientationchange: function() {
            if ($(window).width() < window.mobile_resolution && loaded == true) {
                $('.mobile-nav').velocity("fadeIn", {duration: 1000});
            } else {
                $('.mobile-nav').velocity("fadeOut", {duration: 1000});
            }
        }
    });
});

