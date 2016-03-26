/**
 * gulpfile.js
 * //division-zero.org
 * @author Steven Krebs
 * @description wrapper file for gulp-buildstream
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

var gulp            = require('gulp'),
    util            = require('gulp-util'),
    taskListing     = require('gulp-task-listing');

environment = {
    dev     :   !!util.env.dev
};

gulp.task('default',taskListing.withFilters(
    null, 'default'
));

require('require-dir')('./gulp/tasks', { recurse: true });