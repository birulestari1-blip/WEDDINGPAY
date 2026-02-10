export default [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "warn",
    },
  },
];
