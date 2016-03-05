// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    mobileNav       = require('./mobile_nav.js'),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    controller,desktopParallax,desktopInfo,desktopCommunity,
    lucid           = require('./lucid.js'),
    velocity        = require('velocity-animate');

//Plugins
var imagesLoaded    = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );
require('jquery-mousewheel')($);
require('perfect-scrollbar/jquery')($);

//Actual Listeners
$(document).ready(function(){
    $('body').imagesLoaded({background:true}).always(function() {
        var loaded = false;
        var scrollspeed,scrolltype;
        $('.loader').velocity("fadeOut",{duration: 1000, delay: 2000}).promise().done(
            function() {
                $('footer').velocity("fadeIn",{duration:"fast"});
                $('main').velocity("fadeIn",{duration:"fast"})
                    .promise().done(function () {
                    if ($(window).height() > window.tablet_resolution || $(window).width() > window.tablet_resolution) {
                        controller = animator.createController(),
                            desktopParallax = desktop.createParallax(controller),
                            desktopInfo = desktop.createInfoAnim(controller),
                            desktopCommunity = desktop.createCommunityAnim(controller);
                        //Smooth scrolling
                        $(window).impulse();
                        scrollspeed = 1500;
                        scrolltype = "swing";
                    } else if ($(window).width() <= window.mobile_resolution) {
                        mobileNav.getScrollPos();
                        $('.mobile-nav').fadeIn(1000);
                        loaded = true;
                        scrollspeed = 1000;
                        scrolltype = "swing"
                        $(window).scroll(function() {
                            mobileNav.getScrollPos();
                        });
                    }
                });
            }
        );


        $('.forward').click(function () {
            $('main').velocity("scroll", {duration: scrollspeed, easing: scrolltype});
        });

        $('.backward').click(function () {
            $('body').velocity("scroll", {duration: scrollspeed, easing: scrolltype});
        });

        $('#retry').click(function() {
                $('#form-result').hide();
                $('#form').show();
            });

        $(window).on({
            orientationchange: function() {
                if ($(window).width() < window.mobile_resolution && loaded == true) {
                    $('.mobile-nav').velocity("fadeIn",{duration: 1800});
                } else {
                    $('.mobile-nav').velocity("fadeOut",{duration: 1800});
                }
            },
            beforeunload: function() {
                $(window).scrollTop(0);
            }
        });
    });
});