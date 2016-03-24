var config = module.exports = {};

config.windowSizes = {
    desktop: 1024,
    mobile: 768,
    check: {
        desktop: function () {
            return $(window).height() > config.windowSizes.desktop || $(window).width() > config.windowSizes.desktop
        },
        mobile: function () {
            return $(window).height() < config.windowSizes.desktop || $(window).width() < config.windowSizes.desktop
        }
    }
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
    }
};

config.discord = {
    serverID: '148016303809101825'
};