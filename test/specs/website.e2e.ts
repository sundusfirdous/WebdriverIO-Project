import { expect } from '@wdio/globals';
import WebsitePage from '../pageobjects/website.page';
import SearchPage from '../pageobjects/search.page';
import CartPage from '../pageobjects/cart.page';

describe('Amazon Search & Cart', () => {

    const websitePage = new WebsitePage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();

    it('should add item to cart and validate subtotal', async () => {

        await browser.url('https://www.amazon.in/');

        await websitePage.setSearchBoxItemName('Laptop');
        await websitePage.clickSearchButton();

        await searchPage.clickSearchResult(1);

        // SAFE tab handling (one-time logic)
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.switchToWindow(handles[1]);
        }

        await cartPage.clickAddToCartIcon();

        await $('(//span[contains(@class,"sc-white-space-nowrap")])[1]').waitForDisplayed();

        const cartSubtotalEl = await cartPage.getCartSubtotalElement();
        const subtotalPriceEl = await cartPage.getSubtotalPriceElement();

        const cartSubtotalCss = await cartSubtotalEl.getCSSProperty('text-content');
        const subtotalPriceCss = await subtotalPriceEl.getCSSProperty('text-content');

        console.log('Cart Subtotal CSS:', cartSubtotalCss);
        console.log('Subtotal Price CSS:', subtotalPriceCss);

        expect(cartSubtotalCss).toEqual(subtotalPriceCss);
    });
});