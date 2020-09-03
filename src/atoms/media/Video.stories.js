import React from 'react'

import Video from './Video'

export default {
  title: 'ALPS/Atoms/Media/Video',
  component: Video,
}

const VideoTemplate = props => <Video {...props} />

export const Default = VideoTemplate.bind({})
Default.args = {
  src:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
  title: 'Just a demo video',
  width: 600,
  height: 300,
}
Default.argTypes = {
  width: { control: { type: 'range', min: 200, max: 1280, step: 10 } },
  height: { control: { type: 'range', min: 200, max: 1280, step: 10 } },
}
