module.exports = {
  extends: [
    'eslint-config-coinsph/rules/es6',
    'eslint-config-coinsph/rules/node',
    'eslint-config-coinsph/rules/base',
    'eslint-config-coinsph/rules/variables',
    'eslint-config-coinsph/rules/best-practices',
    'eslint-config-coinsph/rules/style'
  ].map(require.resolve)
};
