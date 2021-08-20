module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components', 'stylelint-config-prettier'],
  rules: {
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
  },
};
