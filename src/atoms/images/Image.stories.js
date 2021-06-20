import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import Image from './Image'

const imageModes = ['Landscape', 'Portrait', 'Square']

const defaults = {
  src: {
    Landscape: '//picsum.photos/800/600',
    Portrait: '//picsum.photos/600/800',
    Square: '//picsum.photos/500/500',
  },
  alt: 'Just a placeholder image',
  className: 'story-block__image',
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Image.defaultProps,
    ...defaults,
    ...settings,
  }
}

export function imageTab(settings = {}) {
  const { alt, tab } = getTabData('Picture', settings)

  const mode = select(' Mode', imageModes, 'Landscape', tab)
  const src = defaults.src[mode || 'Landscape']

  return {
    src: text('Image Src *', src, tab),
    alt: text('Image Alt', alt, tab),
  }
}

storiesOf('atoms/images/Image', module).addWithJSX('Default', () => {
  const { src, alt } = imageTab()

  return <Image src={src} alt={alt} />
})
