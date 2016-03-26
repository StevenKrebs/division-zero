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
    prefix      = require('gulp-autoprefixer'),

//Source mapping Dependencies
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('_styles', function() {
    return gulp.src(config.paths.styles.src)
        .pipe(gulpif(environment.dev, sourcemaps.init(config.compiler.sourcemaps)))
        .pipe(glob())
        .pipe(sass())
        .pipe(prefix({browsers: config.compiler.browsers}))
        .pipe(gulpif(!environment.dev, cleanCSS(config.compiler.cleanCSS)))
        .pipe(rename(config.names.rename))
        .pipe(gulpif(environment.dev, sourcemaps.write()))
        .pipe(gulp.dest(config.paths.styles.dest))
        .pipe(reload(config.compiler.browserSync.styles));
});