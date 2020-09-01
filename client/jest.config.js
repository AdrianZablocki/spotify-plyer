module.exports = {
  clearMocks: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'JUnit jest report',
        outputDirectory: './reports',
        outputName: './unit-test-report.xml',
      },
    ],
  ],
  coverageDirectory: './reports',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['text', 'text-summary', 'cobertura', 'lcov'],
  moduleNameMapper: {
    '\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp[34]|webm|wav|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|s[ac]ss|styl)$': 'identity-obj-proxy',
  },
  testEnvironment: 'node',
};
