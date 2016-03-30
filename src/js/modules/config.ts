/**
 * config-object
 * @author Steven Krebs
 * @description Provides (mostly script internal) settings
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

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