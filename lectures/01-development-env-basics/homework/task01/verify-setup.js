import { execSync } from "child_process";

function checkNodeVersion() {
  const version = process.version;
  console.log("Node.js version:", version);
  return version;
}

function checkNpmVersion() {
  const npmVersion =
    execSync("npm --version").toString().trim() || "Not available";
  console.log("NPM version:", npmVersion);
  return npmVersion;
}

function displayEnvironmentInfo() {
  console.log("\n===========================================");
  console.log("  QA AUTOMATION ENVIRONMENT VERIFICATION   ");
  console.log("===========================================\n");

  checkNodeVersion();
  checkNpmVersion();

  const platform = process.platform;
  console.log("Operating System:", platform);

  const currentDirectory = process.cwd();
  console.log("Current Working Directory:", currentDirectory);
  console.log("\n");
}

displayEnvironmentInfo();

export { displayEnvironmentInfo };
