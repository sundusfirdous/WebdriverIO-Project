# WebdriverIO Test Automation Framework

A TypeScript-based end-to-end test automation framework built using **WebdriverIO v9, Mocha, and the Page Object Model (POM)**.

The project demonstrates a maintainable UI automation structure with reusable page objects, TypeScript, WebdriverIO assertions, and visual snapshot validation.

## 🚀 Tech Stack

* **Language:** TypeScript
* **Automation:** WebdriverIO v9
* **Test Framework:** Mocha
* **Assertions:** WebdriverIO / `expect-webdriverio`
* **Design Pattern:** Page Object Model (POM)
* **Browser:** Google Chrome
* **Runtime:** Node.js
* **Configuration:** TypeScript (`wdio.conf.ts`)
* **Visual Testing:** WebdriverIO Visual Service

## 📌 Project Overview

This project automates a web login workflow using WebdriverIO and TypeScript.

The framework follows the **Page Object Model** to separate:

* Test scenarios
* Page locators
* Page interaction methods
* WebdriverIO configuration

This makes the automation code easier to maintain, reuse, and scale.

## 🧪 Automated Scenario

### Login with valid credentials

The current test validates a successful login flow:

1. Open the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Submit the login form.
5. Verify that the secure-area confirmation message is displayed.
6. Validate the confirmation message text.
7. Perform a visual snapshot comparison of the confirmation element.

The test is implemented using reusable `LoginPage` and `SecurePage` page objects.

## 🏗️ Project Structure

```text
WebdriverIO-Project/
│
├── test/
│   ├── pageobjects/
│   │   ├── page.ts
│   │   ├── login.page.ts
│   │   └── secure.page.ts
│   │
│   └── specs/
│       └── test.e2e.ts
│
├── wdio.conf.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## 🧩 Page Object Model

The framework uses Page Object Model to keep locators and page-specific actions separate from test cases.

### LoginPage

The `LoginPage` encapsulates:

* Username field
* Password field
* Submit button
* Login action
* Page navigation

The login method accepts `username` and `password` as TypeScript string parameters and performs the corresponding UI actions.

### SecurePage

The `SecurePage` encapsulates the flash confirmation element displayed after successful login.

## ⚙️ WebdriverIO Configuration

The project uses the WebdriverIO local runner with TypeScript configuration.

Key configuration includes:

* Local test execution
* TypeScript support
* Chrome browser capability
* Test discovery under `test/specs/**/*.ts`
* Up to 10 concurrent instances
* Mocha framework
* Spec reporter
* Visual testing service

The WebdriverIO configuration is maintained in `wdio.conf.ts`.

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/sundusfirdous/WebdriverIO-Project.git
```

Navigate to the project:

```bash
cd WebdriverIO-Project
```

Install dependencies:

```bash
npm install
```

## ▶️ Run Tests

Execute the WebdriverIO test suite:

```bash
npm run wdio
```

The project exposes the WebdriverIO runner through the `wdio` npm script.

## 🔍 Key Automation Concepts Demonstrated

* WebdriverIO browser automation
* TypeScript-based test automation
* Mocha test framework
* Page Object Model
* Reusable page methods
* Getter-based element selectors
* Asynchronous UI interactions using `async/await`
* WebdriverIO assertions
* Text validation
* Element existence validation
* Visual snapshot comparison
* WebdriverIO configuration and capabilities
* Modular and maintainable test structure

## 🎯 Learning & Portfolio Objective

This project demonstrates practical experience in building a structured UI automation framework using modern **TypeScript and WebdriverIO** practices.

It is designed as a portfolio project to demonstrate skills relevant to **SDET, QA Automation Engineer, and Test Automation Engineer** roles.

## 👩‍💻 Author

**Sundus Firdous**

GitHub: https://github.com/sundusfirdous
