import homePage from "../pageobjects/home.page";
import shopPage from "../pageobjects/shop.page";
import cartPage from "../pageobjects/cart.page";
import TestData from "../resources/test-data.json";
import Hooks from "../utils/hooks"

describe("Test Case 4: Verify that total = sum(sub totals)", () => {
    before(() => {
        Hooks.BeforeTestLog(__filename);
    });

    after(() => {
        Hooks.AfterTestLog(__filename);
    });
    
    it("Open base url: "+TestData.base_url+"", async () => {
        await homePage.openUrl("base_url");
    });

    it("Navigate to Shop page"  , async () => {
        await homePage.navigate_To_ShopPage();
    });

    it("Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear", async () => {
        await shopPage.addItemsToCart("Stuff Frog", 2);
        await shopPage.addItemsToCart("Fluffy Bunny", 5);
        await shopPage.addItemsToCart("Valentine Bear", 3);
        await shopPage.checkCartMenuCount("test-case-4");
    });

    it("Navigate to Cart Menu", async () => {
        await shopPage.navigateToCartMenu();
    });  

    it("Verify the price for each product", async () => {
        await cartPage.verifyPriceEachProduct();
    });

    it("Verify the total is equal to the sum of sub total", async () => {
        await cartPage.verifyTotalIsSumOfSubTotal();
    });
});
