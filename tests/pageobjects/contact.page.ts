import Helpers from "../utils/helpers";
import generateRandom from "../utils/generate-random";
import TestData from "../resources/test-data.json";
import generatedName from "../resources/generatedName.json";

class ContactPage extends Helpers {
  /**
   * define elements locator
   */
  get submitButton() {
    return $(".form-actions a");
  }
  get forenameError() {
    return $("#forename-err");
  }
  get emailError() {
    return $("#email-err");
  }
  get messageError() {
    return $("#message-err");
  }
  get forename() {
    return $("#forename");
  }
  get email() {
    return $("#email");
  }
  get message() {
    return $("#message");
  }
  get alertSuccess() {
    return $("div.alert.alert-success");
  }

  get alertError() {
    return $("div.alert.alert-error");
  }

  get sendingFeedbackModal() {
    return $("Sending Feedback");
  }
  get alertSuccessText() {
    return $("strong.ng-binding");
  }

  get backButton() {
    return $("a=« Back");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async populateContactMandatoryFields() {
    generateRandom.name();
    await this.setText(this.forename, generatedName.name);
    await this.setText(this.email, generateRandom.email);
    await this.setText(this.message, generateRandom.message);
  }

  async submitForm() {
    expect(this.submitButton).toBeDisplayed();
    await this.click(this.submitButton, "Submit");
  }

  async validateContactErrorIsNotDisplayed() {
    expect(this.forenameError).not.toBeDisplayed();
    expect(this.emailError).not.toBeDisplayed();
    expect(this.messageError).not.toBeDisplayed();
  }

  async validateSuccessMessageIsDisplayed() {
    await this.alertSuccess.waitForExist({
      timeout: 20000,
      timeoutMsg: "Element does not exist after 20s.",
    });
  }
}

export default new ContactPage();
