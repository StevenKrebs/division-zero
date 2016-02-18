// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Browser sync
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('js', function() {
    return gulp.src('js/scripts.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('css', function() {
    return gulp.src('css/styles.less')
        .pipe(less())
        .pipe(minifyCSS({
            processImport: false
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('serve', ['css', 'js', 'browserSync'], function () {
    gulp.watch('js/scripts.js', ['js']);
    gulp.watch('css/styles.less', ['css']);
    gulp.watch('index.html', ['bs-reload']);
});
gulp.task('build', ['css', 'js'], function () {
});
