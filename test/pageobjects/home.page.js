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
   get CampHikeMenu(){
    return $('//button[@class="subsite-navigation__link subsite-category__button"]');
   }
  
  get hikingCategoryLinks(){
    return $$('ul[@id="mm-camping-and-hiking-hiking"]//*');
   }
  
   hikingCategoryEndpoints =[
  
    '/c/hiking-footwear',
     '/c/hiking-jackets',
     '/c/hiking-shirts',
      '/c/hiking-pants',
     ' /c/hiking-shorts',
    '/c/hiking-socks',];
  

  get PadsHammockscategoryLinks(){
    return $$('ul[@id="mm-camping-and-hiking-sleeping-pads-cots-and-hammocks"]//*');
  }
   
  PadsHammockscategoryendpoints=[
      '/c/sleeping-pads',
    '/c/hammocks',
    '/c/cots',
    '/c/camp-mattresses',
    '/c/camp-pillows',
    '/c/camp-blankets',]
    
  
  get lightingcategoryLinks() {
  return $$('ul[@id="mm-camping-and-hiking-camp-lighting"]//*');
  }
  lightingcategoryLinkendpoints =[
    '/c/headlamps',
    '/c/flashlights-and-lightsticks',
    '/c/lanterns',]
  
  get BackpackscategoryLinks(){
    return $$('ul[@id="mm-camping-and-hiking-hiking-backpacks"]//*');
  }
BackpackscategoryEndpoints=[
      '/c/backpacking-packs',
       '/c/day-packs',
       '/c/hiking-hydration-packs',
       '/c/baby-carrier-packs',
       '/c/hiking-waistpacks',
      '/c/pack-accessories',]


 get CampKitchencategoryLinks() {
  return $$('ul[@id="mm-camping-and-hiking-camp-kitchen"]//*');
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
  for (let index = 0; index < this.hikingCategoryLinks.length;index++){
    const hikingCategoryLinks = this.hikingCategoryLinks[index];
    await $('ul[@id="mm-camping-and-hiking-hiking"]').setValue(hikingCategoryLinks);
    await this.hikingCategoryLinks.click();
    await expect(this.hikingCategoryEndpoints).toBeDisplayed();
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
for (let index = 0; index <this.PadsHammockscategoryendpoints.length;index ++){
const PadsHammockscategoryLinks = this.PadsHammockscategoryLinks[index];
await $('ul[@id="mm-camping-and-hiking-sleeping-pads-cots-and-hammocks"]').setValue(PadsHammockscategoryLinks);
await this.PadsHammockscategoryLinks.click();
await expect(this.PadsHammockscategoryendpoints).toBeDisplayed();
await expect(this.verifypopup).not.toBeDisplayed();
}
}


async LightingcategoryLinks(){

  for (let index = 0; index < this.lightingcategoryLinkendpoints.length;index++) {
const lightingcategoryLinks= this.lightingcategoryLinks[index];
await $('ul[@id="mm-camping-and-hiking-camp-lighting"]').setValue(lightingcategoryLinks);
await this.lightingcategoryLinks.click();
await expect(this.lightingcategoryLinkendpoints).toBeDisplayed();
}
}

async BackpackscategoryLinks(){

  for (let index = 0; index <this.BackpackscategoryLinks.length; index++) {
const BackpackscategoryLinks = this.BackpackscategoryLinks[index];{
await $('ul[@id="mm-camping-and-hiking-hiking-backpacks"]').setValue(BackpackscategoryLinks);
await this.BackpackscategoryLinks.click();
await expect(this.BackpackscategoryEndpoints).toBeDisplayed();
}
}
}
async CampKitchencategoryLinks(){
  for (let index = 0; index < this.CampKitchencategoryLinks.length; index++) {
  const CampKitchencategoryLinks= this.CampKitchencategoryLinks[index];{
  await $('ul[@id="mm-camping-and-hiking-camp-kitchen"]').setValue(CampKitchencategoryLinks);
  await this.CampKitchencategoryLinks.click();
  await expect(this.CampKitchencategoryendpoints).toBeDisplayed();
}
}
}
async verifypopup(){
  await expect(this.verifypopup).not.toBeDisplayed();
}
async CampHikeMenu(){
  await expect(this.CampHikeMenu).open()
}
}
export default new HomePage();
