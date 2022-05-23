module.exports = {
  framework: "@storybook/vue3",
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  features: {
    postcss: false,
  },
  core: {
    builder: "@storybook/builder-vite"
  }
}