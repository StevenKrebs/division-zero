var gulp            = require('gulp'),
    util            = require('gulp-util');

environment = {
    dev     :   !!util.env.dev
};

require('require-dir')('./gulp/tasks', { recurse: true });