import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, process: true } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: {
      react: {
        version: "18.3.1",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-undef": "error",
      "no-var": "error",
      "no-const-assign": "error",
      "no-cond-assign": "error",
    },
  },
  ...compat.extends("plugin:react/jsx-runtime"),
];
