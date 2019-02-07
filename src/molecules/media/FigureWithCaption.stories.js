import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import FigureWithCaption from './FigureWithCaption'

const propsTab = 'Props'
const defaults = {
  caption: 'Proin dictum lobortis luctus.',
  imageSrcSet: {
    default: '//picsum.photos/500/282',
    500: '//picsum.photos/900/507',
    750: '//picsum.photos/700/395',
    1200: '//picsum.photos/500/282',
  },
  imageAlt: 'Placeholder image',
}

storiesOf('molecules/media/FigureWithCaption', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const caption = text('Caption', defaults.caption, propsTab)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    return (
      <FigureWithCaption
        caption={caption}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
      />
    )
  })
