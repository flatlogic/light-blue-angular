import parser from '@typescript-eslint/parser';

export default [{
  files: ['src/**/*.ts'],
  languageOptions: { parser },
  rules: {
    'no-debugger': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-duplicate-case': 'error',
    'no-unsafe-finally': 'error'
  }
}];
