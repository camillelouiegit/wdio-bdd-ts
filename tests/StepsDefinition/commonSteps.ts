import Helpers from "../utils/helpers";
import HomePage from "../pageobjects/home.page";

class CommonSteps extends Helpers {
  async navigateTo(page: string) {
    switch (page) {
      case "Home": {
        return this.click(HomePage.link_home, "Home Page");
      }
      case "Shop": {
        return this.click(HomePage.link_shop, "Shop Page");
      }
      case "Contact": {
        return this.click(HomePage.link_contact, "Contact Page");
      }
      default: {
        console.log(page + " is undefined.");
        break;
      }
    }
  }
}
export default new CommonSteps();
