import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import VideoFigureWithCaption from './VideoFigureWithCaption'

import data from './VideoFigureWithCaption.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...VideoFigureWithCaption.defaultProps,
    ...data,
    ...settings,
  }
}

export function videoFigureWithCaptionTab(settings = {}) {
  const { videoSrc, caption, tab } = getTabData('Video', settings)

  return {
    videoSrc: text('Source *', videoSrc, tab),
    caption: text('Caption', caption, tab),
  }
}

storiesOf('molecules/media/VideoFigureWithCaption', module).addWithJSX(
  'Default',
  () => {
    const props = videoFigureWithCaptionTab()
    return <VideoFigureWithCaption {...props} />
  }
)
