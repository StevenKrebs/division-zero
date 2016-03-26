var config = module.exports = {};

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