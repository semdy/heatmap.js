/* globals module */
module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watch
        watch: {
            js: {
                files: ['src/**/*.js'],
                tasks: ['newer:jshint']
            }
        },

        // quotes below to disable jshint!
        "jshint": {
            files: ['src/**/*.js'],
            options: _.merge(grunt.file.readJSON('.jshintrc'), {
                reporter: require('jshint-stylish'),
                ignores: ['src/libs.js']
            })
        },

        // js minify
        uglify: {
            options: {
                mangle: false,
                report: 'gzip'
            },
            files: {
                expand: true,
                cwd: 'app/webroot/js/src',
                src: ['**/*.js'],
                dest: 'app/webroot/js/dist/',
                ext: '.min.js'
            }
        },

    });

    // 3rdparty tasks are automatically loaded
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // our tasks
    grunt.registerTask('default', ['watch']);

};
