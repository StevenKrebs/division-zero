var angular     =   require('angular'),
    app         =   angular.module('division_zero'),
    velocity    =   require('velocity-animate'),
    config      =   require('../_configs/config.js');
    

app.directive('scrollToScene', function() {
    return {
        restrict: 'A',
        scope: {
            scrollToScene: "@"
        },
        link: function(scope, $elm) {
            $elm.on('click', function () {
                $(scope.scrollToScene).velocity("scroll", {
                    duration: config.scrollSettings.scrollSpeed(),
                    easing: config.scrollSettings.scrollType()
                });
            });
        }
    }
});