module.exports = {
    'addToCartExisting'(browser) {
        const existingProduct = 'Garatic Portable Compact Mini Twin Tub Washing Machine w/Wash and Spin Cycle, Built-in Gravity Drain, 13lbs Capacity For Camping, Apartments, Dorms, College Rooms, RV’s, Delicates and more';

        // search washing machine
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', existingProduct)
            .saveScreenshot('tests_output/add_to_cart_existing_search.png')
            .click('#nav-search-submit-button')
        
        //  check if the result is for washing machine
        browser
            .assert.containsText('span.a-color-state', existingProduct, `Showing results of ${existingProduct}`)
            .saveScreenshot('tests_output/add_to_cart_existing_search_result.png');

        // click Garatic Portable Compact Mini Twin Tub Washing Machine
        browser
            .waitForElementVisible('.s-main-slot')
            .click('link text', 'Garatic Portable Compact Mini Twin Tub Washing Machine w/Wash and Spin Cycle, Built-in Gravity Drain, 13lbs Capacity For Camping, Apartments, Dorms, College Rooms, RV’s, Delicates and more')
            .saveScreenshot('tests_output/add_to_cart_existing_search_result_click_product.png')

        // test if Add to Cart button exist    
        browser
            .waitForElementVisible('#add-to-cart-button')
            .assert.visible('#add-to-cart-button', `Add to Cart button exists`)
            .saveScreenshot('tests_output/add_to_cart_existing_search_result_click_product_add_to_cart_exist.png')

    }
};