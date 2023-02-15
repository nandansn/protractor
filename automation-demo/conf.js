let AllureReporter = require("jasmine-allure-reporter");

/// this is to check the status of spec and attach  the screenshot

let addScreenShots = new (function () {
  this.specDone = function (result) {
    if (result.status === "failed") {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
      });
    }
  };
})();

exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [ "./test/spec-2.js"],
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true, // shard test files and max instance are for parallel tests
    maxInstances: 5,
  },

  jasmineNodeOpts: {
    // wait time for the async operation to complete
    defaultTimeoutInterval: 30000,
  },

  directConnect: false,

  getPageTimeout: 10000,

  logLevel: "INFO",

  // // Setup the report before any tests start
  // beforeLaunch: function () {
  //   return new Promise(function (resolve) {
  //     reporter.beforeLaunch(resolve);
  //   });
  // },

  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(3000);

    jasmine.getEnv().addReporter(addScreenShots);

    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "allure-results",
      })
    );

    // jasmine.getEnv().afterEach(function (done) {
    //   browser.takeScreenshot().then(function (png) {
    //     allure.createAttachment(
    //       "Screenshot",
    //       function () {
    //         return new Buffer(png, "base64");
    //       },
    //       "image/png"
    //     )();
    //     done();
    //   });
    // });
  },

  // afterLaunch: function (done) {
  //   // returns ChildProcess instance
  //   let generation = allure(["generate", "allure-results"]);

  //   generation.on("exit", function (exitCode) {
  //     console.log("Generation is finished with code:", exitCode);
  //   });

  //   done();
  // },

  // Close the report after all tests finish
  // afterLaunch: function (exitCode) {
  //   return new Promise(function (resolve) {
  //     reporter.afterLaunch(resolve.bind(this, exitCode));
  //   });
  // },
};
