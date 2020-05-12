import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoFigureWithCaption from './VideoFigureWithCaption'

import { figureTab } from './Figure.stories.js'

export function videoFigureWithCaptionTab(settings = {}) {
  return figureTab({ ...settings, type: 'video' })
}

storiesOf('molecules/media/VideoFigureWithCaption', module).addWithJSX(
  'Default',
  () => {
    const props = videoFigureWithCaptionTab()
    return <VideoFigureWithCaption {...props} />
  }
)
