module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    version: 'detect'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'standard-react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'react',
    'react-hooks'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
    createDefaultProgram: true
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'default-param-last': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        groups: [
          ['builtin'],
          ['external', 'internal'],
          ['parent'],
          ['sibling', 'index']
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
          },
        ],
      }
    ],
    indent: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'array-callback-return': ['error', { allowImplicit: true }],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'off',
    'dot-notation': ['error', { allowKeywords: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-plusplus': 0,
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    'no-return-await': 'error',
    'max-classes-per-file': ['error', 1],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-deprecated': ['error'],
    'react/no-string-refs': 'error',
    'react/self-closing-comp': 'error',
    'node/handle-callback-err': 'warn',
    semi: ["error", "always"],
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-vars': ['error', { 'ignoreCase': true }]
  }
}
