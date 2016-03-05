var velocity = require('velocity-animate');

$('.mobile-nav a').each(function() {
    $(this).click(function(event) {
        var thiz = $(this).attr('href');
        event.preventDefault();
        $(thiz).velocity('scroll',{duration: 1000});
    })
});

module.exports.getScrollPos = function() {
    var scrollPos = $(document).scrollTop();
    $('.mobile-nav a').each(function () {
        var link = $(this),
            href = $(link.attr('href')),
            topPos = $(href).position().top - 1,
            bottomPos = $(href).position().top + $(href).outerHeight() - 1;
        if (scrollPos >= topPos && scrollPos < bottomPos) {
            link.addClass('highlight');
        } else {
            link.removeClass('highlight');
        }
    })
    return
};