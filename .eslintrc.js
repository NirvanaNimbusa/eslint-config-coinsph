module.exports = {
  extends: [
    './rules/es6',
    './rules/node',
    './rules/base',
    './rules/variables',
    './rules/best-practices',
    './rules/style'
  ].map(require.resolve)
};
