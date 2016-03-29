/**
 * parallaxScene
 * //division-zero.org
 * @author Steven Krebs
 * @description angular.js service to provide the actual parallax effect
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

declare var TweenMax: any;
declare var Linear: any;

var angular:any     = require('angular'),
    scrollmagic:any = require('scrollmagic'),
    gsap            = require('gsap'),
    config          = require('../config'),
    app             =   angular.module(config.angularConfig.global.appName);

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
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