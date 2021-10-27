module.exports = {
    root: true,
    env: {
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
        '@typescript-eslint/require-await': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        'import/order': 1,
        'import/imports-first': 1,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
