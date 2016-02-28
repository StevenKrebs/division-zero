// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Script Dependencies
    browserify  = require('gulp-browserify'),
    bulkify     = require('bulkify'),
    uglify      = require('gulp-uglify'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('_scripts', function() {
    return gulp.src(config.paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(browserify({
            transform: ['bulkify']
        }))
        .pipe(uglify())
        .pipe(rename(config.names.scripts))
        .pipe(sourcemaps.write(config.paths.maps.dest))
        .pipe(gulp.dest(config.paths.scripts.dest))
        .pipe(reload({stream:true, once: true}));
});
