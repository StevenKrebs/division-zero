var angular     =   require('angular'),
    config      =   require('../config.js'),
    velocity    =   require('velocity-animate'),
    app         =   angular.module('division_zero');

app.controller('navCtrl',['$scope','$window', function($scope, $window){
    if(config.windowSizes.checkDesktop()) {
        $scope.desktop = true;
    } else {
        $scope.mobile = true;
    }
    angular.element($window).bind("scroll", function() {
        if($scope.desktop == true) {
            var scrollPos = $(document).scrollTop() + $(window).height();
        } else {
            var scrollPos = $(document).scrollTop() + $(window).height() / 2;
        }
    });
}]);

// app.directive('scroll', function($window) {
//     return function(scope, element, attrs) {
//         angular.element($window).bind("scroll", function() {
//             if(config.windowSizes.checkMobile()) {
//                 var scrollPos = $(document).scrollTop() + $(window).height() / 2;
//                 $('.mobile-nav a').each(function () {
//                     var link = $(this),
//                         href = $(link.attr('href')),
//                         topPos = $(href).position().top,
//                         bottomPos = $(href).position().top + $(href).outerHeight();
//                     if (scrollPos >= topPos && scrollPos < bottomPos) {
//                         link.addClass('highlight');
//                     } else {
//                         link.removeClass('highlight');
//                     }
//                 })
//             } else {
//                 var scrollPos = $(document).scrollTop() + $(window).height();
//                 $('.desktop-nav a').each(function () {
//                     var link = $(this),
//                         href = $(link.attr('href')),
//                         topPos = $(href).position().top,
//                         bottomPos = $(href).position().top + $(href).outerHeight();
//                     if (scrollPos > topPos && scrollPos <= bottomPos) {
//                         link.addClass('highlight');
//                     } else {
//                         link.removeClass('highlight');
//                     }
//                     if (scrollPos == $('footer').position().top + $('footer').outerHeight()) {
//                         link.removeClass('highlight');
//                         $('nav a[href="#footer"]').addClass('highlight');
//                     }
//                 })
//             }
//             scope.$apply();
//         });
//     };
// });