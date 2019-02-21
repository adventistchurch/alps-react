import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Picture from './Picture'

const propsTab = 'Props'
const defaults = {
  alt: 'Just a placeholder image',
  srcSet: {
    default: '//picsum.photos/500/282',
    500: '//picsum.photos/900/507',
    750: '//picsum.photos/700/395',
    1200: '//picsum.photos/500/282',
  },
}

storiesOf('atoms/images/Picture', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const srcSet = object('Image SrcSet *', defaults.srcSet, propsTab)
    const alt = text('Image Alt', defaults.alt, propsTab)
    const lazy = boolean('Lazy load', true, propsTab)

    const image = {
      alt,
      srcSet,
    }

    return <Picture image={image} lazy={lazy} />
  })
