// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    controller      = animator.createController(),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    desktopParallax, desktopInfo, desktopCommunity,
    velocity        = require('velocity-animate'),
    lucid           = require('./lucid.js');

//Plugins
var imagesLoaded     = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );
require('jquery-mousewheel')($)

//Actual Listeners
$('body').imagesLoaded({background:true}).always(function() {
    var loaded = false;
    $('.loader').velocity("fadeOut", {delay: 2000, duration: "slow"});
    $('main').velocity("fadeIn", {delay: 2500, duration: "slow"});
    $('.mobile-nav a').removeClass('highlight');
    $('footer').velocity("fadeIn", {delay: 2500, duration: "slow"});
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
}, function() {
    if($(window).height() > window.tablet_resolution || $(window).width() > window.tablet_resolution) {
        //Adding scenes to animate
        desktopParallax     = desktop.createParallax(controller),
        desktopInfo         = desktop.createInfo(controller),
        desktopCommunity    = desktop.createCommunity(controller);
        //Smooth scrolling
        $(window).impulse();
    } else if ($(window).width() <= window.mobile_resolution) {
        $('.mobile-nav').velocity("fadeIn", {delay: 2000, duration: "slow"});
        loaded = true;
    }
});

