/* eslint no-magic-numbers: 0 */

module.exports = {
  rules: {
    // Enforce/Disallow Variable Initializations
    'init-declarations': 0,

    // Disallow Shadowing of Variables Inside of catch
    'no-catch-shadow': 0,

    // Disallow Variables Deletion
    'no-delete-var': 2,

    // Disallow Labels That Are Variables Names
    'no-label-var': 0,

    // Disallow specific global variables
    'no-restricted-globals': 0,

    // Disallow Shadowing
    'no-shadow': 2,

    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 2,

    // Disallow Undeclared Variables
    'no-undef': [2, { typeof: true }],

    // Disallow Initializing to undefined
    'no-undef-init': 0,

    // Disallow Use of undefined Variable
    'no-undefined': 2,

    // Disallow Unused Variables
    'no-unused-vars': 2,

    // Disallow Early Use
    'no-use-before-define': 2
  }
};
