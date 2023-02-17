/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  // ESLint doesn't yet support ESM configs, so we'll use CJS for now and then migrate when it's available.
  // Also, ESLint safely ignores comments in config files. yay!
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // recommended in TS-ESLint docs
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // should always go last, according to `eslint-config-prettier` docs
    "prettier",
    // additionally: plugin:"@typescript-eslint/strict" once I become much more proficient with TS or start writing library code
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "jsx-a11y",
  ],
  // don't think I need this - I'm using the latest version of React
  // settings: {
  //   react: {
  //     version: "17",
  //   },
  // },
  root: true,
  rules: {
    // allow inferred types for exported function parameters and return values
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // warn user if they have included unnecessary type annotations for things that are already inferrable
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-unused-vars": "off", // handled by noUnsuedLocals in tsconfig
    // Disallows unnecessary boolean casting when using logical operators. I want to start with this on and disable it later if it becomes annoying.
    // "no-extra-boolean-cast": "off",
    "no-global-assign": "error", // don’t reassign Window or other globals
    // Helps catch HTML typos in HTML children
    // If including a special symbol (">", "<", etc.) in a string, use the HTML entity instead, or wrap the string in curly braces to make it a JS string
    // Configurable to allow exceptions and preferred formats for various entities
    "react/no-unescaped-entities": "off",
  },
  // Can also specify overrides for specific files or file types.
};
