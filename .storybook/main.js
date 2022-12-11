const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.mdx",
    "../(components|pages)/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },
  docs: {
    docsPage: true,
  },
};
