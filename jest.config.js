module.exports = {
  displayName: "boys-development-project",
  clearMocks: true,
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleFileExtensions: ["ts, tsx", "js", "jsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/pages/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
