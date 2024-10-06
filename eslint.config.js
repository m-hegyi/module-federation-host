import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  ...pluginAstro.configs.recommended,
  pluginPrettier,
  {
    rules: {
      "prettier/prettier": ["warn"],
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
