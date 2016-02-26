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

gulp.task('_styles', function() {
    return gulp.src(config.paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS({
            processImportFrom: ['local']
        }))
        .pipe(rename(config.names.styles))
        .pipe(sourcemaps.write(config.paths.maps.dest))
        .pipe(gulp.dest(config.paths.styles.dest))
        .pipe(reload({stream:true}));
});