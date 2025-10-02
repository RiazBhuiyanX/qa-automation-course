# QA Automation Environment Setup Guide

## Preparation

Before starting with this QA automation course project, ensure you have the following software installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes bundled with Node.js)
- **Visual Studio Code** (VS Code) - recommended code editor
- **Git** (optional, but recommended for version control)

## Installation Steps

### 1. Verify Node.js Installation

Open your terminal or command prompt and run:

```bash
node --version
```

You should see output like `v22.14.0` or higher.

### 2. Verify npm Installation

In the same terminal, run:

```bash
npm --version
```

You should see output like `10.9.2` or similar.

### 3. Clone or Download Project

#### Option A: Clone from GitHub (Recommended)

Open your terminal or command prompt and navigate to the directory where you want to create the project:

```bash
cd Desktop
```

Clone the repository from GitHub:

```bash
https://github.com/RiazBhuiyanX/qa-automation-course.git
```

Navigate into the cloned project:

```
bash cd qa-automation-course
```

#### Option B: Manual Setup

If you don't have Git installed or prefer manual setup:

1. Download the project as a ZIP file from GitHub
2. Extract it to your desired location
3. Rename the folder to `qa-automation-course`
4. Navigate to the folder in your terminal

### 4. Install Project Dependencies

Install dependencies (if any are listed in `package.json`):

```bash
npm install
```

## Running the Verification Script

To verify your environment setup is correct, run the verification script:

```bash
node lectures/01-development-env-basics/homework/task01/verify-setup.js
```

Expected output should display:

- Node.js version (`v22.14.0`)
- npm version (`10.9.2`)
- Operating system platform (`win32`)
- Current working directory (`D:\Cleverpine\qa-automation-course`)

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
├── package.json # Project metadata and dependencies
└── node_modules/ # Installed npm packages (generated)
```

### Folder Descriptions

- **resources/**: Contains reference materials, documentation, and additional learning resources
- **lectures/**: Organized by lecture number, contains all code and exercises for each lecture
- **examples/**: Demonstration code shown during lectures
- **practice/**: Hands-on practice exercises
- **homework/**: Assigned homework tasks with solutions

## Troubleshooting

### Issue 1: "node is not recognized" or "npm is not recognized"

**Cause:** Node.js is not installed or not added to system PATH.

**Solution:**

- Reinstall Node.js from the official website (https://nodejs.org)
- During installation, ensure "Add to PATH" option is checked
- Restart your terminal after installation

### Issue 2: Permission errors when running npm commands

**Cause:** Insufficient permissions or npm global directory ownership issues.

**Solution:**

- On Windows: Run terminal as Administrator
- On macOS/Linux: Use `sudo` prefix for global installations only
- Consider using a Node version manager (nvm) to avoid permission issues

### Issue 3: Module not found or Cannot find module errors

**Cause:** Missing dependencies in `node_modules` or incorrect import paths in the code.

**Solution:**

- Run `npm install` to install all dependencies listed in `package.json`
- Check if the module path in your import statement is correct
- Verify that the package is listed in `package.json` dependencies
- Clear npm cache with `npm cache clean --force` and reinstall if needed
