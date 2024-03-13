module.exports = {
    // Other Jest configuration...
    reporters: [
      "default",
      ["jest-junit", { outputDirectory: "test-results", outputName: "test-results.xml" }]
    ]
  };
  