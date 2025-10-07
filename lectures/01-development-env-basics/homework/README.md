# QA Automation Course Workspace

A comprehensive workspace demonstrating fundamental QA automation concepts, including environment verification, test data management, and test execution utilities. This project serves as the foundation for advanced automation topics in the Cleverpine QA Automation Academy.

## Description

This project demonstrates core QA automation principles by implementing:

- **Environment Setup Verification**: Tools to verify Node.js, npm, and development environment configuration
- **Test Data Management**: Reusable configuration constants, validation functions, and unique test data generation
- **Test Execution Utilities**: Helper functions for test suites, test steps, and automated reporting
- **Complete Workflow Integration**: A master demo script showcasing end-to-end test execution

Built using vanilla JavaScript (ES6+) with ES modules, this workspace provides a solid foundation for understanding automation frameworks like Playwright.

## Prerequisites

Before setting up this project, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm**: Version 9.0.0 or higher (comes with Node.js)
  - Verify installation: `npm --version`

- **VS Code**: Latest version (recommended)
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Recommended extensions: ESLint, Prettier

- **Git**: Version 2.30.0 or higher
  - Verify installation: `git --version`

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

Clone the repository from GitHub:

```bash
https://github.com/RiazBhuiyanX/qa-automation-course.git
```

Navigate into the cloned project:

```
bash cd qa-automation-course
```

### 2. Install Project Dependencies

Install dependencies (if any are listed in `package.json`):

```bash
npm install
```

### 3. Run the Verification Script

To verify your environment setup is correct, run the verification script:

```bash
node lectures/01-development-env-basics/homework/task01/verify-setup.js
```

Expected output should display:

- Node.js version (`v22.14.0`)
- npm version (`10.9.2`)
- Operating system platform (`win32`)
- Current working directory (`D:\Cleverpine\qa-automation-course`)

### 4. Run the Foundation Demo

```bash
node lectures\01-development-env-basics\homework\foundation-demo.js
```

This will execute the complete workflow integration, demonstrating all components working together.

## Project Structure

```bash
qa-automation-course/
├── resources/ # Course resources and materials
├── lectures/ # All lecture-related content
│ └── 01-development-env-basics/
│ ├── examples/ # Example code from lectures
│ ├── practice/ # Practice exercises
│ └── homework/ # Homework assignments
│   └── task01/ # Task 1 files
│     ├── verify-setup.js
│     └── environment-setup-guide.md
│   └── task02/ # Task 2 files
│     ├── environment-config.js
│     └── test-data-config.js
│   └── task03/ # Task 3 files
│     ├── test-execution-helpers.js
│     └── devtools-practice-log.md
│   └── foundation-demo.js #
│   └── README.md # This file
├── package.json # Project metadata and dependencies
└── node_modules/ # Installed npm packages (generated)
```

### File Descriptions

#### `task01/verify-setup.js`

- `checkNodeVersion()`: Displays current Node.js version
- `checkNpmVersion()`: Displays npm version information
- `displayEnvironmentInfo()`: Shows OS, Node.js, npm, and current directory

#### `task02/test-data-config.js`

- Configuration constants (BASE_URL, API_ENDPOINTS, timeouts)
- Test data variables (emails, passwords, messages)
- Feature flags (debugMode, runSlowTests, useTestData)
- `validateEmail()`: Email format validation
- `validatePassword()`: Password strength validation
- `generateUniqueEmail()`: Unique email generation using timestamps
- `logTestConfiguration()`: Formatted configuration display

#### `task03/test-utils.js`

- `startTestSuite()`: Initializes test suite with timestamp
- `endTestSuite()`: Completes suite and calculates duration
- `logTestStep()`: Logs individual test steps
- `generateTestReport()`: Creates formatted test summary
- `debugVariable()`: Debug utility for variable inspection
- `compareExpectedActual()`: Assertion helper for value comparison
- `logSystemInfo()`: System information display for debugging

#### `foundation-demo.js`

Master integration script that:

1. Verifies environment setup
2. Loads test configuration
3. Validates test data
4. Executes simulated login test
5. Generates comprehensive test report

## Key Features

### ✅ Reusable Components

- **Modular design**: Each task is self-contained and independently testable
- **ES6 modules**: Modern import/export syntax for clean dependencies

### ✅ Test Data Management

- Centralized configuration constants
- Dynamic unique email generation
- Validation functions for common data types
- Feature flags for test behavior control

### ✅ Test Execution Framework

- Suite-level timing and reporting
- Step-by-step test logging with color coding
- Pass/Fail/Skip status tracking
- Automatic test summary generation

### ✅ Developer Experience

- ISO timestamp format for precise timing
- Detailed debug information
- Clear console formatting

## Next Steps

This foundation prepares us for advanced automation topics:

### Upcoming Topics

1. **Page Object Model (POM)**: Learn to structure browser automation code
2. **Playwright Framework**: Implement real browser automation
3. **API Testing**: Use these utilities with REST API testing
4. **CI/CD Integration**: Run tests in GitHub

### How This Foundation Helps

- **Environment Verification**: Ensures consistent dev environments across teams
- **Test Data Patterns**: Scales to complex data-driven testing
- **Utility Functions**: Core patterns used in all automation frameworks
- **Reporting Structure**: Foundation for advanced test reporting tools
