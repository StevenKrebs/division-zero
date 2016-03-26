/**
 * _scripts
 * //division-zero.org
 * @author Steven Krebs
 * @description gulp subtask for script bundling
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config'),
    gulpif      = require('gulp-if'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Script Dependencies
    browserify  = require('browserify'),
    bulkify     = require('bulkify'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('_scripts', function() {
    return browserify({
        entries: config.paths.scripts.src,
        transform: [bulkify]
    })
        .bundle()
        .pipe(source(config.names.temp))
        .pipe(buffer())
        .pipe(gulpif(environment.dev, sourcemaps.init(config.compiler.sourcemaps)))
        .pipe(gulpif(!environment.dev, uglify()))
        .pipe(rename(config.names.rename))
        .pipe(gulpif(environment.dev, sourcemaps.write()))
        .pipe(gulp.dest(config.paths.scripts.dest))
        .pipe(reload(config.compiler.browserSync.scripts));
});
