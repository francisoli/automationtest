module.exports = {
    'validateAddToCart'(browser) {
        const existingProduct = 'Garatic Portable Compact Mini Twin Tub Washing Machine w/Wash and Spin Cycle, Built-in Gravity Drain, 13lbs Capacity For Camping, Apartments, Dorms, College Rooms, RV’s, Delicates and more';

        // search washing machine
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', existingProduct)
            .saveScreenshot('tests_output/validate_add_to_cart_search.png')
            .click('#nav-search-submit-button')
        
        //  check if the result is for washing machine
        browser
            .assert.containsText('span.a-color-state', existingProduct, `Showing results of ${existingProduct}`)
            .saveScreenshot('tests_output/validate_add_to_cart_search_result.png');

        // click Garatic Portable Compact Mini Twin Tub Washing Machine
        browser
            .waitForElementVisible('.s-main-slot')
            .click('link text', 'Garatic Portable Compact Mini Twin Tub Washing Machine w/Wash and Spin Cycle, Built-in Gravity Drain, 13lbs Capacity For Camping, Apartments, Dorms, College Rooms, RV’s, Delicates and more')
            .saveScreenshot('tests_output/validate_add_to_cart_search_click_product.png')
    
        // check if add to cart button exist, if exist then click
        browser
            .assert.elementPresent('#add-to-cart-button', 'Add to cart button exists')
            .click('#add-to-cart-button')
            .saveScreenshot('tests_output/validate_add_to_cart_search_click_product_details.png');
        
        // test if check icon, Add to Cart text, and item counter exist    
        browser
            .assert.visible('#huc-v2-order-row-icon', 'check icon exist')
            .assert.visible('#huc-v2-order-row-confirm-text', 'Added to cart text exists')
            .assert.containsText('#hlb-subcart', '1 item', 'Item count exists');
    }
};