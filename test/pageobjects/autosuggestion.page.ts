class AutoSuggestionPage{
     get searchBoxItem() {
        return $('#twotabsearchtextbox');
    }

    async setSearchBoxItemName(itemName: string): Promise<void> {
        this.searchBoxItem.waitForDisplayed();
        this.searchBoxItem.setValue(itemName);
    }

   async getItem(itemNumber: number){
        return $(`//div[@id='sac-suggestion-row-${itemNumber}']`)
    }

    async getItems(){
return $(``)
    }
}
    export default AutoSuggestionPage;