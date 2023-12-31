/**
 * All not needed configurations, for this boilerplate, are removed.
 * If you want to know which configuration options you have then you can
 * check https://webdriver.io/docs/configurationfile
 */

export const config: WebdriverIO.Config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  // protocol: '',
  // hostname: '',
  // path: '',
  runner: "local",
  //
  // ==================
  // Specify Test Files
  // ==================
  // The test-files are specified in:
  // - wdio.android.browser.conf.ts
  // - wdio.android.app.conf.ts
  // - wdio.ios.browser.conf.ts
  // - wdio.ios.app.conf.ts
  //
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
  specs: [],
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
  capabilities: [],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "",
  // Default timeout for all waitFor* commands.
  /**
   * NOTE: This has been increased for more stable Appium Native app
   * tests because they can take a bit longer.
   */
  waitforTimeout: 45000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 240000,
  // Default request retries count
  connectionRetryCount: 3,
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 3,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [],
  // Options to be passed to Mocha.
  // See the full list at: http://mochajs.org
  mochaOpts: {
    timeout: 60000,
    bail: true,
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  /**
   * NOTE: No Hooks are used in this project, but feel free to add them if you need them.
   */

  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  before: function (capabilities, specs, browser) {
    console.log("***************************************************");
    console.log("*                   Start Test                    *");
    console.log("***************************************************");
  },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function (result, capabilities, specs) {
    console.log("***************************************************");
    console.log("*                   End Test                      *");
    console.log("***************************************************");
  },
  /**
   * This hook gets executed _before_ every hook within the suite starts.
   * (For example, this runs before calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.). In Cucumber `context` is the World object.
   *
   */
  beforeHook: function (test, context) {},
  /**
   * Function to be executed before a test (in Mocha/Jasmine only)
   * @param {object} test    test object
   * @param {object} context scope object the test was executed with
   */
  beforeTest: function (test, context) {},
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {object}  test             test object
   * @param {object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {*}       result.result    return object of test function
   * @param {number}  result.duration  duration of test
   * @param {boolean} result.passed    true if test has passed, otherwise false
   * @param {object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
  /**
   * Gets executed after all workers have shut down and the process is about to exit.
   * An error thrown in the `onComplete` hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function (exitCode, config, capabilities, results) {
    var allure = require("allure-commandline");
    const reportError = new Error("[INFO] Could not generate Allure report");
    const generation = allure([
      "generate",
      "reports/allure-results",
      "--clean",
      "-o",
      "reports/allure-reports",
    ]);
    return new Promise<void>((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode: number) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("[INFO] Allure report successfully generated");
        resolve();
      });
    });
  },
};
