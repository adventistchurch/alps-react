import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, object } from '@storybook/addon-knobs'

import FigureWithCaption from './FigureWithCaption'

import data from './FigureWithCaption.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/FigureWithCaption', module).addWithJSX(
  'Default',
  () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const caption = text('Caption', data.caption, propsTab)
    const lazy = boolean('Lazyload Image', data.lazy, propsTab)

    const image = {
      alt,
      srcSet,
      lazy,
    }

    return <FigureWithCaption caption={caption} image={image} />
  }
)
