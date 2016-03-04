//Modules
var animator        = module.exports = {},
    scrollmagic     = require('scrollmagic'),
    gsap            = require('gsap'),
    velocity        = require('velocity-animate');

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
            }, ease: Linear.easeInOut
        },{
            css: {
                'background-position': "50% -200px"
            }, ease: Linear.easeInOut
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

desktop.createInfo = function(controller, debug) {

    var infoScene = new scrollmagic.Scene({
        triggerElement: '#info',
        triggerHook: "onEnter",
        duration: "100%",
        offset: 200
    });

        infoScene.on("shift", function(event){
            $('#info-about').velocity({
                translateY: 500,
                opacity: 0
            },{
                duration: 0
            });
            $('#info-rules').velocity({
                translateY: 500,
                opacity: 0
            },{
                duration: 0
            });
            $('#info-goals').velocity({
                translateY: 500,
                opacity: 0
            },{
                duration: 0
            });
        });

        infoScene.on("enter", function(event) {
            $('#info-about').velocity({
                translateY: 0,
                opacity: 1
            },{
                duration: 500
            });
            $('#info-rules').velocity({
                translateY: 0,
                opacity: 1
            },{
                duration: 1000
            });
            $('#info-goals').velocity({
                translateY: 0,
                opacity: 1
            },{
                duration: 1500
            });
        });

        infoScene.addTo(controller);

    if (debug == true) {
        infoScene.addIndicators();
    }

    return infoScene;
};

desktop.createCommunity = function(controller, debug) {

    var communityScene = new scrollmagic.Scene({
        triggerElement: '#community',
        triggerHook: "onEnter",
        duration: "100%",
        offset: 200
    });

        communityScene.on("shift", function(event) {
            $('#community-apply').velocity({
                translateX: -1500,
                opacity: 0
            },{
                duration: 0
            });
            $('#community-discord').velocity({
                translateX: 1500,
                opacity: 0
            },{
                duration: 0
            });
        });

        communityScene.on('enter',function(event) {
            $('#community-apply').velocity({
                translateX: 0,
                opacity: 1
            },{
                duration: 1000
            });
            $('#community-discord').velocity({
                translateX: 0,
                opacity: 1
            },{
                duration: 1000
            });
        });

        communityScene.addTo(controller);

    if (debug == true) {
        communityScene.addIndicators();
    }

    return communityScene;
};


//Mobile Animations
var mobile = animator.mobile = {};
