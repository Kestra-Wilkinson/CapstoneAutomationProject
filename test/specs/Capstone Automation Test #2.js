import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';

describe('REI Website Searchbar Functionality Test', () => {
it('should perform a searchbar test on REI site and verify search Results', async () => {
    it('should perform a search and verify results', async () => {
        await browser.url('https://www.rei.com/');

        await homePage.searchBarInput();
        await expect(homePage.searchBarInput).toBeDisplayed();
        
        await homePage.searchSubmitButton.click();
        await expect(homePage.verifySearchBarResults).toBeDisplayed();
    });
});

});


describe('REI Hiking Category Menu Link Validation', () => {
    it('should iterate through Hiking category Links and verify the endpoint', async () => {
        await browser.url('https://www.rei.com');

        await homePage.clickhikingCategoryLinks()
        await expect(homePage.hikingCategoryEndpoints).toBeDisplayed();
    });
});







describe('REI Pads &Hammocks Category Menu Link Validation', () => {
it('should iterate through Pads& Hammocks category Links and verify the endpoint', async () => {
         await browser.url('https://www.rei.com');
     
         await homePage.PadsHammockscategoryLinks.click();
        await  expect(homePage.BackpackscategoryEndpoints).toBeDisplayed()

});

});



describe ('REI Lighting Category Menu Link Validation', () => {
it('should iterate through Lighting Category  Links and verify the endpoint', async () => {
    await browser.url('https://www.rei.com');
   
    await homePage.lightingcategoryLinks.click();
    await expect(homePage.CampKitchencategoryendpoints).toBeDisplayed();


});
});





describe ('REI Backpacks Category Menu Link Validation', () => {
it('should iterate through Backpacks Category  Links and verify the endpoint', async () => {
         await browser.url('https://www.rei.com');
       
         await homePage.backpacksCategoryLinks.click();
        await expect(homePage.BackpackscategoryEndpoints).toBeDisplayed();

});
});
