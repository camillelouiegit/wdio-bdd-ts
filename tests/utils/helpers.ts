export default class Page {
  /**
   * @element {any} provide element when calling the function
   */
  async click(element: any, text: string) {
    await element.waitForExist();
    await element.click();
    console.log("[INFO]" + '"' + text + '"' + " is clicked");
  }

  /**
   * @element {any} provide element when calling the function
   * @text {String} provide text value when calling the function
   */
  async selectDropdown(element: any, text: any) {
    await element.selectByAttribute("value", text);
  }

  /**
   * @element {Element} provide element when calling the function
   * @text {String} provide text value when calling the function
   */
  async setText(element: any, text: string) {
    await element.waitForExist();
    await element.setValue(text);
    console.log("[INFO]" + '"' + text + '"' + " is entered.");
  }

  /**
   * @element {Element} provide element when calling the function
   * @expected {String} provide expected value when calling the function
   */
  async assertText(actual: string, expected: string) {
    expect(actual).toEqual(expected);
    console.log("[INFO]Actual: " + actual);
    console.log("[INFO]expected: " + expected);
  }

  /**
   * @expected {String} provide expected value when calling the function
   */
  assertUrl = async (expected: string) => {
    const actualUrl = await browser.getUrl();
    console.log("[INFO]Actual: " + actualUrl);
    expect(actualUrl).toEqual(expected);
    console.log("[INFO]Expected: " + expected);
  };
}
