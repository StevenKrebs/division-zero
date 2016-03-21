var angular         = require('angular'),
    app             = angular.module('division_zero'),
    config          = require('../config.js');

app.factory('scrollPos', function() {
   function getScrollPos(scrollPos, $menuItems) {
       $($menuItems).each(function() {
           var link = $(this),
               href = $(link.attr('scroll-to-scene')),
               topPos = $(href).position().top,
               bottomPos = $(href).position().top + $(href).outerHeight();
           if (scrollPos > topPos && scrollPos <= bottomPos) {
               link.addClass('highlight');
           } else {
               link.removeClass('highlight');
           }
       });
   }
    return {
        getScrollPos : getScrollPos
    }
});
