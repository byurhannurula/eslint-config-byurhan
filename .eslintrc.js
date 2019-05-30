module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    "no-alert": 0,
    "no-console": 0,
    "comma-dangle": 0,
    "react/no-danger": 0,
    "no-use-before-define": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],
    "react/prop-types": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        jsxBracketSameLine: false,
        trailingComma: "all",
        singleQuote: true,
        printWidth: 80,
        semi: false
      }
    ]
  }
};
