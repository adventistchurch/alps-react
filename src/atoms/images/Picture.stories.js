import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Picture from './Picture'

const propsTab = 'Props'
const defaults = {
  imageSrcSet: {
    default: '//picsum.photos/500/282',
    500: '//picsum.photos/900/507',
    750: '//picsum.photos/700/395',
    1200: '//picsum.photos/500/282',
  },
  alt: 'Just a placeholder image',
}

storiesOf('atoms/images/Picture', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const alt = text('Image Alt', defaults.alt, propsTab)
    const lazy = boolean('Lazy', true, propsTab)
    return <Picture image={imageSrcSet} alt={alt} lazy={lazy} />
  })
