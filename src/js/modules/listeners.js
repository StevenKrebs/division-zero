// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    mobileNav       = require('./mobile_nav.js'),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    controller,desktopParallax,desktopInfo,desktopCommunity,
    lucid           = require('./lucid.js'),
    svginject       = require('./jquery.svginject.js'),
    velocity        = require('velocity-animate'),
    config          = require('./config.js');

//Plugins
var imagesLoaded    = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );
require('jquery-mousewheel')($);

//Actual Listeners

$(window).on({
    orientationchange: function() {
        if (config.windowSizes.checkMobile()) {
            $('.mobile-nav').velocity("fadeIn",{duration: config.timing.fast()});
        } else {
            $('.mobile-nav').velocity("fadeOut",{duration: config.timing.fast()});
        }
    },
    beforeunload: function() {
        $('.loader').show();
    },
    load: function() {
        //Smooth scrolling
        $(window).impulse();
    }
});

$(document).ready(function(){
    $('body').addClass('locked');
    $('.svg').svgInject();
    $('body').imagesLoaded({background:true}).always(function() {
        var scrollspeed,scrolltype;
        $('.loader').velocity("fadeOut",{delay: config.timing.slower()}).promise().done(function() {
            $('main').velocity("fadeIn")
                .promise().done(function () {
                if (config.windowSizes.checkTablet()) {
                    controller = animator.createController(),
                    desktopParallax = desktop.createParallax(controller),
                    desktopInfo = desktop.createInfoAnim(controller),
                    desktopCommunity = desktop.createCommunityAnim(controller);
                } else if (config.windowSizes.checkMobile()) {
                    mobileNav.getScrollPos();
                    $('.mobile-nav').fadeIn(config.timing.fast());
                    $(window).scroll(function() {
                        mobileNav.getScrollPos();
                    });
                }
                $('footer').velocity("fadeIn").promise().done(function() {
                    $('body').removeClass('locked');
                });
            });
        });

        $('.forward').click(function () {
            $('main').velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType()});
        });

        $('.backward').click(function () {
            $('body').velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType()});
        });

        $('#retry').click(function() {
            $('#form-result').hide();
            $('#form').show();
        });
    });
});