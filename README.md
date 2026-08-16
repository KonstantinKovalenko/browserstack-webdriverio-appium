# # WebdriverIO Appium BrowserStack Automation Framework

Native Android mobile automation framework for the **Sauce Labs App** built with **WebdriverIO**, **Appium**, and **BrowserStack**.  

✔ WebdriverIO + Appium mobile automation  
✔ Native Android application testing  
✔ Page Object Model (POM) architecture  
✔ Reusable screen objects, components, and helper utilities  
✔ Centralized test data management  
✔ Local Android Emulator execution  
✔ Real-device cloud execution with BrowserStack  
✔ Automated test execution with GitHub Actions  
✔ Allure test reporting  
✔ GitHub Pages report publishing  

[![CI](https://github.com/KonstantinKovalenko/browserstack-webdriverio-appium/actions/workflows/browserstack.yml/badge.svg)](https://github.com/KonstantinKovalenko/browserstack-webdriverio-appium/actions/workflows/browserstack.yml)

[![GitHub Pages](https://img.shields.io/badge/View-Latest_Report-blue?logo=github)](https://konstantinkovalenko.github.io/browserstack-webdriverio-appium/)

[![View_Browserstack_Reports](https://img.shields.io/badge/GitHub-View_Browserstack_Reports-181717?logo=github&logoColor=white)](https://github.com/KonstantinKovalenko/browserstack-webdriverio-appium/blob/main/assets/screenshots/BrowserstackReports.png)

---

## Test Coverage

The framework currently contains **5 end-to-end test cases:**

| ID | Test Case | Coverage |
|---------|-------------|-------------|
| TC-01 | Authentication | Login with valid credentials and logout |
| TC-02 | Form validation | Login validation when password is not provided |
| TC-03 | Product sorting | Sort products by price from low to high |
| TC-04 | Cart functionality | Add, verify, and remove a product from the cart |
| TC-05 | Checkout | Complete checkout with valid shipping information |

---

## BrowserStack

The framework integrates with **BrowserStack App Automate** for cloud-based mobile testing.  

The Android application is uploaded to BrowserStack and referenced through a `bs://` application identifier.  

BrowserStack execution is configured with:  

- **Device:** Samsung Galaxy S22  
- **Android:** 12.0  
- **Automation:** Appium + UiAutomator2  
- **Test suite:** 5 automated tests  
- **Build:** WDIO Appium BrowserStack  

BrowserStack credentials and the application identifier are stored as environment variables and GitHub Secrets rather than being committed to the repository.  

---

## Continuous Integration

GitHub Actions runs the complete mobile test suite on every push and pull request to `main`.  

The CI pipeline:  

- Checks out the repository  
- Sets up Node.js  
- Sets up Java  
- Installs project dependencies with `npm ci`  
- Runs all 5 tests on BrowserStack  
- Generates an Allure report  
- Uploads the report as a GitHub Pages artifact  
- Publishes the latest Allure report to GitHub Pages  

The BrowserStack test results can also be reviewed through the BrowserStack dashboard.  

---

## Project Structure

```
browserstack-webdriverio-appium/
│
├── .github/
│   └── workflows/
│       └── browserstack.yml
│
├── app/
│   └── Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
│
├── assets/
│   └── screenshots/
│       └── BrowserstackReports.png
│
├── config/
│   ├── wdio.browserstack.conf.ts
│   └── wdio.conf.ts
│
├── docs/
│   └── test-cases/
│       └── TestCases_2.0.xlsx
│
├── src/
│   ├── components/
│   │   ├── header.ts
│   │   └── mainMenu.ts
│   │
│   ├── screens/
│   │   ├── base.screen.ts
│   │   ├── cart.screen.ts
│   │   ├── checkout.screen.ts
│   │   ├── checkoutComplete.screen.ts
│   │   ├── checkoutOverview.screen.ts
│   │   ├── login.screen.ts
│   │   └── products.screen.ts
│   │
│   ├── types/
│   │   ├── appium.d.ts
│   │   └── product.ts
│   │
│   └── utils/
│       ├── functions.ts
│       ├── restartHelper.ts
│       └── testData.ts
│
├── tests/
│   └── specs/
│       ├── 01Authentication.spec.ts
│       ├── 02Validation.spec.ts
│       ├── 03Sorting.spec.ts
│       ├── 04Cart.spec.ts
│       └── 05Checkout.spec.ts
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 24+  
- Java 17+  
- Android SDK  
- Android Emulator  
- Appium 3  
- UiAutomator2 driver  
- BrowserStack account for cloud execution  

### Installation

Clone the repository:

```
git clone https://github.com/KonstantinKovalenko/browserstack-webdriverio-appium.git
```

Install dependencies:

```
npm install
```

### Environment Variables  

Create a `.env` file in the project root, based on `.env.example`:

```
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
BROWSERSTACK_APP=bs://your_app_id
```

These values are required for BrowserStack execution.

> Never commit `.env` or real BrowserStack credentials to the repository.

For GitHub Actions, the same values are provided securely through GitHub Secrets.

---

### Useful Scripts

| Script | Description |
|---------|-------------|
| `npm test` | Run all tests locally on the Android Emulator |
| `npm run test:browserstack` | Run all tests on BrowserStack |
| `npm run allure:generate` | Generate the Allure report |
| `npm run allure:open` | Open the generated Allure report locally |

---

## Author

Konstantin Kovalenko

* GitHub: [KonstantinKovalenko](https://github.com/KonstantinKovalenko)
* LinkedIn: [Kostyantyn Kovalenko](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Telegram: @kovakost
* Email: chvyaka.kk@gmail.com