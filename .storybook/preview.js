import { addDecorator, addParameters, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import JSXAddon from 'storybook-addon-jsx'

import theme from './theme'
import withAlpsWrapper from './withAlpsWrapper'

// IMPORTANT: this must be added BEFORE alps wrapper decorator
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      jsxBracketSameLine: true,
      htmlWhitespaceSensitivity: 'ignore',
    },
  })
)

// Decorates story with current theme and grid wrapper
addDecorator(withAlpsWrapper())

// IMPORTANT: this must be added AFTER alps wrapper decorator
addDecorator(
  withKnobs({
    escapeHTML: false,
  })
)

setAddon(JSXAddon)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },

  options: {
    theme,
  },

  jsx: {
    filterProps: val => val !== undefined,
  },
})
