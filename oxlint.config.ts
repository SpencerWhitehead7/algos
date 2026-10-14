import { defineConfig } from "oxlint"

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: false,
    denyWarnings: true,
    respectEslintDisableDirectives: false,
    reportUnusedDisableDirectives: "error",
  },
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "jsdoc",
    "node",
    "promise",
  ],
  env: {
    builtin: true,
    node: true,
  },
  globals: {
    ListNode: "readonly",
    TreeNode: "readonly",
    UndirectedGraphNode: "readonly",
  },
})
