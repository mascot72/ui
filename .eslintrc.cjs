/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}


// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   extends: [
//     // 'airbnb-base',
//     'plugin:vue/vue3-essential',
//     '@vue/typescript/recommended',
//     'plugin:prettier/recommended', // Prettier 설정 추가
//     'prettier'
//   ],
//   parserOptions: {
//     ecmaVersion: 2020,
//     parser: '@typescript-eslint/parser',
//     sourceType: 'module'
//   },
//   plugins: ['vue', '@typescript-eslint', 'prettier'],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'prettier/prettier': 'error' // Prettier 오류를 ESLint 오류로 표시
//   },
//   overrides: [
//     {
//       files: ['**/*.ts', '**/*.tsx'],
//       rules: {
//         '@typescript-eslint/no-explicit-any': 'off'
//       }
//     }
//   ]
}
