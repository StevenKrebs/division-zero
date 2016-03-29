/**
 * _scripts
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



gulp.task('_scripts', bundler);

//Set if dev or deploy
var b = null;
if (environment.dev) {
    b = watchify(browserify(config.compiler.scripts.browserify), config.compiler.scripts.watchify);
    b.on('update', function(ids){
        gutil.log('[' + gutil.colors.blue('Watchify') + '] ' + "File(s) changed: " + gutil.colors.magenta(ids));
        bundler()
    });

    b.on('log', function(msg) {
        gutil.log('[' + gutil.colors.blue('Watchify') + '] ' + "Finished: " + gutil.colors.magenta(msg));
    });
} else {
    b = browserify(config.compiler.scripts.browserify);
}

//The actual building pipe
function bundler() {
    return b.plugin(tsify, config.compiler.scripts.tsify)
            .transform(bulkify)
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
            .pipe(reload(config.compiler.scripts.browserSync));
}
