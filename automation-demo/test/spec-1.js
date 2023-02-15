const { browser, element } = require("protractor");

require("dotenv").config();

const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

describe("second", function () {
  it("test-1", async function () {
    browser.waitForAngularEnabled(false);
    this.app_url = "https://www.google.com/intl/en-GB/gmail/about/";
    await browser.get(this.app_url);
    expect(browser.getCurrentUrl()).toBe(this.app_url);

    await homePage.clickSignIn();
    // await loginPage.enterEmail("abcdef");
    // await loginPage.clickNext();
    // await loginPage.enterPassword(process.env.PWD);
    // await loginPage.clickNext();
  });

  it("test-2", async function () {
    browser.waitForAngularEnabled(false);
    this.app_url = "https://www.google.com/intl/en-GB/gmail/about/";
    await browser.get(this.app_url);
    expect(browser.getCurrentUrl()).toBe(this.app_url);

    await homePage.clickSignIn();
    await loginPage.enterEmail("abcdef");
    await loginPage.clickNext();
    await loginPage.enterPassword(process.env.PWD);
    await loginPage.clickNext();
  });

  afterAll(() => {
    browser.close();
  });
});
