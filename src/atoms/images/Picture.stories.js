import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select, text } from '@storybook/addon-knobs'

import Picture from './Picture'
import data from './Picture.stories.json'

const imageModes = ['Landscape', 'Portrait', 'Square']

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Picture.defaultProps,
    ...data,
    ...settings,
  }
}

export function pictureTab(settings = {}) {
  const { alt, caption, srcSet, lazy, tab } = getTabData('Picture', settings)

  const imageMode = srcSet
    ? null
    : select(' Mode', imageModes, 'Landscape', tab)
  const src = srcSet || data[imageMode]

  return {
    image: {
      srcSet: object('Image SrcSet *', src, tab),
      alt: text('Image Alt', alt, tab),
      caption: text('Image Caption', caption, tab),
    },
    lazy: boolean('Lazy load', lazy, tab),
  }
}

storiesOf('atoms/images/Picture', module).addWithJSX('Default', () => {
  const { image, lazy } = pictureTab()
  return <Picture image={image} lazy={lazy} />
})
