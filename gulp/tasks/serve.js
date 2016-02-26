// Gulp Dependencies
var gulp        = require('gulp'),
    config      = require('../config');

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

//Watch and Serve files in dev
gulp.task('serve', ['styles', 'scripts'], function () {
    browserSync.init({
        server: {
            baseDir: config.paths.dist
        }
    });
    gulp.watch(config.paths.scripts.all, ['scripts']);
    gulp.watch(config.paths.styles.all, ['styles']);
    gulp.watch(config.paths.template, reload);
});