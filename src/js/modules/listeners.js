/* Adding event listeners */
$('body').imagesLoaded({background:true}).always(function() {
        var loaded = false;
        setTimeout(function() {
            $('.loader').fadeOut('slow');
            $('main').fadeIn('slow');
            $('footer').fadeIn('slow');
            if ($(window).width() <= window.mobile_resolution) {
                window.animator.enabled(false);
                $('.mobile-nav a').removeClass('highlight');
                $('.mobile-nav').fadeIn('slow');
                loaded = true;
            }
            $(window).scrollTop();
        },2000);


    $('.forward').click(function () {
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1000);
    });

    $('.backward').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#retry').click(function() {
        $('#form-result').hide();
        $('#form').show();
    });

    $(window).on({
        orientationchange: function() {
            if ($(window).width() < window.mobile_resolution && loaded == true) {
                $('.mobile-nav').fadeIn('slow');
            } else {
                $('.mobile-nav').fadeOut('slow');
            }
        },

        resize: function() {
            if ($(window).width() < window.mobile_resolution && loaded == true) {
                $('.mobile-nav').fadeIn('slow');
            } else {
                $('.mobile-nav').fadeOut('slow');
            }
        }
    });
});

