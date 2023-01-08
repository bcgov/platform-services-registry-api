module.exports = {
  roots: ['<rootDir>/dist'],
  testEnvironment: "node",
  preset: "ts-jest",
  transform: { "^.+\\.(ts|js)x?$": "ts-jest" },
  testRegex: '.*\\.test\\.js$',

};
