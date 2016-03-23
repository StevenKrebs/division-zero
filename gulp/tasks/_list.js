var gulp    =   require('gulp'),
    taskListing     = require('gulp-task-listing');

gulp.task('list',taskListing.withFilters(
    null, 'default'
));