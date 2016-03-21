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
           if (scrollPos <= $(window).height()) {
               link.removeClass('highlight');
               $($menuItems).first().addClass('highlight');
           }
           if (scrollPos >= topPos && scrollPos < bottomPos) {
               link.addClass('highlight');
           } else {
               link.removeClass('highlight');
           }
           if (scrollPos + $(window).height()/2 >= $(document).outerHeight()) {
               link.removeClass('highlight');
               $($menuItems).last().addClass('highlight');
           }
       });
   }
    return {
        getScrollPos : getScrollPos
    }
});
