exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["./test/spec.js"],
  capabilities: {
    browserName: "chrome",
  },

  jasmineNodeOpts: {
    // wait time for the async operation to complete
    defaultTimeoutInterval: 30000,
  },

  getPageTimeout: 10000,
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(3000);
  },
};
