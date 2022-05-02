/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: { ignoreParameters: true, ignoreProperties: true },
};
