import TestingPage from '../pageobjects/testing1.page';

describe(`TestingPages`, ()=>{
    const testingPage = new TestingPage();

it( `Testing`, async()=>{
await testingPage.open();
} );

})