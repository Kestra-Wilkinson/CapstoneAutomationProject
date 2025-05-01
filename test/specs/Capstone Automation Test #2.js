import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';










describe('REI Hiking Category Menu Link Validation', () => {
it('should iterate through Hiking category Links and verify the endpoint', async () => {
    await browser.url('https://www.rei.com');

    
    
    
    
    await homePage.clickhikingCategoryLinks();
    
    
});

});






describe('REI Pads &Hammocks Category Menu Link Validation', () => {
it('should iterate through Pads& Hammocks category Links and verify the endpoint', async () => {
        await browser.url('https://www.rei.com');
    
      
      


      
        await homePage.PadsHammockscategoryLinks();
        
});

});



describe ('REI Lighting Category Menu Link Validation', () => {
it('should iterate through Lighting Category  Links and verify the endpoint', async () => {
    await browser.url('https://www.rei.com');

    
    
    
    
    await homePage.LightingcategoryLinks();



});
});





describe ('REI Backpacks Category Menu Link Validation', () => {
it('should iterate through Backpacks Category  Links and verify the endpoint', async () => {
        await browser.url('https://www.rei.com');
    
        
        
        
        
        
        await homePage.BackpackscategoryLinks();
      
       
        
});
});




describe ('REI Camp Kitchen Category Menu Link Validation', () => {
    it('should iterate through Camp Kitchen Category  Links and verify the endpoint', async () => {
        await browser.url('https://www.rei.com');


       
       
        await homePage.CampKitchencategoryLinks();
});

});