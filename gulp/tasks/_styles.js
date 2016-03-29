/**
 * _styles
 * @author Steven Krebs
 * @description gulp subtask for css-preprocessing
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

// Gulp Dependencies
var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    config      = require('../config.js'),
    gulpif      = require('gulp-if'),
    gutil       = require('gulp-util'),

// Browser sync
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

// Style Dependencies
    sass        = require('gulp-sass'),
    glob        = require('gulp-sass-glob'),
    cleanCSS    = require('gulp-clean-css'),
    prefix      = require('gulp-autoprefixer'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('_styles', function() {
    return gulp.src(config.paths.styles.src)
        .pipe(gulpif(environment.dev, sourcemaps.init(config.compiler.sourcemaps)))
        .pipe(glob())
        .on('error', gutil.log.bind(gutil, 'Globbing Error'))
        .pipe(sass())
        .on('error', gutil.log.bind(gutil, 'Preprocessor Error'))
        .pipe(prefix({browsers: config.compiler.styles.browsers}))
        .on('error', gutil.log.bind(gutil, 'Prefixer Error'))
        .pipe(gulpif(!environment.dev, cleanCSS(config.compiler.styles.cleanCSS)))
        .on('error', gutil.log.bind(gutil, 'Compressing Error'))
        .pipe(rename(config.names.rename))
        .pipe(gulpif(environment.dev, sourcemaps.write()))
        .pipe(gulp.dest(config.paths.styles.dest))
        .pipe(reload(config.compiler.styles.browserSync));
});