import { join } from "path";
import { config } from "./wdio.shared.conf";

// ============
// Specs
// ============
config.specs = Array(2).fill("./tests/specs/**/*.ts");
config.waitforTimeout = 20000;
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
    maxInstances: 1,
    "goog:chromeOptions": {
      args: [
        "--incognito",
        "--disable-extensions",
        '--auth-server-whitelist="_"',
        // "--window-position=0,0",
        // "--window-size=1920,1080",
        // "--headless",
      ],
    },
  },
  // {
  //   // The defaults you need to have in your config
  //   browserName: "edge",
  //   platformName: "Windows 10", // OS platform
  //   maxInstances: 1,
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
