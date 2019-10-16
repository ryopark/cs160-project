module.exports = {
  root: true,
  "env": {
      "es6": true,
      "node": true
  },
  "extends": [
    'plugin:vue/recommended', '@vue/prettier'
  ],
  "parserOptions": {
    parser: 'babel-eslint'
  },
  "plugins": [
      "vue"
  ],
  "rules": {
  }
};