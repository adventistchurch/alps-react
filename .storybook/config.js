import React from 'react'

import { configure, addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Wrapper from '../src/Wrapper'
import * as colors from '../src/atoms/global/colors'

const style = {
  height: '100vh',
}

addDecorator(story => {
  const content = story()
  const primaryColor = select('Primary color', colors.primary, 'denim', 'Theme')
  const secondaryColor = select(
    'Secondary color',
    colors.secondary,
    'white',
    'Theme'
  )

  const props = {
    primaryColor,
    secondaryColor,
    style,
  }

  return <Wrapper {...props}>{content}</Wrapper>
})

addDecorator(withKnobs) // this must be added after the story decorator

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
