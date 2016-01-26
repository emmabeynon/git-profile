module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: [  'js/**/*.js',
        'test/**/*.spec.js'],
      tasks: ['karma']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
