/**
 * serve
 * @author Steven Krebs
 * @description gulp task for local showcasing, mostly used during development
 * @param --dev should be issued to build debuggable and sourcemapped files
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

// Gulp Dependencies
var gulp        = require('gulp'),
    config      = require('../config'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

//Watch and Serve files in dev
gulp.task('serve', ['_styles', '_scripts'], function () {
    browserSync.init({
        server: {
            baseDir: config.paths.dist
        }
    });
    //scripts are handled via watchify, thus no gulp.watch for it.
    gulp.watch([config.paths.styles.modules, config.paths.styles.src],['_styles']);
    gulp.watch([config.paths.locales, config.paths.template, config.paths.includes], reload);
});