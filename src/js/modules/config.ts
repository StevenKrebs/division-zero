/**
 * config.js
 * //division-zero.org
 * @author Steven Krebs
 * @description Provides (mostly script internal) settings
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

declare var module:any;
declare var $:any;

var config:any = module['exports'] = {};

config.windowSizes = {
    desktop: 1134,
    mobile: 768
};

config.timing =  {
    slower: 2000,
    slow: 1800,
    regular: 1500,
    fast: 1000
};

config.scrollSettings =  {
    scrollSpeed: config.timing.regular,
    scrollType: "swing",
    scrollPos: {
        getTrigger: function() {
            return $(document).scrollTop() + $(window).height() / 2
        },
        menuItems: {
            getDesktopItems: function() {
                return $('.desktop-nav span')
            },
            getMobileItems: function(){
                return $('.mobile-nav span')
            }
        },
        identifier: 'scroll-to-scene',
        highlight: 'highlight'
    }
};

config.angularConfig = {
    global: {
        appName: 'division_zero'
    },
    routes: {
        locales: "/js/lang/"
    },
    debug: false
};

config.discord = {
    serverID: '148016303809101825'
};

config.debugConfig = {
    status : false
};