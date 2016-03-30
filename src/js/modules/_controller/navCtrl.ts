/**
 * navCtrl
 * @author Steven Krebs
 * @description angular.js nav-element-controller
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var angular     =   require('angular'),
    config      =   require('../config'),
    app         =   angular.module(config.angularConfig.global.appName);

app.controller('navCtrl',['$scope','$window','checkWindowSize', function($scope:any, $window:any, checkWindowSize:any){
    function checkSizes() {
        $scope.desktop = checkWindowSize.getDesktop();
    }
    angular.element($window).bind({
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