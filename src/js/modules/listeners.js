// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    controller      = animator.createController(),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    desktopParallax, desktopInfo,desktopCommunity,
    velocity        = require('velocity-animate'),
    lucid           = require('./lucid.js');

//Plugins
var imagesLoaded     = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );
require('jquery-mousewheel')($),
require('jquery-scroll-lock');

//Actual Listeners
$('body').scrollLock('enable').addClass('locked');
$('body').imagesLoaded({background:true}).done(function() {
    var loaded = false;
    $('.loader').velocity("fadeOut", {delay: 2000, duration: "slow", complete: function() {
        if($(window).height() > window.tablet_resolution || $(window).width() > window.tablet_resolution) {
            desktopParallax     = desktop.createParallax(controller),
                desktopInfo         = desktop.createInfoAnim(controller),
                desktopCommunity    = desktop.createCommunityAnim(controller);
            //Smooth scrolling
            $(window).impulse();
            $('body').scrollLock('disable').removeClass('locked');
        } else if ($(window).width() <= window.mobile_resolution) {
            $('.mobile-nav').velocity("fadeIn", {delay: 2000, duration: "slow"});
            loaded = true;
        }
    }});
    $('.mobile-nav a').removeClass('highlight');
    $('body').velocity('scroll');

    $('.forward').click(function () {
        $('main').velocity('scroll',{
            duration: 1500
        });
    });

    $('.backward').click(function () {
        $('body').velocity('scroll',{
            duration: 1500
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