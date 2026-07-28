# pet-project-ts-nodejs

# To run all test suites (positive, negative, and E2E scenarios):
npx mocha --require tsx "tests/**/*.spec.ts"

# To run a specific test file (for example, only the E2E tests):
npx mocha --require tsx "tests/e2e.spec.ts"

# This framework uses Mochawesome to generate visual execution reports.
# To run the tests and generate a clean HTML report, use the following command:
npx mocha --require tsx --reporter mochawesome --reporter-options overwrite=true,html=true,json=false "tests/**/*.spec.ts"

# After the test run is complete, open the mochawesome-report/mochawesome.html file in any browser to view the detailed test results.