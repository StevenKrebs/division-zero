// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Script Dependencies
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),

//Source mapping Dependencies
    sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    return gulp.src(config.paths.scripts.src, {
            base : config.paths.base
        })
        .pipe(sourcemaps.init())
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(uglify())
        .pipe(rename(config.names.scripts))
        .pipe(sourcemaps.write(config.paths.maps.scripts))
        .pipe(gulp.dest(config.paths.scripts.dest))
        .pipe(reload({stream:true, once: true}));
});
