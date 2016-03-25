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