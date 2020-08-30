import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import { withAlpsTheme, alpsGlobals } from './withAlps'

export const globalTypes = { ...alpsGlobals }

export const decorators = [jsxDecorator, withHTML, withAlpsTheme]

export const parameters = {
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      jsxBracketSameLine: true,
      htmlWhitespaceSensitivity: 'ignore',
    },
  },

  controls: {
    // expanded: true
  },

  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },

  jsx: {
    // filterProps: val => val !== undefined && val !== null, // Remove props with undefined and null values
    skip: 0,
  },
}
