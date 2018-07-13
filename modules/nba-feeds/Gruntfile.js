module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //
    // ─── WATCH ───────────────────────────────────────────────────────
    //

    watch: {
      js: {
        files: ['src/nba-feeds.js'],
        tasks: ['babel', 'notify:done']
      }
    },

    //
    // ─── BABEL ───────────────────────────────────────────────────────
    //

    babel: {
      options: {
        sourceMap: false,
        presets: ['env']
      },
      dist: {
        files: {
          'index.js': 'src/nba-feeds.js'
        }
      }
    },

    //
    // ─── NOTIFY ──────────────────────────────────────────────────────
    //

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: 'nba-feeds',
        success: false,
        duration: 1
      }
    },
    notify: {
      done: {
        options: {
          gruntLogHeader: false,
          title: 'Grunt - nba-feeds',
          message: 'DONE!'
        }
      }
    }
  });

  //
  // ─── NOTIFY ─────────────────────────────────────────────────────────────────────
  //

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default', ['watch']);
};
