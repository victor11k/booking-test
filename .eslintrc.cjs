module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
  },
};
