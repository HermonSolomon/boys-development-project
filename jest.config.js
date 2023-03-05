module.exports = {
  displayName: "boys-development-project",
  clearMocks: true,
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",

    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/pages/**/*.{js,jsx,ts,tsx}",
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
    "!<rootDir>/sanity-bdp/**",
    "!<rootDir>/sanity.tsx/**",
    "!<rootDir>/components/Wrapper/**",
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     function: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};
