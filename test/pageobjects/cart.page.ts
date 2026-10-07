class CartPage {

    get addToCartButton() {
        return $('#nav-cart-count-container');
    }

    get cartSubtotal() {
        return $('span.sc-product-price span.a-offscreen');
    }

    get subtotalPrice() {
        return $('(//span[contains(@class,"sc-white-space-nowrap")])[1]');
    }

    async clickAddToCartIcon(): Promise<void> {
        await this.addToCartButton.waitForClickable({ timeout: 10000 });
        await this.addToCartButton.click();
    }

    async getCartSubtotal(): Promise<string> {
        await this.cartSubtotal.waitForDisplayed();
        return this.cartSubtotal.getText();
    }

    async getSubtotalPrice(): Promise<string> {
        await this.subtotalPrice.waitForDisplayed();
        return this.subtotalPrice.getText();
    }

    async getCartSubtotalElement() {
        await this.cartSubtotal.waitForDisplayed();
        return this.cartSubtotal;
    }

    async getSubtotalPriceElement() {
        await this.subtotalPrice.waitForDisplayed();
        return this.subtotalPrice;
    }
}

export default CartPage;