const { by, element, browser, protractor } = require("protractor");

class LoginPage {
  constructor() {
    this.text_box = {
      email: by.css("#identifierId"),
      pwd: by.css(`[name="Passwd"]`),
    };
    this.button = {
      next: by.xpath(`//button//span[text()="Next"]`),
    };
  }

  async enterEmail(mailId) {
    await element(this.text_box.email).sendKeys(mailId);
  }

  async enterPassword(password) {
    await element(this.text_box.pwd).sendKeys(password);
  }

  async clickNext() {
    await browser.driver.wait(
      protractor.ExpectedConditions.elementToBeClickable(
        element(this.button.next)
      ),
      3000,
      "Element taking too long to display"
    );
    await element(this.button.next).click();
  }
}

module.exports = new LoginPage();
