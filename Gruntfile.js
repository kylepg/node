module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*=============================
    =            WATCH            =
    =============================*/

    watch: {
      html: {
        files: ['src/node.html',
                'src/html/*.html'],
        tasks: ['htmlmin', 'import','notify:done']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['import','notify:done', 'uglify']
      },
      css: {
        files: ['src/scss/*.scss',
                'src/scss/mixins/*.scss'],
        tasks: ['sass', 'import','notify:done']
      }
    },

    /*===================================
    =            MINIFY HTML            =
    ===================================*/

    htmlmin: {
       dist: {
         options: {
           removeComments: true,
           collapseWhitespace: true
         },
         files: {
           'src/html/min/template.min.html': 'src/html/template.html' // CHANGE TEMPLATE NAME
         }
       }
     },

     /*====================================
     =            COMPILE SASS            =
     ====================================*/

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: {
          'css/node.css': 'src/scss/node.scss'
        }
      },
      min: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'css/node.min.css': 'src/scss/node.scss'
        }
      }
    },

    /*=========================================
    =            UGLIFY JAVASCRIPT            =
    =========================================*/

    uglify: {
      dist: {
        files: {
          'js/node.min.js': 'js/node.js'
        }
      }
    },

    /*==============================
    =            IMPORT            =
    ==============================*/

    import: {
      options: {},
      dist: {
        files: {
          'js/node.js' : 'src/js/node.js',
          'dist/node.ready.html' : 'src/node.html'
        }
      }
    },

    /*==============================
    =            NOTIFY            =
    ==============================*/

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: "node",
        success: false,
        duration: 1
      }
    },
    notify: {
      done: {
        options: {
          title: 'Grunt - node',
          message: 'DONE!',
        }
      }
    }
  });

  /*==================================
  =            LOAD TASKS            =
  ==================================*/


  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-import');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');
  grunt.task.run('notify_hooks');
  grunt.registerTask('default',['watch']);
};
