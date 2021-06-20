import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select, text } from '@storybook/addon-knobs'

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
  const { alt, caption, srcSet, tab } = getTabData('Picture', settings)

  const imageMode = srcSet
    ? null
    : select(' Mode', imageModes, 'Landscape', tab)
  const src = srcSet || data[imageMode]

  return {
    srcSet: object('Image SrcSet *', src, tab),
    alt: text('Image Alt', alt, tab),
    caption: text('Image Caption', caption, tab),
  }
}

storiesOf('atoms/images/Picture', module).addWithJSX('Default', () => {
  const picture = pictureTab()
  return <Picture {...picture} />
})
