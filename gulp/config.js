/**
 * config
 * //division-zero.org
 * @author Steven Krebs
 * @description gulp-configuration file
 * @copyright 2016, Steven Krebs
 * @license MIT
 */

module.exports = {
    paths: {
        base: './',
        styles: {
            src: './src/css/styles.scss',
            modules: './src/css/modules/**/*.scss',
            dest: './dist/css'
        },
        scripts: {
            src: './src/js/scripts.js',
            modules: './src/js/modules/**/*.js',
            dest: './dist/js',
        },
        template: './dist/index.html',
        locales: './dist/js/lang/*.json',
        dist: './dist'
    },
    names: {
        rename: {
            suffix: '.min'
        },
        temp: 'scripts.js'
    },
    compiler: {
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
        sourcemaps: {
            loadMaps: true
        },
        browserSync: {
            scripts: {
                stream:true,
                once: true
            },
            styles: {
                stream: true
            }
        },
        cleanCSS: {
            processImportFrom: ['local']
        }
    }
};