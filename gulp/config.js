/**
 * gulp-config
 * @author Steven Krebs
 * @description gulp-configuration file
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

module.exports = {};

module.exports.paths = {
    base: './',
    styles: {
        src: './src/css/styles.scss',
        modules: './src/css/modules/**/*.scss',
        dest: './dist/css'
    },
    scripts: {
        src: './src/js/scripts.js',
        modules: './src/js/modules/**/*.js',
        dest: './dist/js'
    },
    template: './dist/index.html',
    locales: './dist/js/lang/*.json',
    dist: './dist'
};

module.exports.names = {
    rename: {
        suffix: '.min'
    },
    temp: 'scripts.js'
};

module.exports.compiler = {
    sourcemaps: {
        loadMaps: true
    },
    styles: {
        browsers: [
            "Android 2.3",
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 8",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6"
        ],
        browserSync: {
            stream: true
        },
        cleanCSS: {
            processImportFrom: ['local']
        }
    },
    scripts: {
        browserify: {
            entries: [module.exports.paths.scripts.src]
        },
        browserSync: {
            stream: true,
            once: true
        },
        watchify: {
            poll: true
        },
        tsify: {
            noImplicitAny: true
        }
    }
};