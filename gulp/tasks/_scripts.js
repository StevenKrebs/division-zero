/**
 * _scripts
 * //angularCMS
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
    gutil       = require('gulp-util'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Script Dependencies
    browserify  = require('browserify'),
    bulkify     = require('bulkify'),
    watchify    = require('watchify'),
    tsify       = require('tsify'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

var browserifyConfig = {
        entries: [config.paths.scripts.src],
        transform: [bulkify]
    },
    b = watchify(browserify(browserifyConfig));

gulp.task('_scripts', bundler);
b.on('update', bundler);

function bundler() {
    return b.plugin(tsify, { noImplicitAny: true })
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(config.names.temp))
            .pipe(buffer())
            .pipe(gulpif(environment.dev, sourcemaps.init(config.compiler.sourcemaps)))
            .pipe(gulpif(!environment.dev, uglify()))
            .on('error', gutil.log.bind(gutil, 'Uglify Error'))
            .pipe(rename(config.names.rename))
            .pipe(gulpif(environment.dev, sourcemaps.write()))
            .pipe(gulp.dest(config.paths.scripts.dest))
            .pipe(reload(config.compiler.browserSync.scripts));
}
