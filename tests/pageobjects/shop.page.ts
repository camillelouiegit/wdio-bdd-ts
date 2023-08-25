import Helpers from '../utils/helpers';
import TestData from '../resources/test-data.json';
var fbSubTotal: number;
var sfSubTotal: number;
var vbSubTotal: number;

class ShopPage extends Helpers {
    /**
     * define elements locator
     */
    get stuffedFrog () { return $('#product-2 a'); }
    get fluffyBunny () { return $('#product-4 a'); }
    get funnyCow () { return $('#product-6 a'); }
    get valentineBear () { return $('#product-7 a'); }
    get cartMenuBtn () { return $('a[href="#/cart"]'); }
    get cartCount () { return $('#nav-cart span'); }
     
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async addItemsToCart (item:string, quantity:number) {
        switch (item) {
            case "Stuff Frog": 
                for(var i=0;i<quantity;i++){
                   await this.click(this.stuffedFrog, "Stuff Frog");
                }
                 break;
            case "Fluffy Bunny": 
                for(var i=0;i<quantity;i++){
                  await this.click(this.fluffyBunny, "Fluffy Bunny");
                }
                    break;
            case "Funny Cow": 
                for(var i=0;i<quantity;i++){
                   await this.click(this.funnyCow, "Funny Cow");
                }
                    break;
            case "Valentine Bear":
                for(var i=0;i<quantity;i++){
                    await this.click(this.valentineBear, "Valentine Bear");
                    }
                    break;
            default: console.log("[ERROR]"+item + " does not exist.");
                break;
        }
    }

    async checkCartMenuCount (testcaseNum:string) {
        
        switch (testcaseNum) {
            case "test-case-3": 
                 await this.assertText(this.cartCount,TestData.cartCountTc3);
                 break;
            
            case "test-case-4": 
                 await this.assertText(this.cartCount,TestData.cartCountTc4);
                 break;
            
            default: console.log("[ERROR]"+testcaseNum + " does not exist.");
                break;
        }
    }

    async navigateToCartMenu () {
        await this.click(this.cartMenuBtn,"Cart Menu");
    }

}

export default new ShopPage();
