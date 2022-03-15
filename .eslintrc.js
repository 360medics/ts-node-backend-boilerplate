module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest", // Allows the use of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "360medics-base"
    ], // Uses the linting rules from @typescript-eslint/eslint-plugin
    env: {
      node: true, // Enable Node.js global variables
    },
    settings: {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
      "no-use-before-define": "off",
      "no-return-assign": "off",
      "no-underscore-dangle": "off"
    }
};