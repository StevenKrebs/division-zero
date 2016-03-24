var angular         = require('angular'),
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap'),
    config          = require('../config.js'),
    app         =   angular.module(config.angularConfig.global.appName);

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

//Parallax scene
app.factory('parallaxScene', function() {
    return {
        setAnimation : function(elem, trigger, smController, debug){
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