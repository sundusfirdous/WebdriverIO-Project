class SearchPage {
    private rootElement = '#search';

    getSearchResult(item: number) {
        return $(this.rootElement).$(
            `(//div[@data-component-type='s-search-result'])[${item}]`
        );
    }

    async clickSearchResult(item: number): Promise<void> {
        const searchResult = this.getSearchResult(item);
        await searchResult.waitForClickable();
        await searchResult.click();
    }
}

export default SearchPage;