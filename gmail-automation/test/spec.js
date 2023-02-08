const { browser, element } = require("protractor");

require("dotenv").config();

const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

describe("first", function () {
  beforeEach(async function () {
    browser.waitForAngularEnabled(false);
    this.app_url = "https://www.google.com/intl/en-GB/gmail/about/";
    await browser.get(this.app_url);
  });

  it("test", async function () {
    expect(browser.getCurrentUrl()).toBe(this.app_url);

    await homePage.clickSignIn();
    await loginPage.enterEmail(process.env.MAILID);
    await loginPage.clickNext();
    await loginPage.enterPassword(process.env.PWD);
    await loginPage.clickNext();
  });

  afterEach(function () {
    browser.quit();
  });
});
