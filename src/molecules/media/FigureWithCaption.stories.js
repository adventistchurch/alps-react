import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import FigureWithCaption from './FigureWithCaption'

import data from './FigureWithCaption.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/FigureWithCaption', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const imageSrcSet = object('Image SrcSet *', data.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', data.imageAlt, propsTab)
    const caption = text('Caption', data.caption, propsTab)
    return (
      <FigureWithCaption
        caption={caption}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
      />
    )
  })
