import Helpers from "../utils/helpers";
import TestData from "../resources/test-data.json";
class LoginPage extends Helpers {
  /**
   * define elements
   */
  get link_home() {
    return $("a[href='#/home']");
  }
  get link_shop() {
    return $("a[href='#/shop']");
  }
  get link_contact() {
    return $("a[href='#/contact']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to opening of base urls, login using username and password, etc.
   */

  async navigate_To_ShopPage() {
    await this.click(this.link_shop, "Shop link");
  }

  async navigate_To_ContactPage() {
    await this.click(this.link_contact, "Contact link");
  }
}

export default new LoginPage();
