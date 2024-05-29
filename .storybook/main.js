// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: [
//     "../src/**/*.mdx", 
//     "../src/**/*.stories.@(js|jsx|ts|tsx)",
//     "../src/components/**/*.stories.js"
//   ],
//   staticDirs: ["../public"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],
//   babel: async (options) => ({
//     ...options,
//     presets: [...options.presets, '@babel/preset-react'],
//   }),
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;

module.exports = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.js"
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-react'],
  }),
};
