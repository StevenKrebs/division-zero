/**
 * getScrollPos
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js service to get the scroll position (relevant for scroll based animations)
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular:any     = require('angular'),
    config          = require('../config'),
    app             = angular.module(config.angularConfig.global.appName);

app.factory('scrollPos', function() {
    return {
        getScrollPos : function(scrollPos:any, menuItems:any, identifier:any, highlight:any) {
            $(menuItems).each(function() {
                var link:any        = $(this),
                    href:any        = $(link.attr(identifier)),
                    topPos:any      = $(href).position().top,
                    bottomPos:any   = $(href).position().top + $(href).outerHeight();
                if (scrollPos > topPos && scrollPos <= bottomPos) {
                    link.addClass(highlight);
                } else if ($(document).scrollTop() + $(window).height() * 0.9 > $($(menuItems).last().attr(identifier)).position().top) {
                    $(menuItems).removeClass(highlight);
                    $(menuItems).last().addClass(highlight);
                } else {
                    link.removeClass(highlight);
                }
            });
        }
    }
});
