import React from 'react'

import {
  configure,
  addDecorator,
  addParameters,
  setAddon,
} from '@storybook/react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import JSXAddon from 'storybook-addon-jsx'

import Wrapper from '../src/Wrapper'
import { primaryColors, secondaryColors } from '../src/atoms/global/colors'

import theme from './theme'

addDecorator(story => {
  const content = story()
  const tab = 'Theme' // Tab Name
  const wrapperProps = {
    hasGrid: boolean('Has Grid', true, tab),
    primaryColor: select('Primary color', primaryColors, 'ming', tab),
    secondaryColor: select('Secondary color', secondaryColors, null, tab),
  }

  return <Wrapper {...wrapperProps}>{content}</Wrapper>
})

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
) // this must be added after the story decorator

setAddon(JSXAddon)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },

  options: {
    theme,
  },
})

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
