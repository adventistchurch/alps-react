import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import FigureWithCaption from './FigureWithCaption'

import data from './FigureWithCaption.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/FigureWithCaption', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const caption = text('Caption', data.caption, propsTab)

    const image = {
      alt,
      srcSet,
    }

    return <FigureWithCaption caption={caption} image={image} />
  })
