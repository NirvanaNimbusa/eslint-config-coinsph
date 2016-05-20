/* eslint no-magic-numbers: 0 */

module.exports = {
  rules: {
    // Disallow or enforce spaces inside of brackets
    'array-bracket-spacing': [2, 'never'],

    // Disallow or enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],

    // Require Brace Style
    'brace-style': [2, '1tbs', {
      allowSingleLine: false
    }],

    // Require Camelcase
    camelcase: [2, {
      properties: 'always'
    }],

    // Enforces spacing around commas
    'comma-spacing': [2, {
      before: false,
      after: true
    }],

    // Comma style
    'comma-style': [2, 'last'],

    // Disallow or enforce spaces inside of computed properties
    'computed-property-spacing': [2, 'never'],

    // Require Consistent This
    'consistent-this': [1, 'self'],

    // Require file to end with single newline
    'eol-last': [2, 'unix'],

    // Require Function Expressions to have a Name
    'func-names': 0,

    // Enforce Function Style
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true
    }],

    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,

    // Limit minimum and maximum length for identifiers
    'id-length': 0,

    // Require IDs to match a pattern
    'id-match': 0,

    // Validate Indentation
    indent: [2, 2, {
      SwitchCase: 1
    }],

    // Enforce JSX Quote Style
    'jsx-quotes': 0,

    // Enforce Property Spacing
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // Enforce spacing before and after keywords
    'keyword-spacing': [2, { before: true, after: true }],

    // Disallow mixing CRLF and LF linebreaks
    'linebreak-style': [2, 'unix'],

    // Enforce empty lines around comments
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowObjectStart: true
    }],

    // Limit Maximum Depth
    'max-depth': [2, 4],

    // Limit Maximum Length of Line
    'max-len': [2, 100, 2, {
      ignoreUrls: true
    }],

    // Set Maximum Depth of Nested Callbacks
    'max-nested-callbacks': [2, 3],

    // Limit Maximum Number of Parameters
    'max-params': [1, 4],

    // Limit Maximum Number of Statements
    'max-statements': 0,

    /*
     * Specify the Maximum Number of Statements Allowed per Line
     *
     * @since ESLint v2.5.0
     */
    'max-statements-per-line': 'error',

    // Require Constructors to Use Initial Caps
    'new-cap': 1,

    // Require Parens for Constructors
    'new-parens': 2,

    // Require or disallow an empty newline after variable declarations
    'newline-after-var': [2, 'always'],

    // Require newline before return statement
    'newline-before-return': 2,

    // Newline Per Chained Method Call
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }],

    // Disallow creation of dense arrays using the Array constructor
    'no-array-constructor': 2,

    // Disallow Bitwise Operators
    'no-bitwise': 2,

    // Disallow continue
    'no-continue': 2,

    // Disallows comments after code. Comments must come on their own lines
    'no-inline-comments': 2,

    // Disallow if as the Only Statement in an else Block
    'no-lonely-if': 2,

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    // Disallows multiple blank lines
    'no-multiple-empty-lines': [2, {
      max: 1
    }],

    // Disallow use of negated expressions in conditions
    'no-negated-condition': 2,

    // Disallow Nested Ternaries
    'no-nested-ternary': 2,

    // Disallow the use of the Object constructor
    'no-new-object': 2,

    // Disallow ++ and --
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],

    // Disallow certain syntax
    'no-restricted-syntax': 0,

    // Disallow Spaces in Function Calls
    'no-spaced-func': 2,

    // Disallow Ternary Operators
    'no-ternary': 0,

    // Disallow trailing spaces at the end of lines
    'no-trailing-spaces': 2,

    // Disallow Dangling Underscores in Identifiers
    'no-underscore-dangle': 0,

    // Disallow conditional expressions that can be expressed with simpler constructs
    'no-unneeded-ternary': [2, {
      defaultAssignment: true
    }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 2,

    // Disallow or enforce spaces inside of curly braces in objects
    'object-curly-spacing': [2, 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': 'warn',

    // Require or Disallow One Variable Declaration per Scope
    'one-var': [2, 'never'],

    // Require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [2, 'always'],

    // Operator Assignment Shorthand
    'operator-assignment': 0,

    // Operator Linebreak
    'operator-linebreak': [2, 'after'],

    // Enforce padding within blocks
    'padded-blocks': [2, 'never'],

    // Quoting Style for Property Names
    'quote-props': [2, 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],

    // Enforce Quote Style
    quotes: [2, 'single'],

    // Require JSDoc comment
    'require-jsdoc': 0,

    // Enforce or Disallow Semicolons
    semi: [2, 'always'],

    // Enforce spacing before and after semicolons
    'semi-spacing': [2, {
      before: false,
      after: true
    }],

    // Import Sorting
    'sort-imports': 0,

    // Variable Sorting
    'sort-vars': 0,

    // Require Or Disallow Space Before Blocks
    'space-before-blocks': [2, 'always'],

    // Require or disallow a space before function parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],

    // Disallow or enforce spaces inside of parentheses
    'space-in-parens': [2, 'never'],

    // Require Spaces Around Infix Operators
    'space-infix-ops': 2,

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],

    // Requires or disallows a whitespace (space or tab) beginning a comment
    'spaced-comment': [2, 'always'],

    // Require Regex Literals to be Wrapped
    'wrap-regex': 1
  }
};
