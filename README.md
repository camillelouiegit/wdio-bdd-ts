## Based on

This is currently based on:

- **WebdriverIO:** `7.21.0`

## Installation

1. Install the recommended or latest NodeJS version here: https://nodejs.org/en/download
2. Clone this Repository
3. Open cloned Repo via cli or terminal and enter `npm install`

## Run Tests

3. Enter in terminal:
   - **npm run web.browser //run all test cases `Refactoring`**
   - **npm run web.browser.testcase1 //run tc1 only `Refactoring`**
   - **npm run web.browser.testcase2 //run tc2 only `(Latest and running)`**
   - **npm run web.browser.testcase3 //run tc3 only `Refactoring`**
   - **npm run web.browser.testcase4 //run tc4 only `Refactoring`**

## Configure how many times Tests will run

4. Open /config/wdio.web.browser.ts:
   - Change Array(x) **config.specs = Array(x)**

## Generate a graphical html report (Allure Reports)

5. Enter in terminal:

- **npm run allure.reports //This will automatically opens the Allure html report**
