import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import VideoFigureWithCaption from './VideoFigureWithCaption'

const propsTab = 'Props'
const defaults = {
  caption: 'Proin dictum lobortis luctus.',
  videoSrc:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
}

storiesOf('molecules/media/VideoFigureWithCaption', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const caption = text('Caption', defaults.caption, propsTab)
    const videoSrc = text('Video source', defaults.videoSrc, propsTab)
    return <VideoFigureWithCaption caption={caption} videoSrc={videoSrc} />
  })
