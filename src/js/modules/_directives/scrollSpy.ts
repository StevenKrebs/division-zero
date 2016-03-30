/**
 * scrollSpy
 * @author Steven Krebs
 * @description angular.js directive to set the menu-item active for the nav point currently in viewport
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular         =   require('angular'),
    config          =   require('../config'),
    app             =   angular.module(config.angularConfig.global.appName);

app.directive('scrollSpy',['scrollSpyService', '$window', '$timeout', function(scrollSpyService:any, $window:any, $timeout:any) {
    return {
        restrict: 'A',
        scope: {
            scrollSpy: '@',
            offset: '@',
            loaded: '&'
        },
        link: function(scope:any, element:any, attr:any) {
            var menu:any = $(element).find('a');

            function getActiveMenuItem() {
                var scrollPos:number = document.body.scrollTop + window.innerHeight;
                if (scope.offset) {
                    scrollPos = scrollPos - scope.offset;
                }
                $(menu).each(function() {
                    if (scrollSpyService.getActiveItem(this, scrollPos)) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                })
            }

            if (scope.loaded) {
                $timeout(function() {
                    getActiveMenuItem();
                    scope.$apply();
                },200)
            }

            angular.element($window).bind({
                scroll: function() {
                    getActiveMenuItem();
                    scope.$apply();
                }
            });
        }
    }
}]);

app.factory('scrollSpyService',[function() {
    return {
        getActiveItem : function(item:any, scrollPos:number) {
            var href:any        = $($(item).attr('href')),
                topPos:any      = href.position().top,
                bottomPos:any   = href.position().top + href.outerHeight();

            return scrollPos > topPos && scrollPos <= bottomPos
        }
    }
}]);