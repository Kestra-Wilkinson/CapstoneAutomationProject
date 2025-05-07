class HomePage {
  // 1. Search Bar
  get searchBarInput(){
    return $('.input[@class="search__input"]');
  }
  get searchSubmitButton(){
    return $('//button[@id="search-button"]');
  }
  SearchBarTerms=['hiking boots','tents','sleeping bags',
      'hydro flask',
      'water bottles',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',]
  get verifySearchBarResults(){
    return $$('div.cdr-container_15-1-0 cdr-container--static_15-1-0 MURvBOgKGVzFQgFh6_Oo');
  }
  // 2. Navigation Menu (example for "Camp & Hike")
   get NavigationMenu(){
    return $('//div[@class="subsite-navigation"]/ul[@class="subsite-navigation__list"]');
   }
  get CampHikeMenubutton(){
    return $('//button[@class="subsite-navigation__link subsite-category__button"]');
   }
  get popupbutton(){
    return $('//button[@aria-label="Close sign in nudge"]')
  }

  get hikingCategoryLinks(){
  return $$('//ul[@id="mm-camping-and-hiking-hiking"]/li[@class="subsite-navigation__item"]/a');
  }
   hikingCategoryEndpoints =[
  
    '/c/hiking-footwear',
     '/c/hiking-jackets',
     '/c/hiking-shirts',
      '/c/hiking-pants',
      '/c/hiking-shorts',
      '/c/hiking-socks',
  ]
  

  get PadsHammockscategorylinks(){
    return $$('//ul[@id="mm-camping-and-hiking-sleeping-pads-cots-and-hammocks"]/li[@class="subsite-navigation__item"]/a');
  }
   
  PadsHammockscategoryendpoints=[
    '/c/sleeping-pads',
    '/c/hammocks',
    '/c/cots',
    '/c/camp-mattresses',
    '/c/camp-pillows',
    '/c/camp-blankets',
  ]
    
  
  get lightingcategoryLinks() {
  return $$('//ul[@id="mm-camping-and-hiking-camp-lighting"]/li[@class="subsite-navigation__item"]/a');
  }
  lightingcategoryLinkendpoints =[
    '/c/headlamps',
    '/c/flashlights-and-lightsticks',
    '/c/lanterns',
  ]
  
  get Backpackscategorylinks(){
    return $$('//ul[@id="mm-camping-and-hiking-hiking-backpacks"]/li[@class="subsite-navigation__item"]/a');
  }
BackpackscategoryEndpoints=[
      '/c/backpacking-packs',
       '/c/day-packs',
       '/c/hiking-hydration-packs',
       '/c/baby-carrier-packs',
       '/c/hiking-waistpacks',
      '/c/pack-accessories',
    ]


 get CampKitchencategorylinks() {
  return $$('//ul[@id="mm-camping-and-hiking-camp-kitchen"]/li[@class="subsite-navigation__item"]');
  }

  CampKitchenendpoints = [
       '/c/stoves-and-grills',
        '/c/cookware-and-dinnerware',
        '/c/coolers',
        '/c/food',
        '/c/camp-drinkware',]
  
  // 3. Product Listing Filter (e.g., Brand filter sidebar)
  get filterSidebar(){
    return $('aside[aria-label="Refine results"]');
  }
  get brandFilterToggle(){
    return $('button[aria-controls*="brand"]');
  }
  get firstBrandCheckbox(){
    return $('input[type="checkbox"][id^="brand-"]'); // Use more specific ID if needed
  }
  get priceRangeFilter(){
    return $('input[name="price-range"]');
  }
  get ratingFilter(){
    return $('input[name="rating"]'); // Filter for rating
  }
  get availabilityFilter(){
    return $('input[name="availability"]'); // Filter for availability
  }
  get colorFilter(){
    return $('input[name="color"]');
  }
  get sizeFilter(){
    return $('input[name="size"]'); // Size filter
  }
  // 4. Product Listings
  get productList(){
    return $$('ul[data-testid="product-list"] li'); // :white_check_mark: returns array of products
  }
  get product(){
    return $('a[href="/product/243702/rei-co-op-half-dome-2-tent-with-footprint"]');
  }
  // 5. Product Image Modal
  get productImage(){
    return $('img[alt*="Product image"]'); // Adjust alt if needed
  }
  get imageModal(){
    return $('div[data-testid="lightbox"]'); // Modal container
  }
  get modalCloseButton(){
    return $('button[aria-label="Close"]');
  }
  // 6. Shopping Cart
  get shoppingCart(){
    return $('a[href="/ShoppingCart"]'); // Fixed the selector
  }
  get shoppingCartIcon(){
    return $('svg[data-testid="shopping-cart-icon"]'); // Icon for shopping cart
  }
  get cartItemCount(){
    return $('span[data-testid="cart-item-count"]');  // Item count on cart
  }
  // 7. Size Option
  get sizeOption(){
    return $('#size-dropdown'); // Ensure this matches the actual element
  }
  get firstSize(){
    return $('.dropdown__select');
  }
  // 8. Add to Cart
  get addToCartButton() {
    return $('button[data-testid="add-to-cart-button"]');
  }
  get addToCartNotification() {
    return $('div[data-testid="add-to-cart-notification"]');
  }
  // 9. Home Logo
  get homeLogo(){
    return $('a[data-testid="rei-logo"]');
  }
  // Helper: visit homepage
  async open(){
    return browser.url('https://www.rei.com');
  }
  // Helper Method to Click on a Brand Filter
  async applyBrandFilter(brandName){
    await this.brandFilterToggle.click();
    const brandCheckbox = await $(`input[type="checkbox"][id^="brand-${brandName}"]`);
    if (await brandCheckbox.isDisplayed()) {
      await brandCheckbox.click();
    }
  }

  // Helper Method to Add Product to Cart
  async addProductToCart(){
    if (await this.sizeOption.isDisplayed()) {
      await this.sizeOption.click();
    }
    if (await this.addToCartButton.isDisplayed()) {
      await this.addToCartButton.click();
    }
  }
  // Helper Method to Open Product from Listing
  async openProductFromListing(index = 0){
    const product = await this.productList[index];
    await product.click();
  }
  // Helper Method to Close Modal
  async closeModal(){
    if (await this.imageModal.isDisplayed()) {
      await this.modalCloseButton.click();
    }
  }
async clickhikingCategoryLinks() {
  const Hikingcategorytext =["Footwear","Jackets","Shirts","Pants","Shorts","Socks"]
    await this.CampHikeMenu();
    for (let index = 0; index < this.hikingCategoryEndpoints.length; index++) {
       await expect(this.hikingCategoryLinks[index]).toBeExisting();
      await expect(this.hikingCategoryLinks[index]).toHaveText(Hikingcategorytext[index]);
    }

}
  async enterSearchTerms() {
 for (let index = 0; index < this.SearchBarTerms.length;index++) {
  const SearchBarTerms = this.SearchBarTerms[index];
  await $('//input[@class="search__input"]').setValue(SearchBarTerms)
  await expect($('//h1')).toHaveText(this.SearchBarTerms[index])
  await browser.pause(3000);
  await this.searchSubmitButton.click();
  await browser.pause(3000);
  await expect(this.verifySearchBarResults[0]).toBeDisplayed();
 
}
}

async PadsHammockscategoryLinks() {
  const PadsHammocksText =["Sleeping Pads","Hammocks","Cots","Camp Mattresses","Pillows","Blankets"]
  await this.CampHikeMenu();
  
  for (let index = 0; index < this.PadsHammockscategoryendpoints.length; index++) {
    await expect(this.PadsHammockscategorylinks[index]).toBeExisting();
    await expect(this.PadsHammockscategorylinks[index]).toHaveText(PadsHammocksText[index]);
 
   
    

  }
}


async LightingcategoryLinks(){
 const Lightinglinks =["Headlamps","Flashlights","Lanterns",]
 await browser.pause(2000);
 await this.CampHikeMenu();
 
  for (let index = 0; index < this.lightingcategoryLinkendpoints.length; index++) {
    await expect(this.lightingcategoryLinks[index]).toBeExisting();
    await expect(this.lightingcategoryLinks[index]).toHaveText(Lightinglinks[index]);
 
    
    
    
  }

}

async BackpackscategoryLinks(){
  const BackpacksLinks =["Backpacking Packs","Daypacks","Hydration Packs","Baby Carrier Packs","Waist Packs","Accessories"] 
  await this.CampHikeMenu();
  for (let index = 0; index < this.BackpackscategoryEndpoints.length; index++) {
   
    await expect(this.Backpackscategorylinks[index]).toBeExisting();
    await expect(this.Backpackscategorylinks[index]).toHaveText(BackpacksLinks[index]);
 
  }
}

async CampKitchencategoryLinks(){
 const Campkitchenlinks =["Stoves, Grills & Fuel ", "Cookware & Dinnerware", "Coolers", "Food","Drinkware",]
 await this.CampHikeMenu();
  
 for (let index = 0; index < this.CampKitchenendpoints.length; index++) {
    await expect(this.CampKitchencategorylinks[index]).toBeExisting([index]);
    await expect(this.CampKitchencategorylinks[index]).toHaveText(Campkitchenlinks[index]);
}
}
async verifypopup(){
  await expect(this.verifypopup).not.toBeDisplayed();
}
async CampHikeMenu(){
  await this.CampHikeMenubutton.click();
}
async NavigationMenu(){
  const NavigationMenuLinks =["Camp & Hike","Climb","Cycle","Water","Run"]
    await this.popupbutton.click();
    await this.NavigationMenu().length;
    for (let index = 0; index < NavigationMenuLinks.length; index++) {
    await expect(this.NavigationMenu[index]).toBeExisting(NavigationMenuLinks[index]);
    await expect(this.NavigationMenu[index]).toHaveText(NavigationMenuLinks[index])
  }
}

}
export default new HomePage();
