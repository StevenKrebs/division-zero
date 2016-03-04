//Modules
var animator        = module.exports = {},
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap');

//Plugins
    require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    require('gsap/src/uncompressed/plugins/CSSPlugin.js');


//Controller Management
animator.createController = function() {
    var controller = new scrollmagic.Controller();
    return controller
};

animator.removeScene = function(controller, scene) {
  return controller.removeScene(scene);
};

animator.destroyController = function(controller) {
    return controller.destroy(true);
};


//Desktop Animations
var desktop = animator.desktop = {};

desktop.createParallax = function(controller, debug) {
    var parallaxEffect = new TweenMax.fromTo("#info", 1,
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
    var parallax = new scrollmagic.Scene({
        triggerElement: "main",
        triggerHook: "onEnter",
        duration: "200%"
    }).setTween(parallaxEffect).addTo(controller);
    if (debug == true) {
        parallax.addIndicators();
    }

    return parallax;
};

desktop.createInfoAnim = function(controller, debug) {
    var infoAnim = new TimelineMax();
    infoAnim.add(
        [
            TweenMax.fromTo('#info-about', 1,
                {
                    css: {
                        'opacity': 0,
                        '-webkit-transform': 'translateY(500px)',
                        'transform': 'translateY(500px)'
                    }, ease: Linear.easeNone
                },
                {
                    css: {
                        'opacity': 1,
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0px)'
                    }, ease: Linear.easeNone
                }
            ),
            TweenMax.fromTo('#info-rules', 1,
                {
                    css: {
                        'opacity': 0,
                        '-webkit-transform': 'translateY(1000px)',
                        'transform': 'translateY(1000px)'
                    }, ease: Linear.easeNone
                },
                {
                    css: {
                        'opacity': 1,
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    }, ease: Linear.easeNone
                }
            ),
            TweenMax.fromTo('#info-goals', 1,
                {
                    css: {
                        'opacity': 0,
                        '-webkit-transform': 'translateY(1500px)',
                        'transform': 'translateY(1500px)'
                    }, ease: Linear.easeNone
                },
                {
                    css: {
                        'opacity': 1,
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    }, ease: Linear.easeNone
                }
            )
        ]
    );

    var infoScene = new scrollmagic.Scene({
        triggerElement: '#info',
        triggerHook: 'onEnter',
        duration: "80%"
    });
    infoScene.setTween(infoAnim);
    if (debug == true) {
        infoScene.addIndicators();
    }
    infoScene.addTo(controller);
    infoScene.on("end", function (e) {
        if (e.scrollDirection === "REVERSE") {
            infoScene.reverse(false)
        }
    });
    return infoScene
};

desktop.createCommunityAnim = function(controller, debug) {
    var communityAnim = new TimelineMax();
        communityAnim.add(
            [
                TweenMax.fromTo('#community-apply', 1,
                    {
                        css: {
                            'opacity': 0,
                            '-webkit-transform': 'translateY(500px)',
                            'transform': 'translateY(500px)'
                        }, ease: Linear.easeNone
                    },
                    {
                        css: {
                            'opacity': 1,
                            '-webkit-transform': 'translateY(0)',
                            'transform': 'translateY(0px)'
                        }, ease: Linear.easeNone
                    }
                ),
                TweenMax.fromTo('#community-discord', 1,
                    {
                        css: {
                            'opacity': 0,
                            '-webkit-transform': 'translateY(1000px)',
                            'transform': 'translateY(1000px)'
                        }, ease: Linear.easeNone
                    },
                    {
                        css: {
                            'opacity': 1,
                            '-webkit-transform': 'translateY(0)',
                            'transform': 'translateY(0)'
                        }, ease: Linear.easeNone
                    }
                )
            ]
        );
    var communityScene = new scrollmagic.Scene({
        triggerElement: '#community',
        triggerHook: 'onEnter',
        duration: "80%"
    });
    communityScene.setTween(communityAnim);
    if (debug == true) {
        communityScene.addIndicators();
    }
    communityScene.addTo(controller);
    communityScene.on("end", function (e) {
        if (e.scrollDirection === "REVERSE") {
            communityScene.reverse(false)
        }
    });

    return communityScene
};


//Mobile Animations
var mobile = animator.mobile = {};
