// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Style Dependencies
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),

//Source mapping Dependencies
    sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
    return gulp.src(config.paths.styles.src, {
            base : config.paths.base
        })
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS({
            processImportFrom: ['local']
        }))
        .pipe(rename(config.names.styles))
        .pipe(sourcemaps.write(config.paths.maps.styles))
        .pipe(gulp.dest(config.paths.styles.dest))
        .pipe(reload({stream:true}));
});