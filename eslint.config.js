// ESLint flat config：只做「能自动发现的问题」，格式交给 Prettier。
// 覆盖 src/ 与 scripts/：host 半端是纯 ESM Node 代码，client 半端是 TSX。
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['dist/**', 'harness/dist/**', 'node_modules/**', 'src/client/lib/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/host/**/*.js', 'scripts/**/*.mjs', 'build.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },
  {
    files: ['src/client/**/*.ts', 'src/client/**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      // 画布节点组件把 data 当半结构化的画布数据用，宽泛访问是有意为之
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  prettier,
)
