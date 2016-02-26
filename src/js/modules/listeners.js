/* Adding event listeners */
$(document).ready(function() {
    var tablet  = window.tablet_resolution;
    $('.imgChecker1').attr('src','img/backdrop2.jpg').load(function() {
        $('.imgChecker2').attr('src','img/backdrop1.jpg').load(function() {
            setTimeout(function() {
                $('.loader').fadeOut('slow');
                $('main').fadeIn('slow');
                $('footer').fadeIn('slow');
                if($(window).height() >= tablet || $(window).width() >= tablet) {
                    skrollr.init({
                        forceHeight: false,
                        smoothScrolling: true
                    });
                }
                $(window).scrollTop();
            },2000);
        });
    });

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
});