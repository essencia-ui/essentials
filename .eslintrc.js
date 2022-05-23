module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    "airbnb-base",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
  },
};
