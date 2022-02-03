module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    'no-undef': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'class-methods-use-this': 'off',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
