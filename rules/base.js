/* eslint no-magic-numbers: 0 */

module.exports = {
  env: {
    browser: true,
    amd: false
  },

  rules: {
    // Disallow or Enforce Dangling Commas
    'comma-dangle': [2, 'never'],

    // Disallow Assignment in Conditional Statements
    'no-cond-assign': [2, 'always'],

    // Disallow Use of console
    'no-console': 1,

    // Disallow use of constant expressions in condition
    'no-constant-condition': 2,

    // Disallow Controls Characters in Regular Expressions
    'no-control-regex': 1,

    // Disallow debugger
    'no-debugger': 2,

    // No duplicate arguments
    'no-dupe-args': 2,

    // Disallow Duplicate Keys
    'no-dupe-keys': 2,

    // Disallow a duplicate case label
    'no-duplicate-case': 2,

    // Disallow Empty Block Statements
    'no-empty': 2,

    // Disallow Empty Character Classes
    'no-empty-character-class': 2,

    // Disallow Assignment of the Exception Parameter
    'no-ex-assign': 2,

    // Disallow Extra Boolean Casts
    'no-extra-boolean-cast': 2,

    // Disallow Extra Parens
    'no-extra-parens': ['warn', 'all', {
      nestedBinaryExpressions: true
    }],

    // Disallow Extra Semicolons
    'no-extra-semi': 2,

    // Disallow Function Assignment
    'no-func-assign': 2,

    // Declarations in Program or Function Body
    'no-inner-declarations': [2, 'both'],

    // Disallow Invalid Regular Expressions
    'no-invalid-regexp': 2,

    // No irregular whitespace
    'no-irregular-whitespace': 2,

    // Disallow negated left operand of in operator
    'no-negated-in-lhs': 2,

    // Disallow Global Object Function Calls
    'no-obj-calls': 2,

    // Disallow Spaces in Regular Expressions
    'no-regex-spaces': 2,

    // Disallow Sparse Arrays
    'no-sparse-arrays': 2,

    // Avoid unexpected multiline expressions
    'no-unexpected-multiline': 2,

    // Disallow Unreachable Code
    'no-unreachable': 2,

    // Require isNaN()
    'use-isnan': 2,

    // Validates JSDoc comments are syntactically correct
    'valid-jsdoc': 0,

    // Ensures that the results of typeof are compared against a valid string
    'valid-typeof': 2
  }
};
