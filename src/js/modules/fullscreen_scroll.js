var scrollmanagement    = module.exports            = {},
    config              = require('./config.js');
    window.scrollTimer  = false;

scrollmanagement.scenescroll = function() {
    $(window).bind('mousewheel DOMMouseScroll keydown', function(event){
        event.preventDefault();
        var scrollPos   = $(document).scrollTop() + $(window).height(),
            header      = $('header').position().top + $(window).height(),
            info        = $('#info').position().top + $(window).height(),
            community   = $('#community').position().top + $(window).height(),
            footer      = $('footer').position().top + $(window).height();
        if (window.scrollTimer == false) {
            window.scrollTimer = true;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 || event.keyCode == 38) {
                if(scrollPos == info) {
                    $('header').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == community) {
                    $('#info').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos > community) {
                    $('#community').stop().velocity("scroll", {duration: config.timing.fast(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                }
            }
            else if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0 || event.keyCode == 40) {
                if(scrollPos == header) {
                    $('#info').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == info) {
                    $('#community').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == community) {
                    $('footer').stop().velocity("scroll", {duration: config.timing.fast(), easing: config.scrollSettings.scrollType(), complete: function() {window.scrollTimer = false;}});
                }
            }
        }
    });
};

scrollmanagement.articlescroll = function() {

};