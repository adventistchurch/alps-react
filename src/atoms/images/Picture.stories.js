import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  object,
  select,
  text,
  
} from '@storybook/addon-knobs'

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
  const { alt, srcSet, lazy, tab } = getTabData('Picture', settings)

  const imageMode = select(' Mode', imageModes, 'Landscape', tab)
  const src = srcSet || data[imageMode]

  return {
    image: {
      srcSet: object('Image SrcSet *', src, tab),
      alt: text('Image Alt', alt, tab),
    },
    lazy: boolean('Lazy load', lazy, tab),
  }
}

storiesOf('atoms/images/Picture', module)
  

  .addWithJSX('Default', () => {
    const { image, lazy } = pictureTab()
    return <Picture image={image} lazy={lazy} />
  })
