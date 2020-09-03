module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
      },
    },
    '@storybook/addon-a11y',
    'storybook-addon-jsx',
    '@whitespace/storybook-addon-html',
  ],
}
