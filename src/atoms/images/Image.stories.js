import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Image from './Image'

const defaults = {
  src: '//placehold.it/250x100',
  alt: 'Just a placeholder image',
  lazy: false,
  className: 'story-block__image',
}

storiesOf('atoms/images/Image', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const src = text('src', defaults.src)
    const alt = text('alt', defaults.alt)
    const lazy = boolean('lazy', defaults.lazy)
    const className = text('className', defaults.className)
    return <Image src={src} alt={alt} lazy={lazy} className={className} />
  })
