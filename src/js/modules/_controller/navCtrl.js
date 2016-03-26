/**
 * navCtrl
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js nav-element-controller
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular     =   require('angular'),
    config      =   require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

app.controller('navCtrl',['$scope','$window','scrollPos','checkWindowSize', function($scope, $window, scrollPos, checkWindowSize){
    function checkSizes() {
        $scope.desktop = checkWindowSize.getDesktop();
    }

    angular.element($window).bind({
        scroll: function() {
            $scope.scrollPos = config.scrollSettings.scrollPos.getTrigger();
            if($scope.desktop) {
                scrollPos.getScrollPos($scope.scrollPos, config.scrollSettings.scrollPos.menuItems.getDesktopItems(), config.scrollSettings.scrollPos.identifier, config.scrollSettings.scrollPos.highlight);
            } else {
                scrollPos.getScrollPos($scope.scrollPos, config.scrollSettings.scrollPos.menuItems.getMobileItems(), config.scrollSettings.scrollPos.identifier, config.scrollSettings.scrollPos.highlight);
            }
        },
        resize : function() {
            checkSizes();
            $scope.$apply();
        },
        orientationchange : function() {
            checkSizes();
            $scope.$apply();
        },
        load : checkSizes()
    })
}]);