import React from 'react'

import Image from './Image'

export default {
  title: 'ALPS/Atoms/Images/Image',
  component: Image,
  args: {
    src: '',
    alt: '',
  },
}

const ImageTemplate = props => <Image {...props} />

export const Default = ImageTemplate.bind({})
Default.args = {
  alt: 'Just a placeholder image',
  src: '//picsum.photos/500/500',
}

export const Portrait = ImageTemplate.bind({})
Portrait.args = {
  ...Default.args,
  src: '//picsum.photos/480/640',
}

export const Landscape = ImageTemplate.bind({})
Landscape.args = {
  ...Default.args,
  src: '//picsum.photos/720/480',
}

export const Lazy = ImageTemplate.bind({})
Lazy.args = {
  ...Default.args,
  src: '//picsum.photos/123/456/',
  lazy: true,
}
