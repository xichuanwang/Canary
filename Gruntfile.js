/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				stripBanners: true
			},
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			gruntfile: {
				files: '',
				tasks: []
			}
		},
		karma: {
			options : { 
				frameworks: ['jasmine'],
				files: [
			        'src/*.js',
			        'tests/*.js',
			        { pattern: 'tests/*.gif', included: false, watched: false, served: true }
			    ],
			    reporters: ['progress'],
			    port: 9876,
			    colors: true,
			    autoWatch: true,
			    browsers: ['Chrome'],
			    singleRun: false
			},
			unit: {
				//background: true,
				autoWatch:true,
				browsers: ["Chrome"],
				singleRun: false
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

	// Default task.
	grunt.registerTask('build', ['concat', 'uglify']);
	grunt.registerTask('test', ['karma:unit']);

};
