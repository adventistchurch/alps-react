import React from 'react'
import { configure, addDecorator } from '@storybook/react'

const style = {
  margin: '1em',
}

addDecorator(story => <div {...{ style }}>{story()}</div>)

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
