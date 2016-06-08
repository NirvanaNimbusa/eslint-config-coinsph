/* eslint no-magic-numbers: 0 */

module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // Require braces in arrow function body
    'arrow-body-style': [2, 'as-needed'],

    // Require parens in arrow function arguments
    'arrow-parens': 0,

    // Require space before/after arrow function's arrow
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],

    // Verify calls of super() in constructors
    'constructor-super': 2,

    // Enforce spacing around the * in generator functions
    'generator-star-spacing': [2, 'after'],

    // Disallow modifying variables of class declarations
    'no-class-assign': 2,

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [2, {
      allowParens: true
    }],

    // Disallow modifying variables that are declared using const
    'no-const-assign': 0,

    // Disallow duplicate name in class members
    'no-dupe-class-members': 0,

    /**
     * Disallow duplicate imports
     *
     * @since ESLint v2.5.0
     */
    'no-duplicate-imports': ['error', {
      includeExports: true
    }],

    // Disallow Symbol Constructor
    'no-new-symbol': 2,

    // Disallow use of this/super before calling super() in constructors
    'no-this-before-super': 2,

    // Disallow unnecessary computed property keys on objects
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 2,

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     *
     * @since ESLint v2.11.0
     * {@link http://eslint.org/docs/rules/no-useless-rename}
     */
    'no-useless-rename': 'error',

    // Require let or const instead of var
    'no-var': 2,

    // Require Object Literal Shorthand Syntax
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],

    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,

    // Suggest using const
    'prefer-const': 2,

    // Suggest using Reflect methods where applicable
    'prefer-reflect': 0,

    // Suggest using the rest parameters instead of arguments
    'prefer-rest-params': 1,

    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 2,

    // Suggest using template literals instead of string concatenation
    'prefer-template': 2,

    // Disallow generator functions that do not have yield
    'require-yield': 2,

    // Enforce Usage of Spacing in Template Strings
    'template-curly-spacing': [2, 'never'],

    // Enforce spacing around the * in yield* expressions
    'yield-star-spacing': [2, 'after']
  }
};
