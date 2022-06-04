const path = require('path');
const ROOT = process.cwd();

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop');
    return options;
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      '@/': path.resolve(ROOT, './'),
      '@/utils': path.resolve(ROOT, './utils/'),
      '@/styles': path.resolve(ROOT, './styles/'),
      '@/components': path.resolve(ROOT, './components/'),
    };
    return config;
  },
  previewMainTemplate: (templatePath) => {
    return path.resolve(ROOT, './.storybook/template.ejs');
  },
};
