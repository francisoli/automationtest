module.exports = {
    'searchExistingProduct'(browser) {
        const existingProduct = 'iphone';

        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', existingProduct)
            .saveScreenshot('tests_output/search_existing.png')
            .click('#nav-search-submit-button')
        
        browser.assert.containsText('span.a-color-state', existingProduct, `Showing results of ${existingProduct}`);
        browser.saveScreenshot('tests_output/search_existing_result.png');
    }
};

