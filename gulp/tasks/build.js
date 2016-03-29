/**
 * build.js
 * @author Steven Krebs
 * @description gulp task to build script & style files
 * @param --dev activates a debuggable, sourcemapped buildstream
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

// Gulp Dependencies
var gulp        = require('gulp');

//Prepare files for deploy
gulp.task('build', ['_styles', '_scripts'], function () {
});
