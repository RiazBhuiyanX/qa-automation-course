function validateStatusCode(expectedCode, actualCode) {
  const isStrictEqual = expectedCode === actualCode;
  const isLooseEqual = expectedCode == actualCode;

  console.log(`Expected Code: ${expectedCode}`);
  console.log(`Actual Code: ${actualCode}`);
  console.log(`Strict equality (===) result: ${isStrictEqual}`);
  console.log(`Loose equality (==) result: ${isLooseEqual}\n`);

  return isStrictEqual;
}

function validateResponseTime(actualTime, maxAllowedTime) {
  const result = actualTime <= maxAllowedTime;

  console.log(
    `Response time ${actualTime}ms is within limit ${maxAllowedTime}ms: ${result}\n`
  );

  return result;
}

function validatePerformanceRange(responseTime, minTime, maxTime) {
  const result = responseTime >= minTime && responseTime <= maxTime;

  console.log(
    `Response time ${responseTime}ms is within range ${minTime}ms to ${maxTime}ms: ${result}\n`
  );

  return result;
}

function compareVersions(currentVersion, requiredVersion) {
  const result = currentVersion !== requiredVersion;

  console.log(
    `Comparing versions -> Current: ${currentVersion}, Required: ${requiredVersion}`
  );
  console.log(`Versions differ: ${result}\n`);

  return result;
}

function validateErrorMessage(errorMessage) {
  const lowerCaseMessage = errorMessage.toLowerCase();
  const containsError = lowerCaseMessage.includes("error");
  const position = lowerCaseMessage.indexOf("error");

  console.log(`Error message: ${errorMessage}`);
  console.log(`Position of "error": ${position}`);
  console.log(`Contains 'error' text: ${containsError}\n`);

  return containsError;
}

function extractUserIdFromResponse(responseText) {
  const idPosition = responseText.indexOf("ID: ");
  const idStart = idPosition + 4; // 4 is length of "ID: "
  const extractedId = responseText.slice(idStart).trim();

  console.log("Response text:", responseText);
  console.log("Position of 'ID: ':", idPosition);
  console.log("Extracted ID:", extractedId);
  console.log("Extraced ID type:", typeof extractedId + "\n");

  return extractedId;
}

function validateEmailFormat(email) {
  const hasAtSymbol = email.includes("@");
  const hasDotSymbol = email.includes(".");
  const atIndex = email.indexOf("@");
  const dotIndex = email.indexOf(".");
  const isValid = hasAtSymbol && hasDotSymbol && atIndex < dotIndex;

  console.log(`Contains '@': ${hasAtSymbol}`);
  console.log(`Contains '.': ${hasDotSymbol}`);
  console.log(`'@' position: ${atIndex}`);
  console.log(`'.' position: ${dotIndex}`);
  console.log(`Email is valid: ${isValid}\n`);

  return isValid;
}

function processTestDataCSV(csvString) {
  const testNamesArray = csvString.split(",");

  console.log("Original CSV string:", csvString);
  console.log("Resulting test names array:", testNamesArray);
  console.log();

  return testNamesArray;
}

function normalizeTestName(testName) {
  const trimmed = testName.trim();
  const lowercased = trimmed.toLowerCase();
  const replaced = lowercased.replaceAll(" ", "_");
  const sliced = replaced.slice(0, 20);

  console.log("Original name:", testName);
  console.log("After trim:", trimmed);
  console.log("After toLowerCase:", lowercased);
  console.log("After replace spaces with underscores:", replaced);
  console.log("After slice to 20 characters:", sliced + "\n");

  return sliced;
}

function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  const condition1 =
    statusCode === 200 && responseTime < 1000 && hasData === true;
  const condition2 = errorCount === 0;
  const finalResult = condition1 && condition2;

  console.log(
    `Condition 1 (Status Code IS 200 AND response time IS less than 1000 AND there IS data): ${condition1}`
  );
  console.log(`Condition 2 (No errors): ${condition2}`);
  console.log(`Final result (all conditions pass): ${finalResult}\n`);

  return finalResult;
}

function checkTestEnvironmentAccess(userRole, isAuthenticated, environment) {
  const roleAccess = userRole === "admin" || userRole === "tester";
  const authAccess = isAuthenticated === true;
  const envAccess = environment === "dev" || environment === "staging";
  const hasAccess = roleAccess && authAccess && envAccess;

  console.log(`Role access (admin or tester): ${roleAccess}`);
  console.log(`Authenticated: ${authAccess}`);
  console.log(`Environment (dev or staging): ${envAccess}`);
  console.log(`Access granted: ${hasAccess}\n`);

  return hasAccess;
}

function validateTestNotFailed(hasErrors, isCancelled, isTimeout) {
  const noErrors = !hasErrors;
  const notCancelled = !isCancelled;
  const notTimedOut = !isTimeout;
  const testPassed = noErrors && notCancelled && notTimedOut;

  console.log(`No errors: ${noErrors}`);
  console.log(`Not cancelled: ${notCancelled}`);
  console.log(`Not timed out: ${notTimedOut}`);
  console.log(`Test passed: ${testPassed}\n`);

  return testPassed;
}

function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  environment
) {
  const condStatusAndResponse = statusCode === 200 && responseTime < 500;
  const condDataCount = dataCount > 0;
  const condition1 = condStatusAndResponse && condDataCount;
  const condition2 = userRole === "admin" && environment === "dev";
  const finalResult = condition1 || condition2;

  console.log(
    `Condition (Status code IS 200 AND response time IS less than 500): ${condStatusAndResponse}`
  );
  console.log(`Condition (Data count IS greater than 0): ${condDataCount}`);
  console.log(`Combined Condition 1 (previous two combined): ${condition1}`);
  console.log(
    `Condition 2 (User role IS "admin" AND environment IS "dev"): ${condition2}`
  );
  console.log(
    `Final validation result (Condition 1 OR Condition 2): ${finalResult}\n`
  );

  return finalResult;
}

export {
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
};
