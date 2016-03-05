// Adding event listeners

//ScrollMagic
var animator        = require('./scrollmagic.js'),
    controller      = animator.createController(),
    desktop         = animator.desktop,
    mobile          = animator.mobile,
    desktopParallax,desktopInfo,desktopCommunity,
    lucid           = require('./lucid.js');

//Plugins
var imagesLoaded    = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );
require('jquery-mousewheel')($);
require('perfect-scrollbar/jquery')($);


//Actual Listeners

$(window).on("beforeunload",function() {
    $('.loader').show(function() {
        $(window).scrollTop(0);
    });
});

$('body').imagesLoaded({background:true}).always(function() {
    var loaded = false;
    $('.loader').delay(1800).fadeOut(1000, function() {
        $('main').fadeIn(0,function() {
            $('footer').fadeIn(0,function() {
                if($(window).height() > window.tablet_resolution || $(window).width() > window.tablet_resolution) {
                        desktopParallax     = desktop.createParallax(controller),
                        desktopInfo         = desktop.createInfoAnim(controller),
                        desktopCommunity    = desktop.createCommunityAnim(controller);
                    //Smooth scrolling
                    $(window).impulse();
                } else if ($(window).width() <= window.mobile_resolution) {
                    $('.mobile-nav').fadeIn(1800);
                    loaded = true;
                }
            });
        });
    });
    $('.mobile-nav a').removeClass('highlight');

    $('.forward').click(function () {
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1800);
    });

    $('.backward').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1800);
    });

    $('#retry').click(function() {
            $('#form-result').hide();
            $('#form').show();
        });

    $(window).on({
        orientationchange: function() {
            if ($(window).width() < window.mobile_resolution && loaded == true) {
                $('.mobile-nav').fadeIn(1800);
            } else {
                $('.mobile-nav').fadeOut(1800);
            }
        }
    });
});