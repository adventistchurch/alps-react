import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import BreakoutImage from './BreakoutImage'

const propsTab = 'Props'
const defaults = {
  title: 'Lorem Ipsum',
  description: 'Fusce nec urna ut tellus accumsan fermentum.',
  imageSrcSet: {
    default: '//picsum.photos/500/800',
    small: '//picsum.photos/700/800', // 500
    medium: '//picsum.photos/1200/800', // 750
    large: '//picsum.photos/1500/900', // 1200
  },
  imageAlt: 'Placeholder image',
  caption: 'Proin dictum lobortis luctus.',
}

storiesOf('molecules/media/BreakoutImage', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const caption = text('Title', defaults.caption, propsTab)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    return (
      <BreakoutImage
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        caption={caption}
      />
    )
  })

  .add('With Parallax', () => {
    const caption = text('Caption', defaults.caption, propsTab)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    return (
      <BreakoutImage
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        caption={caption}
        parallax
      />
    )
  })
