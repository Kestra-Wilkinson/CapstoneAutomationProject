class HomePage {
  // 1. Search Bar
  get searchBarInput(){
    return $('.input.search__input');
  }
  get searchSubmitButton(){
    return $('<button class="icon-button search__icon-button" id="clear-button" aria-label="Clear Search" title="clear search" type="button" data-js="clear-button" data-ui="clear-button" data-analytics-id="rei_nav:" aria-hidden="true" data-visible="hidden"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="gnav-icon" aria-hidden="true"> <use xlink:href="#gnav-x-lg"></use> </svg> <span class="icon-button__text sr-only" data-icon="left">Clear Search</span> </button>');
  }
  get SearchBarTerms(){
    return [
      'hiking boots',
      'tents',
      'sleeping bags',
      'hydro flask',
      'water bottles',
      'aaaaaaaaaaaaaaaaaaaaaaa',
      '@@@@@@@@@@@@@@@@@@@@@@@',
    ];
  }
  get verifySearchBarResults(){
    return $$('.cdr-container_15-1-0 cdr-container--static_15-1-0 MURvBOgKGVzFQgFh6_Oo');
  }
  // 2. Navigation Menu (example for "Camp & Hike")
   get hikingCategoryLinks(){
    return $$('ul[class="subsite-navigation__list"]')
   }
   get hikingCategoryEndpoints(){
   return [
  ' /c/hiking-footwear',
     '/c/hiking-jackets',
     '/c/hiking-shirts',
      '/c/hiking-pants',
     ' /c/hiking-shorts',
     '/c/hiking-socks',
   ];
  }
  get PadsHammockscategoryLinks(){
    return $$('ul[class="subsite-navigation__item"]');
  }
  get PadsHammockscategoryendpoints(){
   return [
     '/c/sleeping-pads',
    '/c/hammocks',
    ' /c/cots',
    '/c/camp-mattresses',
    '/c/camp-pillows',
    '/c/camp-blankets',
  ];
  }
  get lightingcategoryLinks(){
  return $$('ul[class="subsite-navigation__list"]')
  }

  get lightingcategoryLinkendpoints(){
    return [
      '/c/headlamps',
      '/c/flashlights-and-lightsticks',
      '/c/lanterns',
    ];
  }
  
  get BackpackscategoryLinks() {
    return $$('ul[class="subsite-navigation__item"]');
  }
  
  get BackpackscategoryEndpoints(){[
     '/c/backpacking-packs',
       '/c/day-packs',
       '/c/hiking-hydration-packs',
       '/c/baby-carrier-packs',
       '/c/hiking-waistpacks',
       '/c/pack-accessories'
     ];
    }
    get CampKitchencategoryLinks(){
      return $$('ul[class="subsite-navigation__list"]');
    }
    get CampKitchenendpoints(){[
        '/c/stoves-and-grills',
        '/c/cookware-and-dinnerware',
        '/c/coolers',
        '/c/food',
        '/c/camp-drinkware',
      ];
    }
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
async clickhikingCategoryLinks(){
  for (let index = 0; index < this.hikingCategoryLinks.length;index++){
    const hikingCategoryLinks = this.hikingCategoryLinks[index];
    await this.hikingCategoryLinks.setValue(hikingCategoryLinks)
    await this.hikingCategoryLinks.click();
    await expect(this.hikingCategoryEndpoints).toBeDisplayed();
  }
}
async enterSearchTerms() {
  for (let term of this.SearchBarTerms) {
    await this.searchBarInput.setValue(term);
    await this.searchSubmitButton.click();
    await expect(this.verifySearchBarResults).toBeDisplayed();
  }
}
async PadsHammockscategoryLinks() {
for (let index = 0; index <this.PadsHammockscategoryLinks.length;index ++){
const PadsHammockscategoryLinks= this.PadsHammockscategoryLinks[index];
await this.PadsHammockscategoryLinks.setValue(PadsHammockscategoryLinks);
await this.PadsHammockscategoryLinks.click();
await expect(this.PadsHammockscategoryendpoints).toBeDisplayed();
}
}
}
async LightingcategoryLinks(){
for (let index = 0; index < this.lightingcategoryLinks.length; index++) {
const lightingcategoryLinks= this.lightingcategoryLinks[index];
await this.lightingcategoryLinks.setValue(lightingcategoryLinks);
await this.LightingcategoryLinks.click();
await expect(this.lightingcategoryLinkendpoints).toBeDisplayed();
}
}

async BackpackscategoryLinks(){
for (let index = 0; index <this.BackpackscategoryLinks.length; index++) {
const BackpackscategoryLinks = this.BackpackscategoryLinks[index];
await this.BackpackscategoryLinks.setValue(BackpackscategoryLinks);
await this.BackpackscategoryLinks.click()
await expect(this.BackpackscategoryEndpoints).toBeDisplayed();
}
}

async CampKitchencategoryLinks(){

  for (let index = 0; index < this.CampKitchencategoryLinks.length; index++) {
  const categoryLinks= this.CampKitchencategoryLinks[index];
  await this.CampKitchencategoryLinks.setValue(categoryLinks)
  await this.CampKitchencategoryLinks.click()
  await expect(this.CampKitchencategoryendpoints).toBeDisplayed();
  }
}

  async verifypopup(){
  await expect(this.verifypopup).notToBedisplayed();
  }
}

  export default new HomePage();