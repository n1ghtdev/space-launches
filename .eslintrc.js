module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
  },
};
