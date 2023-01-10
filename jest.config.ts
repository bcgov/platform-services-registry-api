module.exports = {
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "node",
  preset: "ts-jest",
  transform: { "^.+\\.(ts|js)x?$": "ts-jest" },
  moduleNameMapper: {
    "(.+)\\.js": "$1"
  },
  extensionsToTreatAsEsm: [".ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.cache/",
    "/build/",
    "/dist/",
  ]
};
