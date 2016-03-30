/**
 * parallax-animation
 * @author Steven Krebs
 * @description angular.js directive for parallax animations
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

declare var TweenMax: any, Linear: any;

var angular         = require('angular'),
    config          = require('../config'),
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap'),
    app             = angular.module(config.angularConfig.global.appName);

app.directive('parallax',['parallaxScene', 'scrollmagicController', 'checkWindowSize', function(parallaxScene:any, scrollmagicController:any, checkWindowSize:any){
    return {
        restrict: 'A',
        link: function(scope:any, elem:any) {
            if(checkWindowSize.getDesktop && scope.loaded) {
                parallaxScene.setAnimation(elem, elem, scrollmagicController.createController(), config.debugConfig.status);
            }
        }
    }
}]);

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

//Parallax scene
app.factory('parallaxScene', function() {
    return {
        setAnimation : function(elem:any, trigger:string, smController:any, debug:boolean){
            var parallaxEffect = new TweenMax.fromTo(elem, 1,
                {
                    css: {
                        'background-position': "50% 200px"
                    }, ease: Linear.easeNone
                },{
                    css: {
                        'background-position': "50% -200px"
                    }, ease: Linear.easeNone
                }
            );
            var scene = new scrollmagic.Scene({
                triggerElement: trigger[0],
                triggerHook: "onEnter",
                duration: "200%"
            }).setTween(parallaxEffect).addTo(smController);
            if (debug == true) {
                scene.addIndicators();
            }
            return scene;
        }
    }
});