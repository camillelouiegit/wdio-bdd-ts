import commonSteps from "../StepsDefinition/commonSteps";
import contactSteps from "../StepsDefinition/contactSteps";
import TestData from "../resources/test-data.json";

describe("Feature: Submit Feedback using Contact page", () => {
  before(() => {});

  beforeEach(() => {
    browser.url(TestData.base_url);
    commonSteps.navigateTo("Contact");
  });

  afterEach(() => {});
  describe("Scenario 1: User is able to submit feedback successfully.", () => {
    it("Test Case 1: Submit feedback with valid values", async () => {
      await contactSteps.submitFeedback({
        forename: "test",
        email: "test@test.com",
        message: "test message",
      });
    });
  });

  describe("Scenario 2: User is unable to submit feedback.", () => {
    it("Test Case 2: Submit feedback with blank values", async () => {
      await contactSteps.submitFeedback({});
    });

    it("Test Case 3: Submit feedback with blank forename", async () => {
      await contactSteps.submitFeedback({
        email: "test@test.com",
        message: "test message",
      });
    });

    it("Test Case 4: Submit feedback with blank forename and email", async () => {
      await contactSteps.submitFeedback({
        message: "test message",
      });
    });
  });
});
