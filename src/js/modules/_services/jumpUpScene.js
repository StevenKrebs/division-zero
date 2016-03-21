var angular         = require('angular'),
    app             = angular.module('division_zero'),
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap'),
    config          = require('../config.js');

//Plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
require('gsap/src/uncompressed/plugins/CSSPlugin.js');

app.factory('jumpUpScene', function() {
    function setAnimation($elem, $trigger, $smController, debug) {
        var timeline = new TimelineMax();
        timeline.add(
            TweenMax.fromTo($elem,2,
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
            triggerElement: $trigger[0],
            triggerHook: 'onCenter',
            duration: "80%"
        });
        timeline.pause();
        scene.on("enter",function() {
            timeline.play();
        });
        scene.addTo($smController);
        scene.on("end", function (e) {
            if (e.scrollDirection === "REVERSE") {
                scene.reverse(false)
            }
        });
        if (debug == true) {
            scene.addIndicators();
        }
    }
    return {
        setAnimation : setAnimation
    }
});