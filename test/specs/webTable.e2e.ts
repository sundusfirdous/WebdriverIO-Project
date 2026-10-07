import WebTablePage from '../pageobjects/webtable.page';

describe('Web Table Test', () => {
    const webTablePage = new WebTablePage();

    it('WebTable', async () => {
        await browser.url('https://www.w3schools.com/html/html_tables.asp');
        const item = await webTablePage.getItem(2, 3);
        console.log('Item:', await item.getText());
    });
})