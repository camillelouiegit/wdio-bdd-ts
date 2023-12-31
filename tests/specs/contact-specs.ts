import contactSteps from "../StepsDefinition/contactSteps";
import TestData from "../resources/test-data.json";

// ---- Feature level
describe("Feature: Submit Feedback in Contact page", () => {
  // Runs before every it()
  beforeEach(() => {
    browser.url(TestData.base_url);
  });

  // Runs after every it()
  afterEach(() => {});

  // Happy Path Scenarios
  describe("Scenario 1: User is able to submit feedback successfully.", () => {
    it("Test Case 1: Submit feedback with valid values", async () => {
      // Steps
      await contactSteps.submitFeedback({
        forename: "test",
        email: "test@test.com",
        message: "test message",
      });
    });
  });
  // Negative Path Scenarios
  describe("Scenario 2: User is unable to submit feedback.", () => {
    it("Test Case 2: Submit feedback with blank values", async () => {
      // Steps
      await contactSteps.submitFeedback({});
    });

    it("Test Case 3: Submit feedback with blank forename", async () => {
      await contactSteps.submitFeedback({
        email: "test@test.com",
        message: "test message",
      });
    });
  });
});
