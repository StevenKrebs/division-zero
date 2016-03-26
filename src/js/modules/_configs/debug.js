var angular     = require('angular'),
    config      = require('../config'),
    app         = angular.module(config.angularConfig.global.appName);

app.config(['$compileProvider', function ($compileProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(config.angularConfig.debug);
}]);
