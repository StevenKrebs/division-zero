// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    nav       = require('./nav.js'),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    controller,desktopParallax,desktopInfo,desktopCommunity,
    svginject       = require('./jquery.svginject.js'),
    velocity        = require('velocity-animate'),
    scrollmanager   = require('./fullscreen_scroll.js'),
    config          = require('./config.js');

//Plugins
var imagesLoaded    = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );

//Actual Listeners

$(window).on({
    orientationchange: function() {
        if (config.windowSizes.checkMobile()) {
            $('nav').velocity("fadeIn",{duration: config.timing.fast()});
            $('.mobile-nav').velocity("fadeIn",{duration: config.timing.fast()});
        } else {
            $('nav').velocity("fadeOut",{duration: config.timing.fast()});
            $('.mobile-nav').velocity("fadeOut",{duration: config.timing.fast()});
        }
    },
    beforeunload: function() {
        $('.loader').show();
    },
    load: function() {

    },
    scroll:function() {
        if (config.windowSizes.checkTablet()) {
            nav.getScrollPosDesktop();
        } else {
            nav.getScrollPosMobile();
        }
    }
});

$(document).ready(function(){
    $('body').addClass('locked');
    $('.svg').svgInject();
    $('nav a[href="#header"]').addClass('highlight');
    $('body').imagesLoaded({background:true}).always(function() {
        var scrollspeed,scrolltype;
        $('.loader').velocity("fadeOut",{delay: config.timing.slower()}).promise().done(function() {
            $('main').velocity("fadeIn")
                .promise().done(function () {
                if (config.windowSizes.checkTablet()) {
                    $('.desktop-nav').fadeIn(config.timing.fast());
                    $('nav').fadeIn(config.timing.fast());
                    scrollmanager.scenescroll();
                    controller = animator.createController(),
                    desktopParallax = desktop.createParallax(controller),
                    desktopInfo = desktop.createInfoAnim(controller),
                    desktopCommunity = desktop.createCommunityAnim(controller);
                } else if (config.windowSizes.checkMobile()) {
                    $('.mobile-nav').fadeIn(config.timing.fast());
                    $('nav').fadeIn(config.timing.fast());
                }
                $('footer').velocity("fadeIn").promise().done(function() {
                    $('body').removeClass('locked');
                });
            });
        });

        $('.forward').click(function () {
            $('main').velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false}});
        });

        $('.backward').click(function () {
            $('body').velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false}});
        });

        $('#retry').click(function() {
            $('#form-result').hide();
            $('#form').show();
        });
    });
});