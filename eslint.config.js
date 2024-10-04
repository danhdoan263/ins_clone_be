/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 * Sample Eslint config for NodeJS ExpressJS MongoDB project
 */
const babelParser = require("@babel/eslint-parser");
module.exports = {
  files: ["src/**/*.{js,jsx}"], // Đường dẫn đến các file bạn cần ESLint kiểm tra
  languageOptions: {
    ecmaVersion: "latest", // Tương đương với es2020
    sourceType: "module",
    globals: {
      // Định nghĩa các biến môi trường toàn cục
      node: true,
      es2020: true,
    },
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      allowImportExportEverywhere: true,
    },
  },

  plugins: {},
  rules: {
    // Common
    "no-console": 1,
    "no-extra-boolean-cast": 0,
    "no-lonely-if": 1,
    "no-unused-vars": 1,
    "no-trailing-spaces": 1,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": [1, "always"],
    // indent: ["warn", 2],
    semi: [1, "never"],
    quotes: ["error", "single"],
    "array-bracket-spacing": 1,
    "linebreak-style": 0,
    "no-unexpected-multiline": "warn",
    "keyword-spacing": 1,
    "comma-dangle": 1,
    "comma-spacing": 1,
    "arrow-spacing": 1,
  },
};
