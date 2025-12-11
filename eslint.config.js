// eslint.config.js
export default [
  {
    files: ['src/**/*.js'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      }
    },
    rules: {
      // Базовые правила
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    }
  }
];