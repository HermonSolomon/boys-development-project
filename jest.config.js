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
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// // Add any custom config to be passed to Jest
// const customJestConfig = {
//   displayName: "boys-development-project",
//   clearMocks: true,
//   transform: {
//     // Use babel-jest to transpile tests with the next/babel preset
//     // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
//     "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
//   },
//   // moduleFileExtensions: ["ts, tsx", "js", "jsx"],
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "<rootDir>/pages/**/*.{js,jsx,ts,tsx}",
//     "**/*.{js,jsx,ts,tsx}",
//     "!**/*.d.ts",
//     "!**/node_modules/**",
//     "!<rootDir>/out/**",
//     "!<rootDir>/.next/**",
//     "!<rootDir>/*.config.js",
//     "!<rootDir>/coverage/**",
//   ],
//   coverageDirectory: "./coverage",
//   coverageReporters: ["html", "text"],
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   moduleNameMapper: {
//     // Handle module aliases (this will be automatically configured for you soon)
//     "^@/components/(.*)$": "<rootDir>/components/$1",

//     "^@/pages/(.*)$": "<rootDir>/pages/$1",
//   },
//   testEnvironment: "jest-environment-jsdom",
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// module.exports = createJestConfig(customJestConfig);
