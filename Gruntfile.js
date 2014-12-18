//Gruntfile
module.exports = function(grunt) {

	//Initializing the configuration object
	grunt.initConfig({
		stylus:{
			compile: {
				files: [{
					expand: true, 
					cwd: './assets/stylesheets',
					src: ['*.styl'],
					dest: './assets/stylesheets',
					ext: '.css'
				}]
			}
		},
		uglify: {
			options: {},
			build: {
				files: [{
					src: './public/assets/javascript/application.min.js',
					dest: './public/assets/javascript/application.min.js'
				}]
			}
		},
		copy: {
			build: {
				files: [{
					cwd: './app/bower_components/bootstrap/fonts/',
					src: [ '*' ],
					dest: './public/assets/fonts',
					expand: true	
				},
				{
					cwd: './libs/fonts/',
					src: [ '*' ],
					dest: './public/assets/fonts',
					expand: true	
				}]
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			js: {
				src: [
				'./app/bower_components/jquery/jquery.js',
				'./app/bower_components/bootstrap/dist/js/bootstrap.js',
				'./app/bower_components/jquery-ui/ui/jquery-ui.js',
				'./app/bower_components/angular/angular.js',
				'./app/bower_components/angular-ui-calendar/src/calendar.js',
				'./app/bower_components/fullcalendar/fullcalendar.js',
				'./app/bower_components/fullcalendar/gcal.js',
				'./app/bower_components/angular-route/angular-route.js',
				'./app/bower_components/angular-animate/angular-animate.js',
				'./app/bower_components/ngprogress/build/ngProgress.js',
				'./app/bower_components/underscore/underscore.js',
				'./app/bower_components/momentjs/momentjs.js',
				'./app/bower_components/angular-loading-bar/build/loading-bar.js',
				'./assets/libs/js/morris.js',
				'./assets/libs/js/raphael.js',
				'./assets/libs/js/prettify.js',
				'./assets/libs/js/socket.io.js',
				'./assets/javascript/angularApp.js',
				'./assets/javascript/factory/*.js',
				'./assets/javascript/controllers/*.js'
				],
				dest: './public/assets/javascript/application.min.js'
			}
		},
		cssmin: {
			build: {
				files: [{ 
					src: [
					'./app/bower_components/bootstrap/dist/css/bootstrap.css',
					'./app/bower_components/fullcalendar/fullcalendar.css',
					'./app/bower_components/angular-loading-bar/build/loading-bar.css',
					'./assets/libs/css/font-awesome.css',
					'./assets/libs/css/morris.css',
					'./assets/libs/css/prettify.css',
					'./assets/stylesheets/*.css'
					],
					dest: './public/assets/stylesheets/application.min.css',
				}]
			}
		},
		watch: {
			js:  { 
				files: [
				'./assets/javascript/*.js',
				'./assets/javascript/*/*.js'
				], 
				tasks: [ 'js', 'copy' ]
			},
			stylesheets:  { 
				files: './assets/stylesheets/*.styl', 
				tasks: [ 'stylesheets', 'copy' ] 
			},
		}
	});

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Stylesheets Tasks
    grunt.registerTask('stylesheets', ['stylus', 'cssmin']);
    // JS Tasks
    // grunt.registerTask('js', ['concat:js', 'uglify']);
    grunt.registerTask('js', ['concat:js']);
    // Default task(s).
    grunt.registerTask('default', ['stylesheets', 'js', 'copy']);
};
