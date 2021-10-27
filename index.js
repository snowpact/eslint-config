module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true
    },
    extends: "eslint:recommended",
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
        'brace-style': ['error', '1tbs'],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1
            }
        ],
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "block-like"
            },
            {
                "blankLine": "always",
                "prev": "block-like",
                "next": "*"
            }
        ],
        curly: ['error', 'all'],
        'no-plusplus': 0,
        quotes: ['error', 'single'],
        semi: 'error',
    }
};