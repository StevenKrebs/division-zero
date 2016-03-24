var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.controller('navCtrl',['$scope','$window','scrollPos', function($scope, $window, scrollPos){
    if(config.windowSizes.check.desktop()) {
        $scope.desktop = true;
    } else {
        $scope.mobile = true;
    }
    angular.element($window).bind("scroll", function() {
        $scope.scrollPos = config.scrollSettings.scrollPos.getTrigger();
        if($scope.desktop == true) {
            scrollPos.getScrollPos($scope.scrollPos, config.scrollSettings.scrollPos.menuItems.getDesktopItems(), config.scrollSettings.scrollPos.identifier, config.scrollSettings.scrollPos.highlight);
        } else {
            scrollPos.getScrollPos($scope.scrollPos, config.scrollSettings.scrollPos.menuItems.getMobileItems(), config.scrollSettings.scrollPos.identifier, config.scrollSettings.scrollPos.highlight);
        }
    });
}]);