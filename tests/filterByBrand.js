module.exports = {
    'sortByCustomerReview'(browser) {
        const existingProduct = 'phone';

        // load amazon, search for phone
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', existingProduct)
            .click('#nav-search-submit-button')

        // look for TracFone checkbox and click, optionally wait for 2 seconds to view result in the screenshot  
        browser
            .click('link text', 'TracFone')
            .pause(2000)
            .saveScreenshot('tests_output/filter_by_brand.png')
    }
};