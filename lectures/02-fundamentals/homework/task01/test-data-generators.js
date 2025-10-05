function generateTestUserName(basePrefix) {
  const timestamp = Date.now().toString();
  const username = basePrefix + "_" + timestamp;
  console.log("Generated username: ", username + "\n");
  return username;
}

function buildTestURL(environment, endpoint, userId) {
  const url = `https://${environment}.testsite.com/${endpoint}?user=${userId}`;
  console.log("Generated URL: ", url + "\n");
  return url;
}

function createTestMessage(testName, status, duration) {
  const testMessage = `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`;
  console.log("Generated test message: ", testMessage + "\n");
  return testMessage;
}

function calculateResponseTime(startTime, endTime) {
  const duration = endTime - startTime;
  console.log("Duration: ", duration + "ms\n");
  return duration;
}

function calculateSuccessRate(totalTests, passedTests) {
  const failedTests = totalTests - passedTests;
  const successRate = (passedTests / totalTests) * 100;
  console.log("Total Tests: ", totalTests);
  console.log("Passed Tests: ", passedTests);
  console.log("Failed Tests: ", failedTests);
  console.log("Success Percentage: ", successRate + "%\n");

  const testResults = {
    total: totalTests,
    passed: passedTests,
    failed: failedTests,
    successRate: successRate,
  };
  return testResults;
}

function adjustTimeout(baseTimeout, multiplier) {
  const originalTimeout = baseTimeout * multiplier;
  const adjustTimeout =
    originalTimeout > 30000 ? originalTimeout % 30000 : originalTimeout;

  console.log("Original timeout: ", originalTimeout + "ms");
  console.log("Adjusted timeout: ", adjustTimeout + "ms\n");
  return adjustTimeout;
}

function incrementTestCounter(currentCount) {
  console.log(`Original count: ${currentCount}`);

  currentCount++;
  console.log(`After +1: ${currentCount}`);

  currentCount += 5;
  console.log(`After +5: ${currentCount}\n`);

  return currentCount;
}

function processTestEnvironment(environmentName) {
  const normalizedName = environmentName.toLowerCase();
  const baseURL = `https://${normalizedName}.example.com/`;
  const displayName = normalizedName.toUpperCase();

  console.log(`Original Name: ${environmentName}`);
  console.log(`Normalized Name: ${normalizedName}`);
  console.log(`Base URL: ${baseURL}`);
  console.log(`Display Name: ${displayName}\n`);

  const environmentInfo = {
    originalName: environmentName,
    normalizedName: normalizedName,
    baseURL: baseURL,
    displayName: displayName,
  };
  return environmentInfo;
}

function extractTestInfo(testResultString) {
  const parts = testResultString.split(":");
  const testName = parts[0];
  const status = parts[1];
  const duration = parts[2].replace("ms", "");

  console.log("Input string:", testResultString);
  console.log("Split parts:", parts);
  console.log(
    `Extracted testName: ${testName}, status: ${status}, duration: ${duration}`
  );

  const testInfo = {
    testName: testName,
    status: status,
    duration: duration,
  };
  return testInfo;
}

function buildTestSummary(testName, environment, userCount, avgResponseTime) {
  const totalExecutionTime = userCount * avgResponseTime;

  const summary = `
    Test Summary:
    -------------
    Test Name: ${testName}
    Environment: ${environment}
    User Count: ${userCount}
    Average Response Time: ${avgResponseTime} ms
    Total Execution Time: ${totalExecutionTime} ms\n`;

  console.log(summary);
  return summary;
}
