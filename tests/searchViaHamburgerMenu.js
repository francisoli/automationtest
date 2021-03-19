module.exports = {
    'searchViaHamburgerMenu'(browser) {

        // load amazon then select category, in this example Arts & Crafts
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('#nav-search-dropdown-card')
            .click('#searchDropdownBox option:nth-child(2)')
            .saveScreenshot('tests_output/search_via_hamburger_menu.png')
    }
};