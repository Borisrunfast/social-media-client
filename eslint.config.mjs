import cypressPlugin from 'eslint-plugin-cypress';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...js.configs.recommended.globals,
      },
    },
    plugins: {
      cypress: cypressPlugin, // This is the new plugin object format
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off', // Turn off 'undef' for Cypress
    },
    ignores: [
      'cypress/**/*.cy.js', // Ignore Cypress files
      'src/js/test/**/*.test.js', // Ignore Jest test files
    ],
  },
  js.configs.recommended,
  cypressPlugin.configs.recommended,  // Use the Cypress recommended config
  prettier,
];

