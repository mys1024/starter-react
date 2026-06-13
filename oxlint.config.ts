import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "react"],
  categories: {
    correctness: "error",
    suspicious: "warn",
    pedantic: "warn",
  },
  env: {
    builtin: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
});
