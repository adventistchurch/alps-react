import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Image from './Image'

const defaults = {
  src: '//placehold.it/250x100',
  alt: 'Just a placeholder image',
  className: 'story-block__image',
}

storiesOf('atoms/images/Image', module)
  .addDecorator(withKnobs)

  .add('with text and alt', () => {
    const src = text('src', defaults.src)
    const alt = text('alt', defaults.alt)
    return <Image src={src} alt={alt} />
  })

  .add('with lazy', () => {
    const src = text('src', defaults.src)
    const alt = text('alt', defaults.alt)
    const lazy = boolean('lazy', true)
    return <Image src={src} alt={alt} lazy={lazy} />
  })

  .add('with a class', () => {
    const src = text('src', defaults.src)
    const alt = text('alt', defaults.alt)
    const className = text('className', defaults.className)
    return <Image src={src} alt={alt} className={className} />
  })
