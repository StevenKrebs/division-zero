module.exports = {
    paths: {
        base: './',
        styles: {
            src: './src/css/styles.less',
            modules: './src/css/modules/*.less',
            dest: './dist/css'
        },
        scripts: {
            src: './src/js/scripts.js',
            modules: './src/js/modules/*.js',
            dest: './dist/js'
        },
        maps: {
            dest: '../maps'
        },
        template: './dist/index.html',
        dist: './dist'
    },
    names: {
        styles: 'styles.min.css',
        scripts: 'scripts.min.js'
    }
};