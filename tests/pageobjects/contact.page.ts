import Helpers from "../utils/helpers";

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
}

export default new ContactPage();
