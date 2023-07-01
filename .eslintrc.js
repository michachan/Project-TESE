module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  root: true,
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
};
