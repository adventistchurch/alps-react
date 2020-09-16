import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import Image from './Image'
import range from '../../helpers/range'

const imageModes = ['Landscape', 'Portrait', 'Square']

const defaults = {
  src: {
    Landscape: '//picsum.photos/800/600',
    Portrait: '//picsum.photos/600/800',
    Square: '//picsum.photos/500/500',
  },
  alt: 'Just a placeholder image',
  lazy: false,
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
  const { alt, className, lazy, tab } = getTabData('Picture', settings)

  const mode = select(' Mode', imageModes, 'Landscape', tab)
  const src = defaults.src[mode || 'Landscape']

  return {
    src: text('Image Src *', src, tab),
    alt: text('Image Alt', alt, tab),
    className: text('Extra classname', className, tab),
    lazy: boolean('Lazy load', lazy, tab),
  }
}

storiesOf('atoms/images/Image', module)
  .addWithJSX('Default', () => {
    const { src, alt, className, lazy } = imageTab()

    return <Image src={src} alt={alt} lazy={lazy} className={className} />
  })
  .addWithJSX('Lazy', () => {
    const props = imageTab()
    return range(10, 50).map((x, i) => (
      <Image
        {...props}
        lazy
        src={`//picsum.photos/id/${x}1/300/200`}
        placeholderSrc={`//picsum.photos/id/${x}1/30/20`}
        width="300"
        height="200"
        key={`lazy-image-${i}`}
      />
    ))
  })
