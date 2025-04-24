import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';

describe('REI Website Searchbar Functionality Test', () => {


it('should perform a search and verify results', async () => {
   

    await homePage.enterSearchTerms();
    await homePage.searchSubmitButton.click();
    await expect(homePage.SearchBarTerms).toBeDisplayed();
    await expect(homePage.verifySearchBarResults).toBeDisplayed();
    await expect(homePage.verifypopup).notToBedisplayed();
});
});




describe('REI Hiking Category Menu Link Validation', () => {
it('should iterate through Hiking category Links and verify the endpoint', async () => {
  

    await homePage.clickhikingCategoryLinks();
    await expect(homePage.hikingCategoryEndpoints).toBeDisplayed();
    await expect(homePage.verifypopup).notToBedisplayed();
});
});








describe('REI Pads &Hammocks Category Menu Link Validation', () => {
it('should iterate through Pads& Hammocks category Links and verify the endpoint', async () => {
        
    
        await homePage.PadsHammockscategoryLinks();
        await  expect(homePage.PadsHammockscategoryendpoints).toBeDisplayed()
        await expect(homePage.verifypopup).notToBedisplayed();
});

});



describe ('REI Lighting Category Menu Link Validation', () => {
it('should iterate through Lighting Category  Links and verify the endpoint', async () => {
await browser.url('https://www.rei.com');

await homePage.LightingcategoryLinks();
await expect(homePage.CampKitchencategoryendpoints).toBeDisplayed();
await expect(homePage.verifypopup).notToBedisplayed();


});
});





describe ('REI Backpacks Category Menu Link Validation', () => {
it('should iterate through Backpacks Category  Links and verify the endpoint', async () => {
       
    
         await homePage.BackpackscategoryLinks();
         await expect(homePage.BackpackscategoryEndpoints).toBeDisplayed();
         await expect(homePage.verifypopup).notToBedisplayed();
        
});
});
