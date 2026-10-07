class WebsitePage {
    private rootElement = '#a-page';

    get searchBoxItem() {
        return $(this.rootElement).$('#twotabsearchtextbox');
    }

    get searchButton() {
        return $(this.rootElement).$('#nav-search-submit-button');
    }

    async setSearchBoxItemName(itemName: string): Promise<void> {
        await this.searchBoxItem.waitForDisplayed();
        await this.searchBoxItem.setValue(itemName);
    }

    async clickSearchButton(): Promise<void> {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }
}

export default WebsitePage;