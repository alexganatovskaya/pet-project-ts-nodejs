# 🌦️ Weather API Test Automation Framework

This is a pet project demonstrating a robust REST API test automation framework built from scratch. It tests the public [Open-Meteo API](https://open-meteo.com/) using modern JavaScript/TypeScript tools and the **API Object Model** design pattern.

## 🛠 Tech Stack
* **Language:** TypeScript / Node.js
* **Framework:** Mocha & Chai
* **HTTP Client:** Axios (with custom interceptors)
* **Schema Validation:** Zod
* **Reporting:** Mochawesome

---

## 💻 Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory:
```bash
cd pet-project-ts-nodejs
Install all required dependencies:

Bash
npm install
🚀 Running Tests
To run all test suites (positive, negative, and E2E scenarios):

Bash
npx mocha --require tsx "tests/**/*.spec.ts"
To run a specific test file (for example, only the E2E tests):

Bash
npx mocha --require tsx "tests/e2e.spec.ts"
📊 Generating HTML Reports
This framework uses Mochawesome to generate visual execution reports.
To run the tests and generate a clean HTML report, use the following command:

Bash
npx mocha --require tsx --reporter mochawesome --reporter-options overwrite=true,html=true,json=false "tests/**/*.spec.ts"
After the test run is complete, open the mochawesome-report/mochawesome.html file in any browser to view the detailed test results.