import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Picture from './Picture'

const defaults = {
  image: {
    default: '//picsum.photos/250/100',
    500: '//picsum.photos/500/200',
    1000: '//picsum.photos/1000/400',
    1500: '//picsum.photos/1500/600',
  },
  alt: 'Just a placeholder image',
}

storiesOf('atoms/images/Picture', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const image = object('image', defaults.image)
    const alt = text('alt', defaults.alt)
    const lazy = boolean('lazy', true)
    return <Picture image={image} alt={alt} lazy={lazy} />
  })
