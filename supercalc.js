
describe('super calc test', function() {
    it('have the title', () => {
        browser.get('');
        browser.get('https://www.simplify.com/commerce/login/auth');
        
        console.log(browser.getTitle());
    });
});
    