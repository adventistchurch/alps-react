import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import SearchHeader from './SearchHeader'

const propsTab = 'Props'
const defaults = {
  title: 'Lorem Ipsum',
  description: 'Fusce nec urna ut tellus accumsan fermentum.',
  imageSrcSet: {
    default: '//picsum.photos/500/282',
    500: '//picsum.photos/900/507',
    750: '//picsum.photos/700/395',
    1200: '//picsum.photos/500/282',
  },
  imageAlt: 'Placeholder image',
  isLazy: false,
}

storiesOf('molecules/forms/SearchHeader', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    const isLazy = boolean('Lazy load image', false, propsTab)
    return (
      <SearchHeader
        title={title}
        description={description}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        isLazy={isLazy}
      />
    )
  })
