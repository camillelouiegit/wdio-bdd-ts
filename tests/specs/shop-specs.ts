import homePage from "../pageobjects/home.page";
import shopPage from "../pageobjects/shop.page";
import cartPage from "../pageobjects/cart.page";
import TestData from "../resources/test-data.json";
import commonSteps from "../StepsDefinition/commonSteps";

describe("Test Case 3: Verify the items are in the cart", () => {
  // Runs before every it()
  beforeEach(() => {
    browser.url(TestData.base_url);
  });

  // Runs after every it()
  afterEach(() => {});

  it.only("Navigate to Shop page", async () => {
    await commonSteps.navigateTo("Shop");
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
