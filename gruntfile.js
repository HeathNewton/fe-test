module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
          sass: {
            files: ['scss/*.scss'],
            tasks: ['sass']
          }
        },

    });

    grunt.registerTask('default', ['sass', 'watch']);
};