module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-contexts/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-jsx/register',
    '@storybook/addon-viewport/register',
    '@whitespace/storybook-addon-html/register',
  ],
}
