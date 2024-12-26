import globals from "globals";
import pluginCypress from "eslint-plugin-cypress";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...pluginCypress.environments.globals.globals,
      },
    },
    plugins: {
      cypress: pluginCypress,
      "@typescript-eslint": pluginTypeScript,
    },
    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-pause": "error",
      "no-unused-vars": ["error", { "args": "none" }],
    },
  }
];
