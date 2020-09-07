import React from 'react'

import Figure from './Figure'
import { figureSizes, figureAlignPositions } from '../../atoms/global/figures'

export default {
  title: 'ALPS/Molecules/Media/Figure',
  component: Figure,
  argTypes: {
    size: { control: { type: 'select', options: figureSizes } },
    align: { control: { type: 'select', options: figureAlignPositions } },
  },
}

const FigureTemplate = props => <Figure {...props} />

export const Default = FigureTemplate.bind({})
Default.args = {
  caption: 'Proin dictum lobortis luctus.',
  image: {
    alt: 'Placeholder image',
    srcSet: {
      default: '//picsum.photos/500/282',
      500: '//picsum.photos/900/507',
      750: '//picsum.photos/700/395',
      1200: '//picsum.photos/500/282',
    },
  },
}

export const WithVideo = props => <Figure {...props} />
WithVideo.args = {
  ...Default.args,
  videoSrc:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
}
