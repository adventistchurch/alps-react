import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import * as colors from '../src/atoms/global/colors'

const style = {
  padding: '1em',
  height: '100vh',
}

addDecorator(story => {
  const content = story()
  const primaryColor = select('Primary color', colors.primary, 'denim')
  const secondaryColor = select('Secondary color', colors.secondary, 'warm')
  const backgroundColor = select(
    'Background color',
    ['black', 'white'],
    'white'
  )
  return (
    <div
      className={`theme--${primaryColor}`}
      style={{ backgroundColor, ...style }}
    >
      <div className={`theme--${secondaryColor}`}>{content}</div>
    </div>
  )
})

addDecorator(withKnobs) // this must be added after the story decorator

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
