class randomGenerator {
  makeid(length: any) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  name() {
    const fs = require("fs");
    const name = "TestData" + this.makeid(5);
    const nameJson = { name: name };
    const jsonString = JSON.stringify(nameJson);
    fs.writeFile(
      process.cwd() + "/tests/resources/generatedName.json",
      jsonString,
      (err: any) => {
        if (err) {
          console.log("[INFO]Error writing file", err);
        } else {
          console.log(
            "[INFO]Successfully written random generated name in resourcesgeneratedName.json"
          );
        }
      }
    );
    // return name;
  }

  get email() {
    const email = this.makeid(8) + "@planit-wdio.com";
    return email;
  }

  get phone() {
    const randomNumber = Math.floor(Math.random() * 99999999999) + 11111111111;
    const phone = randomNumber;
    return phone;
  }

  get message() {
    const message = this.makeid(10);
    return message;
  }
}

export default new randomGenerator();
