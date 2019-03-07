import { create } from '@storybook/theming'

export default create({
  base: 'light', // Is this a 'light' or 'dark' theme?

  brandTitle: 'ALPS-React',
  brandUrl: 'https://adventistchurch.github.io/alps-react/',
  brandImage: '/alps-react-logo.svg',

  // Simulates ALPS radius-less styles.
  appBorderRadius: 0,
  inputBorderRadius: 0,
})
