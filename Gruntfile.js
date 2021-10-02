'use struct';

module.exports = function (grunt) {
    //time how long tasks take, can help when optimizing build times
    require('time-grunt')(grunt);

    //automatically load required grunt tasks
    require('jit-grunt')(grunt);

    //define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            },

            watch: {
                files: 'css/*.css',
                tasks: ['sass']
            },

            browserSync: {
                src: [
                    'css/*.css',
                    '*.html',
                    'js/*.js'
                ]
            },

            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }

        }

    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};