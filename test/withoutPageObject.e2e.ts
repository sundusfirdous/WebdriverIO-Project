import { expect } from '@wdio/globals';

describe('Amazon Search and Add to Cart - No POM, Same Tab', () => {

    it('should search product and add to cart without switching tabs', async () => {

        await browser.url('https://www.amazon.in/');

        // Search product
        const searchBox = $('#twotabsearchtextbox');
        await searchBox.waitForDisplayed();
        await searchBox.setValue('Laptop');

        const searchButton = $('#nav-search-submit-button');
        await searchButton.waitForClickable();
        await searchButton.click();

        // Click product TITLE link (opens in same tab)
        const firstProductLink =
            '(//div[@data-component-type="s-search-result"]//h2/a)[1]';

        await $(firstProductLink).waitForClickable();
        await $(firstProductLink).click();

        // Add to Cart
        const addToCartButton = $('#add-to-cart-button');
        await addToCartButton.waitForClickable({ timeout: 10000 });
        await addToCartButton.click();

        // Verify subtotal
        const cartSubtotal = $('#sw-subtotal span.a-offscreen');
        await cartSubtotal.waitForDisplayed();
        const subtotalText = await cartSubtotal.getText();

        console.log('Subtotal:', subtotalText);
        expect(subtotalText).toContain('₹');
    });

});