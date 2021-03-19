module.exports = {
    'searchNonExistingProduct'(browser) {
        const nonExistingProduct = 'kk34348374928347987324789234978324879342789324879342789234789432789423';

        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', nonExistingProduct)
            .saveScreenshot('tests_output/search_non_existing.png')
            .click('#nav-search-submit-button')
        
        browser.assert.containsText('span.a-size-medium:nth-child(2)', nonExistingProduct, `No results for ${nonExistingProduct}`);
        browser.saveScreenshot('tests_output/search_non_existing_result.png');
    }
};