module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      }],
    'no-underscore-dangle': ['error',
      { enforceInMethodNames: false }],
    // 'import/extensions': ['never', {
    //   ts: 'never',
    // }],
  },
};
