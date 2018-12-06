import React from 'react'

import { configure, addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import LoadScript from '../src/helpers/LoadScript'
import * as colors from '../src/atoms/global/colors'

const style = {
  height: '100vh',
}

addDecorator(story => {
  const content = story()
  const primaryColor = select('Primary color', colors.primary, 'denim')
  const secondaryColor = select('Secondary color', colors.secondary, 'white')
  return (
    <div className={`u-theme--${primaryColor}`} style={{ ...style }}>
      <div className={`body has-grid u-theme--${secondaryColor}`}>
        {content}
      </div>
      <LoadScript url="//code.jquery.com/jquery-2.2.4.min.js" />
      <LoadScript url="//cdn.adventist.org/alps/3/latest/js/script.min.js" />
    </div>
  )
})

addDecorator(withKnobs) // this must be added after the story decorator

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
