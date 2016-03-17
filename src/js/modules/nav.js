var velocity    = require('velocity-animate'),
    config      = require('./config.js');

$('nav a').each(function() {
    $(this).click(function(event) {
        var thiz = $(this).attr('href');
        event.preventDefault();
        $(thiz).velocity('scroll',{duration: config.scrollSettings.scrollSpeed(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false}});
    })
});

module.exports.getScrollPosMobile = function() {
    if ($(document).scrollTop() + $(window).height() >= $('footer').position().top) {
        $('nav a').removeClass('highlight');
        $('nav a[href="#footer"]').addClass('highlight');
    } else {
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
    }
};

module.exports.getScrollPosDesktop = function() {
    var scrollPos = $(document).scrollTop() + $(window).height();
    $('.desktop-nav a').each(function () {
        var link = $(this),
            href = $(link.attr('href')),
            topPos = $(href).position().top,
            bottomPos = $(href).position().top + $(href).outerHeight();
        if (scrollPos > topPos && scrollPos <= bottomPos) {
            link.addClass('highlight');
        } else {
            link.removeClass('highlight');
        }
        if (scrollPos == $('footer').position().top + $('footer').outerHeight()) {
            link.removeClass('highlight');
            $('nav a[href="#footer"]').addClass('highlight');
        }
    })
    return
};