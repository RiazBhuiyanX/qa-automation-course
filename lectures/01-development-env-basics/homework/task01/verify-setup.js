function checkNodeVersion() {
  const version = process.version;
  console.log("Node.js version:", version);
  return version;
}

function checkNpmVersion() {
  const npmVersion = process.env.npm_config_user_agent || 'Not available';
  console.log("NPM version:", npmVersion);
  return npmVersion;
}

function displayEnvironmentInfo() {
  checkNodeVersion();
  checkNpmVersion();
  
  const platform = process.platform;
  console.log("Operating System:", platform);
  
  const currentDirectory = process.cwd();
  console.log("Current Working Directory:", currentDirectory);
}

displayEnvironmentInfo();