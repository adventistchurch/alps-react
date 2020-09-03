import React from 'react'

import Picture from './Picture'

export default {
  title: 'ALPS/Atoms/Images/Picture',
  component: Picture,
}

const PictureTemplate = props => <Picture {...props} />

export const Default = PictureTemplate.bind({})
Default.args = {
  image: {
    srcSet: {
      default: '//picsum.photos/500/500',
    },
    alt: 'Image description',
  },
}

export const Lazy = PictureTemplate.bind({})
Lazy.args = {
  image: {
    srcSet: {
      default: '//picsum.photos/id/25/500/500',
    },
    alt: 'Image description',
  },
  lazy: true,
}
