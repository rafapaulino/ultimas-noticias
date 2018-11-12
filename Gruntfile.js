/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/ultimas-noticias.min.css': [
						'css/ultimas-noticias.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/ultimas-noticias.min.js': [
                        'js/ultimas-noticias.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};
