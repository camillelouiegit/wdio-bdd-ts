import Helpers from '../utils/helpers';
import TestData from '../resources/test-data.json';
var fbSubTotal: number;
var sfSubTotal: number;
var vbSubTotal: number;

class CartPage extends Helpers {
    /**
     * define elements locator
     */

    get cartItemFunnyCow () {return $('.ng-binding*=Funny Cow');}
    get cartItemFluffyBunny () {return $('.ng-binding*= Fluffy Bunny');}
    get cartItemStuffedFrog () {return $('.ng-binding*= Stuffed Frog');}
    get cartItemValentineBear () {return $('.ng-binding*= Valentine Bear');}

    get cartItemCount () {return $$('tr.cart-item.ng-scope');}
    get stuffedFrogText () {return $('//td[text()=" Stuffed Frog"]');}
    get fluffyBunnyText () {return $('//td[text()=" Fluffy Bunny"]');}
    get valentineBearText () {return $('//td[text()=" Valentine Bear"]');}
   
    get stuffedFrogPrice () {return $('//td[text()=" Stuffed Frog"]/following::td[1]');}
    get stuffedFrogQuantity () {return $('//td[text()=" Stuffed Frog"]/preceding::td[1]//input[@name="quantity"]');}
    get stuffedFrogSubTotal () {return $('//td[text()=" Stuffed Frog"]/following::td[2]');}
    
    get fluffyBunnyPrice () {return $('//td[text()=" Fluffy Bunny"]/following::td[1]');}
    get fluffyBunnyQuantity () {return $('//td[text()=" Fluffy Bunny"]/preceding::td[1]//input[@name="quantity"]');}
    get fluffyBunnySubTotal () {return $('//td[text()=" Fluffy Bunny"]/following::td[2]');}
    
    get valentineBearPrice () {return $('//td[text()=" Valentine Bear"]/following::td[1]');}
    get valentineBearQuantity () {return $('//td[text()=" Valentine Bear"]/preceding::td[1]//input[@name="quantity"]');}
    get valentineBearSubTotal () {return $('//td[text()=" Valentine Bear"]/following::td[2]');}
    get total () {return $('.total');}
     
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async verifyItemsInMenu () {
        await this.assertText(this.cartItemFunnyCow,TestData.assertFunnyCow);
        await this.assertText(this.cartItemFluffyBunny,TestData.assertFluffyBunny);
    }

    async verifyPriceEachProduct () {
        // Stuff Frog
        const stuffFrogPrice = (await this.stuffedFrogPrice.getText()).replace("$", "");
        const stuffedFrogQuantity = await this.stuffedFrogQuantity.getValue();
        const stuffedFrogSubTotal = (await this.stuffedFrogSubTotal.getText()).replace("$", "");
        const sfPriceToString = stuffFrogPrice.toString();
        const sfQuantityToString = stuffedFrogQuantity.toString();
        const sfSubTotalToString = stuffedFrogSubTotal.toString();
        const parsedSFprice = parseFloat(sfPriceToString);
        const parsedSFquantity = parseFloat(sfQuantityToString);
        const parsedSFSubTotal = parseFloat(sfSubTotalToString);

        const assertSFSubTotal = parsedSFprice * parsedSFquantity;
        sfSubTotal = assertSFSubTotal;
        expect(parsedSFSubTotal).toEqual(assertSFSubTotal);
        console.log("[INFO]Expected Stuff Frog Subtotal: $"+assertSFSubTotal);
        console.log("[INFO]Actual Stuff Frog Subtotal: $"+parsedSFSubTotal);
   
        // Fluffy Bunny
        const fluffyBunnyPrice = (await this.fluffyBunnyPrice.getText()).replace("$", "");
        const fluffyBunnyQuantity = await this.fluffyBunnyQuantity.getValue();
        const fluffyBunnySubTotal = (await this.fluffyBunnySubTotal.getText()).replace("$", "");
        const fbPriceToString = fluffyBunnyPrice.toString();
        const fbQuantityToString = fluffyBunnyQuantity.toString();
        const fbSubTotalToString = fluffyBunnySubTotal.toString();
        const parsedFBprice = parseFloat(fbPriceToString);
        const parsedFBquantity = parseFloat(fbQuantityToString);
        const parsedFBSubTotal = parseFloat(fbSubTotalToString);

        const assertFBSubTotal = parsedFBprice * parsedFBquantity;
        fbSubTotal=assertFBSubTotal;
        expect(parsedFBSubTotal).toEqual(assertFBSubTotal);
        console.log("[INFO]Expected Fluffy Bunny Subtotal: $"+parsedFBSubTotal);
        console.log("[INFO]Actual Fluffy Bunny Subtotal: $"+assertFBSubTotal);

        // Valentine Bear
        const valentineBearPrice = (await this.valentineBearPrice.getText()).replace("$", "");
        const valentineBearQuantity = await this.valentineBearQuantity.getValue();
        const valentineBearSubTotal = (await this.valentineBearSubTotal.getText()).replace("$", "");
        const vbPriceToString = valentineBearPrice.toString();
        const vbQuantityToString = valentineBearQuantity.toString();
        const vbSubTotalToString = valentineBearSubTotal.toString();
        const parsedVBprice = parseFloat(vbPriceToString);
        const parsedVBquantity = parseFloat(vbQuantityToString);
        const parsedVBSubTotal = parseFloat(vbSubTotalToString);

        const assertVBSubTotal = parsedVBprice * parsedVBquantity;
        vbSubTotal = assertVBSubTotal;
        expect(parsedVBSubTotal).toEqual(assertVBSubTotal);
        console.log("[INFO]Expected Valentine Bear Subtotal: $"+parsedVBSubTotal);
        console.log("[INFO]Actual Valentine Bear Subtotal: $"+assertVBSubTotal);
    }

    async verifyTotalIsSumOfSubTotal () {
        const total = (await this.total.getText()).replace("Total: ", "");
        const parsedTotal = parseFloat(total);
        const sumTotal = sfSubTotal + fbSubTotal + vbSubTotal;
        expect(parsedTotal).toEqual(sumTotal);
        console.log("[INFO] Actual: "+parsedTotal);
        console.log("[INFO] Expected: "+sumTotal);
    }

}

export default new CartPage();
