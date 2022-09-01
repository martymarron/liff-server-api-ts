module.exports = {
    overrides: [
      {
        files: ['src/**/*.ts'],
        extends: ['.eslintrc.ts.js'],
      },
      {
        files: ['__tests__/**/*.ts'],
        extends: ['.eslintrc.jest'],
      },
    ],
};