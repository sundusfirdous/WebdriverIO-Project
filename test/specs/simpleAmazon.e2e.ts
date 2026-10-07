import { expect } from '@wdio/globals';

describe('Amazon Search and Add to Cart', () => {
    it('search product and verify cart price', async () => {

        await browser.url('https://www.amazon.in/');
        await $('#twotabsearchtextbox').setValue('Laptop');
        await $('#nav-search-submit-button').click();
        await $(`(//button[@aria-label='Add to cart'])[1]`).click();
        await $('#nav-cart-count-container').click();
        const subtotal = await $('span.sc-product-price span.a-offscreen').getCSSProperty('text-content');
        const price = await $('(//span[contains(@class,"sc-white-space-nowrap")])[1]').getCSSProperty('text-content');
        expect(subtotal).toEqual(price);
    });
});