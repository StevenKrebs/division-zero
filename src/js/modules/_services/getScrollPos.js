var angular         = require('angular'),
    config          = require('../config.js'),
    app         =   angular.module(config.angularSettings.appName());

app.factory('scrollPos', function() {
   function getScrollPos(scrollPos, menuItems, identifier) {
       $(menuItems).each(function() {
           var link = $(this),
               href = $(link.attr(identifier)),
               topPos = $(href).position().top,
               bottomPos = $(href).position().top + $(href).outerHeight();
           if (scrollPos > topPos && scrollPos <= bottomPos) {
               link.addClass('highlight');
           } else if ($(document).scrollTop() + $(window).height() * 0.9 > $($(menuItems).last().attr(identifier)).position().top) {
               $(menuItems).removeClass('highlight');
               $(menuItems).last().addClass('highlight');
           } else {
               link.removeClass('highlight');
           }
       });
   }
    return {
        getScrollPos : getScrollPos
    }
});
