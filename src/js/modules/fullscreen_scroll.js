var scrollmanagement    = module.exports            = {},
    config              = require('./config.js');
    window.scrollTimer  = false;

scrollmanagement.scenescroll = function() {
    $(window).bind('mousewheel DOMMouseScroll keydown', function(event){
        var scrollPos   = $(document).scrollTop() + $(window).height(),
            header      = $('header').position().top + $(window).height(),
            info        = $('#info').position().top + $(window).height(),
            community   = $('#community').position().top + $(window).height(),
            footer      = $('footer').position().top + $(window).height();
        if (window.scrollTimer == false) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 || event.keyCode == 38 || event.keyCode == 33) {
                event.preventDefault();
                if(scrollPos == info) {
                    $('header').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == community) {
                    $('#info').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos > community) {
                    $('#community').stop().velocity("scroll", {duration: config.timing.fast(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                }
            }
            else if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0 || event.keyCode == 40 || event.keyCode == 34) {
                event.preventDefault();
                if(scrollPos == header) {
                    $('#info').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == info) {
                    $('#community').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                } else if (scrollPos == community) {
                    $('footer').stop().velocity("scroll", {duration: config.timing.fast(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
                }
            }
            else if (event.keyCode == 36) {
                $('header').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
            }
            else if (event.keyCode == 35) {
                $('footer').stop().velocity("scroll", {duration: config.scrollSettings.scrollSpeed(), easing: config.scrollSettings.scrollType(), begin: function() {window.scrollTimer = true;}, complete: function() {window.scrollTimer = false;}});
            }
        }
    });
};

scrollmanagement.articlescroll = function() {

};