import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Picture from './Picture'

const defaultImage = {
  default: '//placehold.it/250x100',
  500: '//placehold.it/500x200',
  1000: '//placehold.it/1000x400',
  1500: '//placehold.it/1500x600',
}
const defaultAlt = 'Just a placeholder image'

storiesOf('atoms/images/Picture', module)
  .addDecorator(withKnobs)

  .add('with image and alt', () => {
    const image = object('image', defaultImage)
    const alt = text('alt', defaultAlt)
    return <Picture image={image} alt={alt} />
  })

  .add('with lazy', () => {
    const image = object('image', defaultImage)
    const alt = text('alt', defaultAlt)
    const lazy = boolean('lazy', true)
    return <Picture image={image} alt={alt} lazy={lazy} />
  })
