var gulp            = require('gulp'),
    taskListing     = require('gulp-task-listing');

gulp.task('default',taskListing.withFilters(
    null, 'default'
));

require('require-dir')('./gulp/tasks', { recurse: true });