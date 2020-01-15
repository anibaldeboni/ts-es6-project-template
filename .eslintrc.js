module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 0,
    'no-else-return': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jest/expect-expect': 'error',
  },
  plugins: ['graphql', 'prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['./src/data-sources/**/__tests__/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['./src/**/__tests__/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
};
