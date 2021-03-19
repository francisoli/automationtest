module.exports = {
    'sortByCustomerReview'(browser) {
        const existingProduct = 'phone';

        // load amazon, search for phone
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', existingProduct)
            .click('#nav-search-submit-button')

        // sort dropdown, click Avg. Customer Review, then optional wait for 2 seconds to display result in screenshot    
        browser
            .click('#s-result-sort-select option[value="review-rank"]')
            .pause(2000)
            .saveScreenshot('tests_output/sort_by_customer_review.png')
        
    }
};

