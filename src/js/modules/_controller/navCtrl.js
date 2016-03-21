var angular     =   require('angular'),
    config      =   require('../config.js'),
    velocity    =   require('velocity-animate'),
    app         =   angular.module('division_zero');

app.controller('navCtrl',['$scope','$window', 'scrollPos', function($scope, $window, scrollPos){
    if(config.windowSizes.checkDesktop()) {
        $scope.desktop = true;
    } else {
        $scope.mobile = true;
    }
    angular.element($window).bind("scroll", function() {
        $scope.scrollPos = $(document).scrollTop() + $(window).height()/2;
        if($scope.desktop == true) {
            scrollPos.getScrollPos($scope.scrollPos, $('.desktop-nav span'));
        } else {
            scrollPos.getScrollPos($scope.scrollPos, $('.mobile-nav span'));
        }
    });
}]);