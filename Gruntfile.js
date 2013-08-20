/*global module:false*/
module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
      '* This is a port of code by Wes Pickett. Original code here: http://wespickett.com/blog#feb0212 \n' +
      '* Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
            'dist/ng-scratch-off.min.js' : ['src/ng-scratch-off.js'],
            'demo/ng-scratch-off.min.js' : ['src/ng-scratch-off.js']
        }
      }
    },
    connect: {
        all: {
            options: {
                port: 9006,
                hostname: "0.0.0.0",
                base: 'demo',
                middleware: function(connect, options){
                    return [
                        require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                        connect.static(options.base)
                    ];
                }
            }
        }
    },
    open: {
        all: {
            path: 'http://localhost:<%= connect.all.options.port%>'
        }
    },
    regarde: {
        all: {
            files: [
                'demo/*.html',
                'demo/*.js',
                'src/*.js'
            ],
            tasks: [
                'uglify',
                'livereload'
            ]
        }
    },
    compress: {
        all: {
            options: {
                mode: "zip",
                archive: "dist/ScratchOff-v<%= pkg.version %>.zip"
            },
            files: [
                { expand: true, cwd: "dist", src: "**" },
                { expand: true, cwd: "src", src: "**"}
            ]
        }
    }
  });

  // Server task
  grunt.registerTask('server', ['uglify', 'livereload-start', 'connect', 'open', 'regarde' ]);

  // Default task.
  grunt.registerTask('default', ['uglify']);

};
