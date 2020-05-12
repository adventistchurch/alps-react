import React from 'react'
import { storiesOf } from '@storybook/react'

import FigureWithCaption from './FigureWithCaption'

import { figureTab } from './Figure.stories.js'

export function figureWithCaptionTab(settings = {}) {
  return figureTab({ ...settings, type: 'image' })
}

storiesOf('molecules/media/FigureWithCaption', module).addWithJSX(
  'Default',
  () => {
    const props = figureWithCaptionTab()
    return <FigureWithCaption {...props} />
  }
)
