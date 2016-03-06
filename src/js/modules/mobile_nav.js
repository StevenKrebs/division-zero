var velocity = require('velocity-animate');

$('.mobile-nav a').each(function() {
    $(this).click(function(event) {
        var thiz = $(this).attr('href');
        event.preventDefault();
        $(thiz).velocity('scroll',{duration: 1000});
    })
});

module.exports.getScrollPos = function() {
    var scrollPos = $(document).scrollTop() + $(window).height() / 2;
    $('.mobile-nav a').each(function () {
        var link = $(this),
            href = $(link.attr('href')),
            topPos = $(href).position().top,
            bottomPos = $(href).position().top + $(href).outerHeight();
        if (scrollPos >= topPos && scrollPos < bottomPos) {
            link.addClass('highlight');
        } else {
            link.removeClass('highlight');
        }
    })
    return
};