import contactPage from "../pageobjects/contact.page";
import homePage from "../pageobjects/home.page";
import TestData from "../resources/test-data.json";
import Hooks from "../utils/hooks";

describe("Test Case 1: Validate errors are displayed and gone", () => {
  before(() => {
    Hooks.BeforeTestLog(__filename);
  });

  after(() => {
    Hooks.AfterTestLog(__filename);
  });

  it("Open base url: " + TestData.base_url + "", async () => {
    await homePage.openUrl("base_url");
  });

  it("Navigate to Contacts page", async () => {
    await homePage.navigate_To_ContactPage();
  });

  it("Validate Errors are displayed", async () => {
    await contactPage.validateContactErrorIsDisplayed();
  });

  it("Populate mandatory fields and Validate Errors are not displayed", async () => {
    await contactPage.populateContactMandatoryFields();
    await contactPage.validateContactErrorIsNotDisplayed();
  });
});
