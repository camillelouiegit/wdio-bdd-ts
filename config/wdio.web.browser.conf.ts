import { join } from "path";
import { config } from "./wdio.shared.conf";

// ============
// Specs
// ============
config.specs = Array(2).fill([
  "./tests/specs/contact-specs.ts",
  "./tests/specs/shop-specs.ts",
]);

// ============
// Suites
// ============
// See: https://webdriver.io/docs/organizingsuites/
config.suites = {
  shop: ["./tests/specs/shop-specs.ts"],
  contact: ["./tests/specs/contact-specs.ts"],
};

// ============
// Capabilities
// ============
// For all capabilities please check
// https://webdriver.io/docs/capabilities
config.capabilities = [
  {
    maxInstances: 1,
    browserName: "chrome",
    acceptInsecureCerts: true,
    "goog:chromeOptions": {
      args: ["--incognito", "--headless"],
    },
  },
  // {
  //   maxInstances: 1,
  //   browserName: "edge",
  //   acceptInsecureCerts: true,
  //   "ms:edgeOptions": {
  //     args: ["--start-maximized"],
  //   },
  // },
];
// Test reporter
// See: https://webdriver.io/docs/wdio-timeline-reporter/
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
