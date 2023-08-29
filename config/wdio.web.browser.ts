import { join } from "path";
import { config } from "./wdio.shared.conf";

// ============
// Specs
// ============
config.specs = ["./tests/specs/**/*.ts"];
config.suites = {
  shop: ["./tests/specs/shop-specs.ts"],
  contact: ["./tests/specs/contact-specs.ts"],
};
// Options to be passed to Mocha.
// See the full list at: http://mochajs.org
// config.mochaOpts = [{ ui: "bdd", timeout: 60000 }];
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    browserName: "chrome", // options: `firefox`, `chrome`,`edge`, `opera`, `safari`
    platformName: "Windows 10", // OS platform
    maxInstances: 2,
    "goog:chromeOptions": {
      args: [
        "--start-maximized",
        "--incognito",
        // "--headless",
      ],
    },
  },
  // {
  //   // The defaults you need to have in your config
  //   browserName: "edge",
  //   platformName: "Windows 10", // OS platform
  //   maxInstances: 1,
  //   "ms:edgeOptions": {
  //     args: ["--start-maximized"],
  //   },
  // },
];
// Test reporter for stdout.
// The only one supported by default is 'dot'
// see also: https://webdriver.io/docs/dot-reporter
config.reporters = [
  "spec",
  [
    "allure",
    {
      outputDir: "reports/allure-results",
      disableWebdriverStepsReporting: true,
    },
  ],
];

exports.config = config;
