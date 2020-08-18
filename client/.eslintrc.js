module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 0,
    'implicit-arrow-linebreak': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'no-undef': 0,
    'import/extensions': 0,
    'react/require-default-props': 0,
    'linebreak-style': ['error', 'windows'], // when working on windows machine
  },
};
