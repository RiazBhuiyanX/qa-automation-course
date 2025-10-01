import {
  BASE_URL,
  DEFAULT_TIMEOUT,
  API_ENDPOINTS,
  testUserEmail,
  debugMode,
} from "../task02/test-data-config.js";
function startTestSuite(suiteName) {
  console.log("========================================");
  console.log("  TEST SUITE: " + suiteName);
  console.log("========================================");

  const startTime = new Date().toISOString();
  console.log("Start Time: " + startTime);
  console.log("");

  return startTime;
}

function endTestSuite(suiteName, startTime) {
  const endTime = new Date().toISOString();

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const duration = endDate - startDate;

  console.log("========================================");
  console.log("  TEST SUITE COMPLETED: " + suiteName);
  console.log("========================================");
  console.log("Start Time: " + startTime);
  console.log("End Time: " + endTime);
  console.log("Duration: " + duration + " ms");
  console.log("========================================");

  return duration;
}

function logTestStep(stepNumber, description, status) {
  const timestamp = new Date().toISOString();
  const logMessage =
    "[Step " +
    stepNumber +
    "] " +
    description +
    " - " +
    status.toUpperCase() +
    " - " +
    timestamp;

  if (status === "pass") {
    console.log(logMessage);
  } else if (status === "fail") {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
}

function generateTestReport(testResults) {
  const totalTests =
    testResults.passed + testResults.failed + testResults.skipped;

  let passPercentage;
  if (totalTests > 0) {
    passPercentage = (testResults.passed / totalTests) * 100;
  } else {
    passPercentage = 0;
  }

  console.log("========================================");
  console.log("         TEST REPORT SUMMARY");
  console.log("========================================");
  console.log("");
  console.log("Total Tests: " + totalTests);
  console.log("Passed: " + testResults.passed);
  console.log("Failed: " + testResults.failed);
  console.log("Skipped: " + testResults.skipped);
  console.log("");
  console.log("Pass Rate: " + passPercentage + "%");
  console.log("");
  console.log("========================================");

  const summary = {
    total: totalTests,
    passed: testResults.passed,
    failed: testResults.failed,
    skipped: testResults.skipped,
    passPercentage: passPercentage,
  };

  return summary;
}

function debugVariable(variableName, variableValue) {
  console.log("========================================");
  console.log(" Debugging Variable");
  console.log("========================================");
  console.log("Name:  " + variableName);
  console.log("Value: " + variableValue);
  console.log("Type:  " + typeof variableValue);
  console.log("========================================");
}

function compareExpectedActual(expected, actual) {
  console.log("========================================");
  console.log(" Compare Values");
  console.log("========================================");
  console.log("Expected: " + expected + " (type: " + typeof expected + ")");
  console.log("Actual:   " + actual + " (type: " + typeof actual + ")");

  let isEqual = false;
  if (expected === actual) {
    isEqual = true;
    console.log("Result: MATCH ✓");
  } else {
    console.error("Result: MISMATCH ✗");
  }

  console.log("========================================");

  return isEqual;
}

function logSystemInfo() {
  const timestamp = new Date().toISOString();

  console.log("========================================");
  console.log(" System Info For Debugging");
  console.log("========================================");
  console.log("");
  console.log("Timestamp: " + timestamp);
  console.log("BASE_URL type: " + typeof BASE_URL);
  console.log("DEFAULT_TIMEOUT type: " + typeof DEFAULT_TIMEOUT);
  console.log("API_ENDPOINTS type: " + typeof API_ENDPOINTS);
  console.log("testUserEmail type: " + typeof testUserEmail);
  console.log("debugMode type: " + typeof debugMode);
  console.log("");
  console.log("========================================");

  return {
    timestamp: timestamp,
    baseUrlType: typeof BASE_URL,
    defaultTimeoutType: typeof DEFAULT_TIMEOUT,
    apiEndpointsType: typeof API_ENDPOINTS,
    testUserEmailType: typeof testUserEmail,
    debugModeType: typeof debugMode,
  };
}
