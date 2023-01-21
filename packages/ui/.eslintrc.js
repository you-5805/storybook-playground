/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  plugins: ['import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    /**
     * custom
     */
    'import/order': [
      'error',
      {
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // ignore var start with _
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
