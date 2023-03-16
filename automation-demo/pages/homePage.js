const { by, element } = require("protractor");

class HomePage {
  constructor() {
    this.button = {
      signin: by.css(`[data-action="sign in"]`),
    };
  }
  async clickSignIn() {
    await element(this.button.signin).click();
  }
}

module.exports = new HomePage();
