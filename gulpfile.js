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

gulp.task('watch', function() {
    gulp.watch('js/scripts.js', ['browserify']);
    gulp.watch('js/styles.less', ['less']);
});

gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("index.html").on("change", reload);
    gulp.watch("css/scripts.min.js").on("change", reload);
    gulp.watch("js/styles.min.css").on("change", reload);
});

gulp.task('build', ['browserify','less']);

gulp.task('browserify', function() {
    return gulp.src('js/scripts.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('less', function() {
    return gulp.src('css/styles.less')
        .pipe(less())
        .pipe(minifyCSS({
            processImport: false
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'));
});
