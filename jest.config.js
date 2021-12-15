module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/examples/'
  ],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
  ],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
  ],
  testTimeout: 10000,
};