import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, object, select } from '@storybook/addon-knobs'

import FigureWithCaption from './FigureWithCaption'
import { figureSizes, figureAlignPositions } from '../../atoms/global/figures'

import Figure from './Figure'
import data from './Figure.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Figure.defaultProps,
    ...data,
    ...settings,
  }
}

export function generalTab(settings = {}) {
  const { caption, align, size, tab } = getTabData('General', settings)

  return {
    caption: text('Caption', caption, tab),
    size: select('Size', figureSizes, size, tab),
    align: select('Align', figureAlignPositions, align, tab),
  }
}

export function mediaTab(settings = {}) {
  const { videoSrc, image, lazy, type, tab } = getTabData('Media', settings)

  const mediaType = select('Type', ['video', 'image'], type, tab)

  return mediaType === 'video'
    ? {
        videoSrc: object('Video Src *', videoSrc, tab),
      }
    : {
        image: {
          srcSet: object('Image SrcSet *', image.srcSet, tab),
          alt: text('Image Alt', image.alt, tab),
        },
        lazy: boolean('Lazyload Image', lazy, tab),
      }
}

export function figureTab(settings = {}) {
  return {
    ...generalTab(settings),
    ...mediaTab(settings),
  }
}

storiesOf('molecules/media/Figure', module).addWithJSX('Default', () => {
  const props = figureTab()
  return <FigureWithCaption {...props} />
})
