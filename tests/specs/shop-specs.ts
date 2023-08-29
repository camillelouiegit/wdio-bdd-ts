import homePage from "../pageobjects/home.page";
import shopPage from "../pageobjects/shop.page";
import cartPage from "../pageobjects/cart.page";
import TestData from "../resources/test-data.json";
import Hooks from "../utils/hooks"

describe("Test Case 3: Verify the items are in the cart", () => {
    before(() => {
        Hooks.BeforeTestLog(__filename);
    });

    after(() => {
        Hooks.AfterTestLog(__filename);
    });

    it("Open base url: "+TestData.base_url+"", async () => {
        await homePage.openUrl("base_url");
    });

    it("Navigate to Shop page", async () => {
        await homePage.navigate_To_ShopPage();
    });

    it("Buy 2 Funny Cow and 1 Fluffy Bunny", async () => {
        await shopPage.addItemsToCart("Funny Cow", 2);
        await shopPage.addItemsToCart("Fluffy Bunny", 1);
        await shopPage.checkCartMenuCount("test-case-3");
    });

    it("Navigate to Cart Menu", async () => {
        await shopPage.navigateToCartMenu();
    });  

    it("Validate success message is displayed", async () => {
        await cartPage.verifyItemsInMenu();
    
    });
});
