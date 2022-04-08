// import { resolve } from "path";
// import { defineConfig } from "vite";

// import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     lib: {
//       name: "EssButton",
//       entry: resolve(__dirname, "src/index.ts"),
//       fileName: (format: string) => `button.${format}.js`,
//     },
//     rollupOptions: {
//       // make sure to externalize deps that shouldn't be bundled
//       // into your library
//       external: ["vue"],
//       output: {
//         // Provide global variables to use in the UMD build
//         // for externalized deps
//         globals: {
//           vue: "Vue",
//         },
//       },
//     },
//   },
//   plugins: [vue()],
// });

// This is a common (isomorphic) package which is intended to be used
// on both server and client packages and applications
// import { ViteConfig } from "@essencia-ui/configurations";

const { ViteConfig } = require("@essencia-ui/configurations");

module.exports = ViteConfig;
