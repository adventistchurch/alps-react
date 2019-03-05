import React from 'react'

import { configure, addDecorator, setAddon } from '@storybook/react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
import { configureViewport } from '@storybook/addon-viewport'

import Wrapper from '../src/Wrapper'
import { primaryColors, secondaryColors } from '../src/atoms/global/colors'

const style = {
  height: '100vh',
}

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
    style,
  }

  return <Wrapper {...props}>{content}</Wrapper>
})

addDecorator(withKnobs) // this must be added after the story decorator

setAddon(JSXAddon)

configureViewport({ defaultViewport: 'responsive' })

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
