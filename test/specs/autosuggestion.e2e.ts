import AutoSuggestionPage from '../pageobjects/autosuggestion.page';

describe('Auto Suggestion Test', () => {
    const autoSuggestionPage = new AutoSuggestionPage();                        

    it(`Auto Suggestion`, async () => {
        await browser.url('https://www.amazon.in/');
        await autoSuggestionPage.setSearchBoxItemName('Laptop');

          const item = await autoSuggestionPage.getItem(1);
        console.log('Item:', await item.getText()); 

        for (let i = 1; ; i++) {
            const item = await autoSuggestionPage.getItem(i);
            if (await item.isExisting()) {
                console.log('Item:', await item.getText());
            } else {
                break;
            }
        } 

        for (let i = 1; ; i++) {
            const item = await $(`//div[@id='sac-suggestion-row-${i}']`);
            if (await item.isExisting()) {
                console.log('Item:', await item.getText());
            } else {
                break;
            }
        } 
});
})