module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/ban-types': 0,
    'arrow-parens': 'off',
    'no-shadow': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 140, tabWidth: 2 }],
    'no-duplicate-imports': 'error',
    'no-return-await': 'error',
    'prefer-object-spread': 'error',
    'default-case': 'error',
    'no-extra-bind': 'error',
    'no-bitwise': 'error',
    'no-console': 'error',
    quotes: ['error', 'single'],
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'prefer-template': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    'consistent-return': 'off',
    // eslint-disable-next-line no-dupe-keys
    'prefer-template': 'off',
    'no-else-return': 'off',
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'import/prefer-default-export': 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'warn',
    'prefer-destructuring': 'warn',
    'arrow-body-style': 'off',
    'func-names': ['error', 'never'],
    'operator-linebreak': 'off',
    'no-prototype-builtins': 'warn',
    camelcase: 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'quote-props': 'warn',
    'lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'no-constant-condition': 'warn',
    'no-mixed-operators': 'off',
    'newline-per-chained-call': 'off',
    'object-property-newline': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    'no-unneeded-ternary': 'off',
    'import/extensions': 'off',
    'no-extra-boolean-cast': 'off',
    'import/newline-after-import': 'off',
    'no-lonely-if': 'off',
    'no-case-declarations': 'off',
    'no-async-promise-executor': 'warn',
    'no-useless-escape': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
};