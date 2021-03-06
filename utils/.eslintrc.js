'use strict';

module.exports = {
    'parser': 'babel-eslint',
    'extends': ['devextreme/spell-check', 'eslint:recommended', 'plugin:node/recommended'],
    'rules': {
        'block-spacing': 'error',
        'comma-spacing': 'error',
        'computed-property-spacing': 'error',
        'comma-style': ['error', 'last'],
        'eqeqeq': ['error', 'allow-null'],
        'strict': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                'overrides': {
                    'catch': { 'after': false },
                    'for': { 'after': false },
                    'if': { 'after': false },
                    'switch': { 'after': false },
                    'while': { 'after': false }
                }
            }
        ],
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'no-new-func': 'error',
        'no-eval': 'error',
        'no-undef-init': 'error',
        'no-unused-vars': ['error', { 'args': 'none', 'ignoreRestSiblings': true }],
        'no-extend-native': 'error',
        'no-alert': 'error',
        'no-console': 0,
        'no-restricted-syntax': ['error', 'ForOfStatement'],
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        'one-var': ['error', 'never'],
        'prefer-const': 'error',
        'semi-spacing': 'error',
        'semi': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always', {
            'exceptions': ['#DEBUG', '#ENDDEBUG'],
            'markers': ['/']
        }],

        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'curly': ['error', 'multi-line', 'consistent'],

        'unicode-bom': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'MemberExpression': 1,
                'CallExpression': {
                    'arguments': 1
                }
            }
        ],
        'quotes': ['error', 'single'],
        'node/no-unpublished-require': 0,
        'node/no-unsupported-features/node-builtins': ['error', {
            'version': '>=10.0.0',
            'ignores': []
        }]
    }
};
