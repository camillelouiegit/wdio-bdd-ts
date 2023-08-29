import Helpers from "../utils/helpers";
import ContactHelpers from "../utils/contactHelpers";
import generateRandom from "../utils/generate-random";
import contactPage from "../pageobjects/contact.page";
import commonSteps from "./commonSteps";

class ContactSteps extends Helpers {
  /**
   * submitFeedback() function to be called in specs
   */
  submitFeedback = async ({ forename, email, message }: ContactHelpers) => {
    await commonSteps.navigateTo("Contact");
    await this.populateContactMandatoryFields(forename, email, message);
    if (forename && email && message) {
      await this.validateSuccessMessageIsDisplayed(forename);
    } else {
      await this.validateErrorMessageIsDisplayed();
    }
  };

  populateContactMandatoryFields = async (
    forename?: string,
    email?: string,
    message?: string
  ) => {
    // Generate random name
    generateRandom.name();

    if (forename) {
      await this.setText(contactPage.forename, forename);
    }

    if (email) {
      await this.setText(contactPage.email, email);
    }

    if (message) {
      await this.setText(contactPage.message, generateRandom.message);
    }

    await this.click(contactPage.submitButton, "Submit");
  };

  async validateSuccessMessageIsDisplayed(name?: string) {
    await this.assertText(
      (await (await contactPage.alertSuccess).getText()).toString(),
      `Thanks ${name}, we appreciate your feedback.`
    );

    await browser.takeScreenshot();
  }

  async validateErrorMessageIsDisplayed() {
    expect(contactPage.alertError).toBeDisplayed();

    await this.assertText(
      (await (await contactPage.alertError).getText()).toString(),
      "We welcome your feedback - but we won't get it unless you complete the form correctly."
    );

    await browser.takeScreenshot();
  }
}
export default new ContactSteps();
