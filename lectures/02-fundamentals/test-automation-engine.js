import {
  generateTestUserName,
  buildTestURL,
  buildTestSummary,
  extractTestInfo,
  calculateResponseTime,
  calculateSuccessRate,
  adjustTimeout,
  incrementTestCounter,
  processTestEnvironment,
  createTestMessage,
} from "./homework/task01/test-data-generators.js";
import {
  handleTestEnvironment,
  determineTestAction,
  complexTestDecision,
  selectTestDataSet,
  validateTestData,
  processHTTPStatusCode,
  processTestResults,
  getTestStatus,
  getTestPriority,
  determineTimeout,
  formatTestDuration,
} from "./homework/task03/test-decision-engine.js";
import {
  validateCompleteAPIResponse,
  checkTestEnvironmentAccess,
  validateTestNotFailed,
  complexValidationScenario,
  processTestDataCSV,
  normalizeTestName,
  validateEmailFormat,
  extractUserIdFromResponse,
  validateErrorMessage,
  compareVersions,
  validatePerformanceRange,
  validateStatusCode,
  validateResponseTime,
} from "./homework/task02/test-validators.js";

function executeTestScenario(
  scenarioName,
  environment,
  userRole,
  expectedResults
) {
  console.log(
    `\n========== Executing Test Scenario: ${scenarioName} ==========`
  );
  console.log(`Environment: ${environment}`);
  console.log(`User Role: ${userRole}\n`);

  const testUser = generateTestUserName(userRole);

  const testURL = buildTestURL(environment, scenarioName, testUser);

  const envConfig = handleTestEnvironment(environment);
  console.log();

  const { statusCode, responseTime, hasData, errorCount } = expectedResults;
  const isValid = validateCompleteAPIResponse(
    statusCode,
    responseTime,
    hasData,
    errorCount
  );

  const testResult = isValid ? "pass" : "fail";
  const testAction = determineTestAction(testResult, 0);
  console.log();

  const result = {
    scenarioName: scenarioName,
    environment: environment,
    userRole: userRole,
    testUser: testUser,
    testURL: testURL,
    envConfig: envConfig,
    expectedResults: expectedResults,
    validationPassed: isValid,
    testAction: testAction,
    timestamp: Date.now(),
  };

  console.log(`========== Test Scenario Complete ==========\n`);

  return result;
}

