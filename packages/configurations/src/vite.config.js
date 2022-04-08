const vue = require("@vitejs/plugin-vue");

/**
 * Build configuration for client code, executed in the browser
 */
module.exports = {
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.ts",
    },
    minify: "eslint",
    external: ["vue"],
  },
};
