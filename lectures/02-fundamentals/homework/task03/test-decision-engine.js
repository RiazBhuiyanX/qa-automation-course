function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    console.log("Test passed successfully.");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log("Test failed but will retry.");
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log("Test failed and max retries reached. Aborting.");
    return "abort";
  } else {
    console.log("Test result unknown, needs investigation.");
    return "investigate";
  }
}

function validateTestData(email, password, age) {
  console.log("Validating email...");
  if (email && email.includes("@")) {
    console.log("Email is valid.");
    console.log("Validating password...");
    if (password && password.length >= 8) {
      console.log("Password is valid.");
      console.log("Validating age...");
      if (age >= 18 && age <= 100) {
        console.log("Age is valid.");
        return "valid";
      } else {
        console.log("Age validation failed.");
        return "Age must be between 18 and 100.";
      }
    } else {
      console.log("Password validation failed.");
      return "Password must be at least 8 characters.";
    }
  } else {
    console.log("Email validation failed.");
    return "Invalid email address.";
  }
}

function processTestResults(totalTests, passedTests, environment) {
  const failedTests = totalTests - passedTests;
  const successRate = (passedTests / totalTests) * 100;

  let grade;
  let excellentThreshold = 95;
  let goodThreshold = 85;
  let acceptableThreshold = 70;

  if (environment === "production") {
    excellentThreshold += 5;
    goodThreshold += 5;
    acceptableThreshold += 5;
  }

  if (successRate >= excellentThreshold) {
    grade = "excellent";
  } else if (successRate >= goodThreshold) {
    grade = "good";
  } else if (successRate >= acceptableThreshold) {
    grade = "acceptable";
  } else {
    grade = "needs improvement";
  }

  const result = {
    totalTests: totalTests,
    passedTests: passedTests,
    failedTests: failedTests,
    successRate: successRate,
    grade: grade,
  };
  return result;
}

function getTestStatus(isPassed) {
  const status = isPassed ? "✅ PASSED" : "❌ FAILED";
  console.log(`Test status: ${status}`);
  return status;
}

function determineTimeout(environment) {
  const timeout = environment === "production" ? 30000 : 10000;
  console.log(`Environment: ${environment}, Timeout: ${timeout} ms`);
  return timeout;
}

function formatTestDuration(durationMs) {
  const formatted =
    durationMs < 1000 ? durationMs + "ms" : durationMs / 1000 + "s";
  console.log(
    `Original duration: ${durationMs} ms, Formatted duration: ${formatted}`
  );
  return formatted;
}

function getTestPriority(errorCount, responseTime) {
  const priority =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";
  console.log(
    `Error Count: ${errorCount}, Response Time: ${responseTime} ms, Priority: ${priority}`
  );
  return priority;
}

function handleTestEnvironment(environment) {
  switch (environment) {
    case "development":
      console.log("Using dev settings");
      return { timeout: 5000, debugMode: true };
    case "staging":
      console.log("Using staging settings");
      return { timeout: 15000, debugMode: true };
    case "production":
      console.log("Using production settings");
      return { timeout: 30000, debugMode: false };
    default:
      console.log("Unknown environment");
      return { timeout: 10000, debugMode: false };
  }
}

function processHTTPStatusCode(statusCode) {
  switch (statusCode) {
    case 200:
      console.log("Success - Request completed");
      return "Success - Request completed";
    case 201:
      console.log("Created - Resource created successfully");
      return "Created - Resource created successfully";
    case 400:
      console.log("Bad Request - Check your data");
      return "Bad Request - Check your data";
    case 401:
      console.log("Unauthorized - Authentication required");
      return "Unauthorized - Authentication required";
    case 404:
      console.log("Not Found - Resource doesn't exist");
      return "Not Found - Resource doesn't exist";
    case 500:
      console.log("Server Error - Internal server error");
      return "Server Error - Internal server error";
    default:
      console.log("Unexpected status code: " + statusCode);
      return "Unexpected status code: " + statusCode;
  }
}

function selectTestDataSet(testType) {
  switch (testType) {
    case "login": {
      const loginData = [
        { username: "testUser1", password: "pass123" },
        { username: "testUser2", password: "pass456" },
        { username: "testUser3", password: "pass789" },
        { username: "testUser4", password: "pass123" },
        { username: "testUser5", password: "pass456" },
      ];
      console.log(`Selected login data set with ${loginData.length} items`);
      return loginData;
    }
    case "registration": {
      const registrationData = [
        { email: "user1@example.com", password: "regpass1" },
        { email: "user2@example.com", password: "regpass2" },
      ];
      console.log(
        `Selected registration data set with ${registrationData.length} items`
      );
      return registrationData;
    }
    case "api": {
      const apiData = [
        { endpoint: "/users", method: "GET" },
        { endpoint: "/orders", method: "POST" },
      ];
      console.log(`Selected API data set with ${apiData.length} items`);
      return apiData;
    }
    case "performance": {
      const performanceData = [
        { testName: "loadTest", maxResponseTime: 500 },
        { testName: "stressTest", maxResponseTime: 1000 },
        { testName: "performanceTest", maxResponseTime: 1500 },
      ];
      console.log(
        `Selected performance data set with ${performanceData.length} items`
      );
      return performanceData;
    }
    default: {
      console.log("Unknown testType, returning empty data set");
      return [];
    }
  }
}

function complexTestDecision(userRole, environment, testType, hasPermission) {
  console.log(
    `Starting decision process for userRole=${userRole}, environment=${environment}, testType=${testType}, hasPermission=${hasPermission}`
  );

  let allowed = false;
  let reason = "";
  let logLevel = "info";
  if (userRole === "admin") {
    console.log("User is admin.");
    if (environment === "production") {
      console.log("Environment is production.");
      if (testType === "critical") {
        allowed = true;
        reason = "Admin allowed critical tests in production.";
        logLevel = "extra";
        console.log("Allowing with extra verbose logging.");
      } else {
        allowed = true;
        reason = "Admin allowed test in production.";
        logLevel = "standard";
        console.log("Allowing with standard logging.");
      }
    } else {
      allowed = true;
      reason = "Admin allowed all tests in non-production.";
      logLevel = "standard";
      console.log("Non-production environment, allowing all tests.");
    }
  } else if (userRole === "tester") {
    console.log("User is tester.");
    if (hasPermission === true) {
      console.log("Tester has permission.");
      if (environment !== "production") {
        allowed = true;
        reason = "Tester allowed in non-production env.";
        logLevel = "standard";
        console.log("Allowing tester in non-production.");
      } else {
        allowed = false;
        reason = "Tester denied access to production environment.";
        logLevel = "warning";
        console.log("Denying tester access in production.");
      }
    } else {
      allowed = false;
      reason = "Tester denied due to lack of permission.";
      logLevel = "warning";
      console.log("Denying tester with no permission.");
    }
  } else {
    allowed = false;
    reason = "Access denied - unknown user role.";
    logLevel = "error";
    console.log("Denying access for unknown user role.");
  }

  const result = {
    allowed: allowed,
    reason: reason,
    logLevel: logLevel,
  };
  return result;
}

export {
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
};
