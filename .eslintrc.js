module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [ "plugin:vue/essential", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier': [
      'error'
    ],  
  },
  plugins: ["prettier", "vue"],
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
