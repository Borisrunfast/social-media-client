import globals from "globals";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier"; // Import Prettier config to disable conflicting rules
import prettierPlugin from "eslint-plugin-prettier"; // Import Prettier plugin

export default [
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended, // ESLint recommended rules
  prettierConfig, // Include Prettier config directly
  {
    plugins: {
      prettier: prettierPlugin, // Register the Prettier plugin
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules, // Use Prettier's recommended rules
      'prettier/prettier': 'error', // Make Prettier formatting an error
    }
  }
];