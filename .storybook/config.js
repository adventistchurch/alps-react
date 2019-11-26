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

// const style = {
//   height: '100vh',
// }

addDecorator(story => {
  const content = story()

  const primaryColor = select(
    'Primary color',
    primaryColors,
    primaryColors[0],
    'Theme'
  )
  const secondaryColor = select(
    'Secondary color',
    secondaryColors,
    secondaryColors[0],
    'Theme'
  )

  const hasGrid = boolean('Has Grid', true, 'Theme')

  const props = {
    hasGrid,
    primaryColor,
    secondaryColor,
    // style,
  }

  return <Wrapper {...props}>{content}</Wrapper>
})

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
) // this must be added after the story decorator

setAddon(JSXAddon)

addParameters({
  viewport: { defaultViewport: 'responsive', viewports: INITIAL_VIEWPORTS },

  options: {
    theme,
  },
})

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
