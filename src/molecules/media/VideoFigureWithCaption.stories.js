import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import VideoFigureWithCaption from './VideoFigureWithCaption'

import data from './VideoFigureWithCaption.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/VideoFigureWithCaption', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const videoSrc = text('Video Source *', data.videoSrc, propsTab)
    const caption = text('Caption', data.caption, propsTab)
    return <VideoFigureWithCaption caption={caption} videoSrc={videoSrc} />
  })
