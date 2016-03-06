var exports = module.exports = {};

//Discord server ID
exports.discord = function() {
    var discord_server = '148016303809101825';
    return discord_server
};

//Window size values
exports.windowSizes = {};

exports.windowSizes.tablet = function() {
    return 1024;
};

exports.windowSizes.checkTablet = function() {
   return $(window).height() > exports.windowSizes.tablet() || $(window).width() > exports.windowSizes.tablet()
};

exports.windowSizes.mobile = function() {
    return 768;
};

exports.windowSizes.checkMobile = function() {
  return $(window).width() <= exports.windowSizes.mobile()
};

//Generic animation timings
exports.timing = {};

exports.timing.slow = function() {
    return 1800
};

exports.timing.slower = function() {
    return 2000
};

exports.timing.regular = function() {
    return 1500
};

exports.timing.fast = function() {
    return 1000
};

//Scroll behaviour settings
exports.scrollSettings = {};

exports.scrollSettings.scrollSpeed = function() {
    return exports.timing.regular()
};
exports.scrollSettings.scrollType = function() {
    return "swing"
};