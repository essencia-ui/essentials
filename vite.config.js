const vue = require("@vitejs/plugin-vue");

module.exports = {
  plugins: [vue()],
  build: {
    lib: {
      name: "bundle",
      entry: "src/index.ts",
    },
    minify: "eslint",
    // external: ["vue"],
  },
};
