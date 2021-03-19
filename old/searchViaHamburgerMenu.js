module.exports = {
    'searchViaHamburgerMenu'(browser) {

        // url of  Electronics > Accessories & Supplies    
        const categoryUrl = encodeURI("nav_em__nav_desktop_sa_intl_accessories_and_supplies_0_2_5_2");

        // load amazon then click hamburger menu
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#nav-hamburger-menu')
            .click('#nav-hamburger-menu')
            .saveScreenshot('tests_output/search_via_hamburger_menu.png')

        // click Electronics
        browser
            .click('a[data-ref-tag="nav_em_1_1_1_6"]')
            .saveScreenshot('tests_output/search_via_hamburger_menu_electronics.png')

        // click Accessories & Supplies    
        browser
            .click(`a[href="/s?bbn=16225009011&rh=i%3Aspecialty-aps%2Cn%3A%2116225009011%2Cn%3A281407&ref_=${categoryUrl}"]`)
            .saveScreenshot('tests_output/search_via_hamburger_menu_electronics_accessories.png')

        // assert that url contains the category reference value    
        browser
            .assert.urlContains(categoryUrl, `Url contains ${categoryUrl} `);
    }
};