const BASE_URL = "https://demo-qa-site.com";
const DEFAULT_TIMEOUT = 30000;
const API_ENDPOINTS = {
  login: BASE_URL + "/api/auth/login",
  users: BASE_URL + "/api/users",
  products: BASE_URL + "/api/products",
};

const testUserEmail = "test.user@testmail.com";
const testUserPassword = "SecureP@ssw0rd123!";
const adminUserEmail = "admin@testmail.com";
const expectedWelcomeMessage = "Welcome to your dashboard";

const debugMode = true;
const runSlowTests = false;
const useTestData = true;

function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    console.log("Email " + email + " is valid\n");
    return true;
  } else {
    console.log("Email " + email + " is invalid\n");
    return false;
  }
}

function validatePassword(password) {
  if (password.length >= 8) {
    console.log("Password " + password + " is valid\n");
    return true;
  } else {
    console.log("Password " + password + " is invalid\n");
    return false;
  }
}

function generateUniqueEmail(baseName) {
  const timestamp = Date.now();
  const uniqueEmail = baseName + timestamp + "@testmail.com";
  console.log(uniqueEmail + "\n");
  return uniqueEmail;
}

function logTestConfiguration() {
  // Get current timestamp
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);

  console.log("\n=========================================");
  console.log("       CURRENT TEST CONFIGURATION        ");
  console.log("=========================================");

  // Display timestamp
  console.log("\nConfiguration loaded at: " + currentDate);
  console.log("Timestamp: " + timestamp);

  // Display configuration constants
  console.log("\n--- Configuration Constants ---");
  console.log("BASE_URL: " + BASE_URL);
  console.log("DEFAULT_TIMEOUT: " + DEFAULT_TIMEOUT + " ms");

  // Display API endpoints
  console.log("\n--- API Endpoints ---");
  console.log("Login: " + API_ENDPOINTS.login);
  console.log("Users: " + API_ENDPOINTS.users);
  console.log("Products: " + API_ENDPOINTS.products);

  // Display test data
  console.log("\n--- Test Data ---");
  console.log("Test User Email: " + testUserEmail);
  console.log("Test User Password: " + testUserPassword);
  console.log("Admin User Email: " + adminUserEmail);
  console.log("Expected Welcome Message: " + expectedWelcomeMessage);

  // Display feature flags
  console.log("\n--- Feature Flags ---");
  console.log("Debug Mode: " + debugMode);
  console.log("Run Slow Tests: " + runSlowTests);
  console.log("Use Test Data: " + useTestData);

  console.log("\n=========================================\n");
}

export {
  BASE_URL,
  DEFAULT_TIMEOUT,
  API_ENDPOINTS,
  testUserEmail,
  adminUserEmail,
  debugMode,
  runSlowTests,
  useTestData,
  validateEmail,
  validatePassword,
  generateUniqueEmail,
  logTestConfiguration,
  expectedWelcomeMessage,
  testUserPassword,
};
