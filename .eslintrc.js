const prettierOptions = require('./.prettierrc');

module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  plugins: ['prettier'],

  env: {
    browser: true,
    node: true,
    es2020: true,
  },

  rules: {
    'prettier/prettier': [2, prettierOptions],

    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],

    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['./config/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'no-param-reassign': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
      },
    },
  ],
};
