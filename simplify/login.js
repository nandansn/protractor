
describe('Login Suite', function() {
    it('Signin', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.simplify.com/commerce/login/auth');
        element(by.id('username')).sendKeys('nandakumar.rangsamy@gmail.com')
        element(by.id('password')).sendKeys('Simplify@123')
        element(by.id('button-login')).click();
        browser.waitForAngularEnabled(true);

        var linkEducationMaterials = element(by.linkText('Dashboard'))
        expect(linkEducationMaterials.isDisplayed()).toBe(true);
        linkEducationMaterials.getText().then(function (text) {
            console.log(text);
        });

        
        
        
    });
});
    