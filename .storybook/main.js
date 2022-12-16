const path = require("path");

module.exports = {
  // NOTE: Storybook이 story 파일들을 읽어오기 위해, story가 위치하는 폴더 경로를 glob 패턴으로 명시해주었어요.
  // components, pages 등의 폴더 하위가 아닌 다른 폴더 아래에도 story 파일을 만들고 싶으면, 여기에 추가해주면 돼요.
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../(components|pages)/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  // NOTE: next/link, next/router등 nextjs와 호환되는 공식 integration framework를 설치해주었어요.
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    docsPage: true,
  },
  // NOTE: Storybook은 UI를 테스트할 수 있는 독립적인 app이에요. webpackFinal 이라는 속성으로
  // story들의 webpack 설정을 변경/추가할 수 있어요. 여기선 import 부분을 alias로 처리하기 위한 설정을 해주었어요.
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname),
    };

    return config;
  },
};
