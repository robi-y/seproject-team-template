//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'js/angular.js',
      'js/angular-route.js',
      'js/angular-mocks.js',
      '*/**/*Controller.js',
      'app.js',
      'tests*/**/*.js'
      ],

    autoWatch: true,

    frameworks: ['jasmine'],


    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],
    // web server port
    port: 9876,

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
