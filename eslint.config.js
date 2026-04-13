const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactNativePlugin = require('eslint-plugin-react-native');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.expo/**', '**/*.d.ts'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __DEV__: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        URLSearchParams: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-native': reactNativePlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactNativePlugin.configs.all.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-inline-styles': 2,
      'react-native/no-color-literals': 2,
      'react-native/no-raw-text': 2,
      'react-native/no-single-element-style-arrays': 2,
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'all',
          bracketSpacing: true,
          printWidth: 80,
          endOfLine: 'auto',
          tabWidth: 2,
          singleQuote: true,
          jsxSingleQuote: true,
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: [
      'eslint.config.*',
      '**/*.config.{js,cjs,mjs}',
      'metro.config.js',
      'babel.config.js',
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
