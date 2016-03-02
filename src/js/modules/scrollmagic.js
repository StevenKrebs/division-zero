//Setting up basic controller
var controller =  new window.scrollmagic.Controller(
    {
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
        }
    });


//Setting up parallax scroll effect
var parallaxEffect = new TweenMax.fromTo("#parallax", 1,
    {
        css: {
                'background-position': "50% 200px"
            }, ease: Linear.easeOut
    },{
        css: {
                'background-position': "50% -200px"
            }, ease: Linear.easeOut
    }
);
var parallax = new window.scrollmagic.Scene({
    triggerElement: "main"
}).setTween(parallaxEffect).addTo(controller);

//Setting up first three article animations
var infoAboutAnim = new TweenMax.fromTo('#info-about', 1,
    {
        css: {
            'opacity' : 0,
            '-webkit-transform': 'translateY(25%)',
            'transform': 'translateY(25%)'
        }, ease: Linear.easeOut
    },
    {
        css: {
            'opacity' : 1,
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)'
        }, ease: Linear.easeOut
    }
);

var infoAboutScene = new window.scrollmagic.Scene({
    triggerHook: "onEnter",
    duration: 500
}).setTween(infoAboutAnim).addTo(controller);

window.animator = controller;