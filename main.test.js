// main.test.js

// Mock the console.log function to capture its output
const originalConsoleLog = console.log;
let consoleOutput = [];
console.log = (...args) => {
  consoleOutput.push(args.join(' '));
};

// Import the module to test (main.js)
require('./main');

// Restore the original console.log function
console.log = originalConsoleLog;

// Define tests for main.js behavior
test('main.js logs the correct message', () => {
  // Check if the console.log statement outputs the expected message
  expect(consoleOutput).toContain("Hello, Udacity Learner. Welcome to the world of CI/CD!");
});
