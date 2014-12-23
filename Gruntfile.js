module.exports = function(grunt){
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  mocha_casperjs: {
    options: {
      timeout: 5000,
      color: false
    },
    files: {
      src: ['test/**/*.js']
    }
  },
  express: {
    options:{},
    dev: {
      options: {
        script: './server.js'
      }
    }
  },
  mochacli: {
    options: {
        require: ['chai'],
        reporter: 'nyan',
        bail: true
    },
    all: ['spec/*.js']
  }
});

grunt.loadNpmTasks('grunt-mocha-casperjs')
grunt.loadNpmTasks('grunt-express-server')
grunt.loadNpmTasks('grunt-mocha-cli')
grunt.registerTask('default',['mocha_casperjs', 'mochacli', 'express'])
}