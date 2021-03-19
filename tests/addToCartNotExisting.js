module.exports = {
    'addToCartNotExisting'(browser) {
        const notExistingProduct = 'New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)';

        // search washing machine
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', notExistingProduct)
            .saveScreenshot('tests_output/add_to_cart_not_existing_search.png')
            .click('#nav-search-submit-button')
        
        //  check if the result is for washing machine
        browser
            .assert.containsText('span.a-color-state', notExistingProduct, `Showing results of ${notExistingProduct}`)
            .saveScreenshot('tests_output/add_to_cart_not_existing_search_result.png');

        // click Garatic Portable Compact Mini Twin Tub Washing Machine
        browser
            .waitForElementVisible('.s-main-slot')
            .click('link text', notExistingProduct)
            .saveScreenshot('tests_output/add_to_cart_not_existing_search_result_click_product.png')
        
        // check if add to cart button does not exist    
        browser.assert.not.elementPresent('#add-to-cart-button', 'Add to cart button does not exist');
        browser.saveScreenshot('tests_output/add_to_cart_not_existing_search_result_click_product_add_to_cart_not_exist.png')
    }
};