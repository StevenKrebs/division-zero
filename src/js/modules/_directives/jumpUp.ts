/**
 * jumpUp-animation
 * @author Steven Krebs
 * @description angular.js directive for jump-up animation
 * @copyright 2016, Steven Krebs
 * @license MIT
 */


declare var TimelineMax:any, Expo: any, TweenMax: any;

var angular:any =   require('angular'),
    config      =   require('../config'),
    scrollmagic:any = require('scrollmagic'),
    gsap            = require('gsap'),
    app         =   angular.module(config.angularConfig.global.appName);

app.directive('jumpUp',['jumpUpScene', 'scrollmagicController', 'checkWindowSize', function(jumpUpScene:any, scrollmagicController:any, checkWindowSize:any){
    return {
        restrict: 'A',
        scope: {
            jumpUp : '@',
            loaded : '&'
        },
        link: function(scope:any, elem:any) {
            if(checkWindowSize.getDesktop() && scope.loaded) {
                jumpUpScene.setAnimation($(elem).find(scope.jumpUp), elem, scrollmagicController.createController(), config.debugConfig.status);
            }
        }
    }
}]);

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    require('gsap/src/uncompressed/plugins/CSSPlugin.js');

app.factory('jumpUpScene', function() {
    return {
        setAnimation : function(elem:any, trigger:string, smController:any, debug:boolean) {
            var timeline:any = new TimelineMax();
            timeline.add(
                TweenMax.fromTo(elem,2,
                    {
                        css: {
                            'opacity': 0,
                            '-webkit-transform': 'translateY(250px)',
                            'transform': 'translateY(250px)'
                        }, ease: Expo.easeOut
                    },
                    {
                        css: {
                            'opacity': 1,
                            '-webkit-transform': 'translateY(0)',
                            'transform': 'translateY(0px)'
                        }, ease: Expo.easeOut
                    }
                )
            );
            var scene = new scrollmagic.Scene({
                triggerElement: trigger[0],
                triggerHook: 'onCenter',
                duration: "80%"
            });
            timeline.pause();
            scene.on("enter",function() {
                timeline.play();
            });
            scene.addTo(smController);
            scene.on("end", function (e:any) {
                if (e.scrollDirection === "REVERSE") {
                    scene.reverse(false)
                }
            });
            if (debug == true) {
                scene.addIndicators();
            }
            return scene;
        }
    }
});
