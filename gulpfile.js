// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('watch', function() {
    gulp.watch('dev/js/scripts.js', ['browserify','uglify']);
    gulp.watch('dev/js/style.less', ['less','minify']);
});

gulp.task('build', ['browserify','uglify','less','minify']);

gulp.task('browserify', function() {
    return gulp.src('dev/js/scripts.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('scripts.bundle.js'))
        .pipe(gulp.dest('dev/js/'));
});

gulp.task('uglify', function(){
    return gulp.src('dev/js/scripts.bundle.js')
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('less', function() {
    return gulp.src('dev/css/style.less')
        .pipe(less())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dev/css/'));
});

gulp.task('minify', function() {
    return gulp.src('dev/css/styles.css')
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'));
});
