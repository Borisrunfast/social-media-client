import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  pluginJs.configs.recommended,
  prettier,
];