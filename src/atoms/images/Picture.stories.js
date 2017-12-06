import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Picture from './Picture'

const defaults = {
  image: {
    default: '//placehold.it/250x100',
    500: '//placehold.it/500x200',
    1000: '//placehold.it/1000x400',
    1500: '//placehold.it/1500x600',
  },
  alt: 'Just a placeholder image',
}

storiesOf('atoms/images/Picture', module)
  .addDecorator(withKnobs)

  .add('with image and alt', () => {
    const image = object('image', defaults.image)
    const alt = text('alt', defaults.alt)
    return <Picture image={image} alt={alt} />
  })

  .add('with lazy', () => {
    const image = object('image', defaults.image)
    const alt = text('alt', defaults.alt)
    const lazy = boolean('lazy', true)
    return <Picture image={image} alt={alt} lazy={lazy} />
  })