function runTestAutomationDemo() {
  console.log("\n");
  console.log(
    "===================================================================="
  );
  console.log("           AUTOMATED TEST EXECUTION DEMO - START");
  console.log(
    "===================================================================="
  );
  console.log("\n");

  // Initialize test counter
  let testCounter = 0;

  // TEST 1: Login in Development with Admin
  console.log("\n*** TEST 1 of 5 ***");
  const startTime1 = Date.now();

  const result1 = executeTestScenario("login", "development", "admin", {
    statusCode: 200,
    responseTime: 850,
    hasData: true,
    errorCount: 0,
  });

  const endTime1 = Date.now();
  const duration1 = calculateResponseTime(startTime1, endTime1);
  const normalizedName1 = normalizeTestName("  LOGIN  ");
  createTestMessage(
    normalizedName1,
    result1.validationPassed ? "PASS" : "FAIL",
    duration1
  );
  getTestStatus(result1.validationPassed);
  getTestPriority(0, duration1, "low");
  testCounter = incrementTestCounter(testCounter);

  // TEST 2: API in Staging with Tester
  console.log("\n*** TEST 2 of 5 ***");
  const startTime2 = Date.now();

  const result2 = executeTestScenario("api", "staging", "tester", {
    statusCode: 200,
    responseTime: 950,
    hasData: true,
    errorCount: 0,
  });

  const endTime2 = Date.now();
  const duration2 = calculateResponseTime(startTime2, endTime2);
  const normalizedName2 = normalizeTestName("  api  ");
  createTestMessage(
    normalizedName2,
    result2.validationPassed ? "PASS" : "FAIL",
    duration2
  );
  formatTestDuration(950);
  processHTTPStatusCode(200);
  getTestStatus(result2.validationPassed);
  getTestPriority(0, duration2, "low");
  testCounter = incrementTestCounter(testCounter);

  // Validate email format
  validateEmailFormat("tester@example.com");

  // TEST 3: Performance in Production with Guest
  console.log("\n*** TEST 3 of 5 ***");
  const startTime3 = Date.now();

  const result3 = executeTestScenario("performance", "production", "guest", {
    statusCode: 500,
    responseTime: 1200,
    hasData: false,
    errorCount: 3,
  });

  const endTime3 = Date.now();
  const duration3 = calculateResponseTime(startTime3, endTime3);
  const normalizedName3 = normalizeTestName("PERFORMANCE");
  createTestMessage(
    normalizedName3,
    result3.validationPassed ? "PASS" : "FAIL",
    duration3
  );
  formatTestDuration(1200);
  processHTTPStatusCode(500);
  validateErrorMessage("Internal Server Error");
  getTestStatus(result3.validationPassed);
  getTestPriority(5, duration3, "high");
  validateTestNotFailed(result3.validationPassed);
  testCounter = incrementTestCounter(testCounter);

  // TEST 4: API in Development with Admin
  console.log("\n*** TEST 4 of 5 ***");
  const startTime4 = Date.now();

  const result4 = executeTestScenario("api", "development", "admin", {
    statusCode: 201,
    responseTime: 750,
    hasData: true,
    errorCount: 1,
  });

  const endTime4 = Date.now();
  const duration4 = calculateResponseTime(startTime4, endTime4);
  const normalizedName4 = normalizeTestName("api");
  createTestMessage(
    normalizedName4,
    result4.validationPassed ? "PASS" : "FAIL",
    duration4
  );
  formatTestDuration(750);
  processHTTPStatusCode(201);
  validateStatusCode(201, 201);
  validateResponseTime(750, 1000);
  validatePerformanceRange(750, 100, 1500);
  getTestStatus(result4.validationPassed);
  getTestPriority(4, duration4, "medium");
  testCounter = incrementTestCounter(testCounter);

  // Compare versions
  compareVersions("2.1.0", "2.0.0");

  // TEST 5: Login in Production with Tester
  console.log("\n*** TEST 5 of 5 ***");
  const startTime5 = Date.now();

  const result5 = executeTestScenario("login", "production", "tester", {
    statusCode: 200,
    responseTime: 650,
    hasData: true,
    errorCount: 0,
  });

  const endTime5 = Date.now();
  const duration5 = calculateResponseTime(startTime5, endTime5);
  const normalizedName5 = normalizeTestName("login");
  createTestMessage(
    normalizedName5,
    result5.validationPassed ? "PASS" : "FAIL",
    duration5
  );
  formatTestDuration(650);
  processHTTPStatusCode(200);
  validateStatusCode(200, 200);
  validateResponseTime(650, 1000);
  validatePerformanceRange(650, 100, 1500);
  getTestStatus(result5.validationPassed);
  getTestPriority(0, duration5, "low");
  checkTestEnvironmentAccess("tester", true, "production");
  testCounter = incrementTestCounter(testCounter);

  // Extract test info
  extractTestInfo("login:PASSED:225ms");

  // Process test environment
  processTestEnvironment("production");

  // Adjust timeout
  adjustTimeout(500, 2);

  // Determine timeout
  determineTimeout("production");

  // Select test data set
  selectTestDataSet("tester@test.com", "password123");

  // Validate test data
  validateTestData("tester@test.com", "password123", 25);

  // Calculate final metrics
  console.log("\n");
  console.log(
    "===================================================================="
  );
  console.log("           FINAL TEST METRICS AND SUMMARY");
  console.log(
    "===================================================================="
  );
  console.log("\n");

  const totalTests = 5;
  let passedTests = 0;

  if (result1.validationPassed) {
    passedTests += 1;
  }
  if (result2.validationPassed) {
    passedTests += 1;
  }
  if (result3.validationPassed) {
    passedTests += 1;
  }
  if (result4.validationPassed) {
    passedTests += 1;
  }
  if (result5.validationPassed) {
    passedTests += 1;
  }

  // Use calculateSuccessRate function
  const metricsResult = calculateSuccessRate(totalTests, passedTests);

  // Build test summary
  const avgResponseTime = (850 + 950 + 1200 + 750 + 650) / 5;
  buildTestSummary(
    "Complete Test Suite",
    "Multi-Environment",
    totalTests,
    avgResponseTime
  );

  // Process all test results
  processTestResults(totalTests, passedTests, "production");

  // Complex validation scenario
  complexValidationScenario(200, 750, "admin", 5, "production");

  // Complex test decision
  complexTestDecision("admin", "production", "standard", true);

  // Process CSV data (example)
  processTestDataCSV("user1,admin1,tester1");

  // Extract user ID from response (example)
  extractUserIdFromResponse("ID: 12345");

  console.log(`\nTotal Test Counter: ${testCounter}`);

  console.log("\n");
  console.log(
    "===================================================================="
  );
  console.log("           AUTOMATED TEST EXECUTION DEMO - COMPLETE");
  console.log(
    "===================================================================="
  );
  console.log("\n");

  return metricsResult;
}

runTestAutomationDemo();
