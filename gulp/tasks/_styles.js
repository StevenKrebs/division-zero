// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config.js'),
    gulpif      = require('gulp-if'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Style Dependencies
    sass        = require('gulp-sass'),
    glob        = require('gulp-sass-glob'),
    cleanCSS    = require('gulp-clean-css'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('_styles', function() {
    return gulp.src(config.paths.styles.src)
        .pipe(gulpif(environment.dev, sourcemaps.init()))
        .pipe(glob())
        .pipe(sass())
        .pipe(gulpif(!environment.dev, cleanCSS({
            processImportFrom: ['local']
        })))
        .pipe(rename(config.names.styles))
        .pipe(gulpif(environment.dev, sourcemaps.write(config.paths.maps.dest)))
        .pipe(gulp.dest(config.paths.styles.dest))
        .pipe(reload({stream:true}));
});