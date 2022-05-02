module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: ["@typescript-eslint/parser"],
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
};
