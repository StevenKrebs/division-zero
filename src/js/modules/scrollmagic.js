var animator        = module.exports = {},
    scrollmagic     = require('scrollmagic'),
    animation       = require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    debug           = require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    gsap            = require('gsap'),
    css             = require('gsap/src/uncompressed/plugins/CSSPlugin.js'),
    velocity        = require('velocity-animate');

animator.createController = function() {
    var controller = new scrollmagic.Controller(
        {
            globalSceneOptions: {
                triggerHook: "onEnter",
                duration: "200%"
            }
        });
    return controller
};

animator.removeScene = function(controller, scene) {
  return controller.removeScene(scene);
};

animator.destroyController = function(controller) {
    return controller.destroy(true);
};

var desktop = animator.desktop = {};

desktop.createParallax = function(controller, debug) {
    var parallaxEffect = new TweenMax.fromTo("#info", 1,
        {
            css: {
                'background-position': "50% 200px"
            }, ease: Linear.easeInOut
        },{
            css: {
                'background-position': "50% -200px"
            }, ease: Linear.easeInOut
        }
    );
    var parallax = new scrollmagic.Scene({
        triggerElement: "main"
    }).setTween(parallaxEffect).addTo(controller);
    if (debug == true) {
        parallax.addIndicators();
    }

    return parallax;
};

desktop.createInfo = function(controller, debug) {
    var infoAnim = new TimelineMax();
    infoAnim.add(
        [
            TweenMax.fromTo('#info-about', 1,
                {
                    css: {
                        'opacity' : 0,
                        '-webkit-transform': 'translateY(500px)',
                        'transform': 'translateY(500px)'
                    }, ease: Linear.easeInOut
                },
                {
                    css: {
                        'opacity' : 1,
                        '-webkit-transform': 'translateY(0px)',
                        'transform': 'translateY(0px)'
                    }, ease: Linear.easeInOut
                }
            ),
            TweenMax.fromTo('#info-rules', 1,
                {
                    css: {
                        'opacity' : 0,
                        '-webkit-transform': 'translateY(1000px)',
                        'transform': 'translateY(1000px)'
                    }, ease: Linear.easeInOut
                },
                {
                    css: {
                        'opacity' : 1,
                        '-webkit-transform': 'translateY(0px)',
                        'transform': 'translateY(0px)'
                    }, ease: Linear.easeInOut
                }
            ),
            TweenMax.fromTo('#info-goals', 1,
                {
                    css: {
                        'opacity' : 0,
                        '-webkit-transform': 'translateY(1500px)',
                        'transform': 'translateY(1500px)'
                    }, ease: Linear.easeInOut
                },
                {
                    css: {
                        'opacity' : 1,
                        '-webkit-transform': 'translateY(0px)',
                        'transform': 'translateY(0px)'
                    }, ease: Linear.easeInOut
                }
            )
        ]
    );

    var infoScene = new scrollmagic.Scene({
        triggerElement: 'header'
    }).setTween(infoAnim).addTo(controller);

    if (debug == true) {
        infoScene.addIndicators();
    }

    return infoScene;
};

desktop.createCommunity = function(controller, debug) {
    var communityAnim = new TimelineMax();
    communityAnim.add(
        [
            TweenMax.fromTo('#community-apply',1,
                {
                    css: {
                        'opacity': 0,
                        '-webkit-transform': 'translateX(-1500px)',
                        'transform': 'translateX(-1500px)'
                    },ease: Linear.easeInOut
                },
                {
                    css: {
                        'opacity': 1,
                        '-webkit-transform': 'translateX(0px)',
                        'transform': 'translatex(0px)'
                    },ease: Linear.easeInOut
                }
            ),
            TweenMax.fromTo('#community-discord',1,
                {
                    css: {
                        'opacity': 0,
                        '-webkit-transform': 'translateX(1500px)',
                        'transform': 'translateX(1500px)'
                    },ease: Linear.easeInOut
                },
                {
                    css: {
                        'opacity': 1,
                        '-webkit-transform': 'translateX(0px)',
                        'transform': 'translatex(0px)'
                    },ease: Linear.easeInOut
                }
            )
        ]
    );

    var communityScene = new scrollmagic.Scene({
        triggerElement: '#info'
    }).setTween(communityAnim).addTo(controller);

    if (debug == true) {
        communityScene.addIndicators();
    }

    return communityScene;
};


var mobile = animator.mobile = {};
