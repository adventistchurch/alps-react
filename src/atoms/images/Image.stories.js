import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Image from './Image'

const propsTab = 'Props'
const defaults = {
  src: '//picsum.photos/798/447',
  alt: 'Just a placeholder image',
  lazy: false,
  className: 'story-block__image',
}

storiesOf('atoms/images/Image', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const src = text('Image Source *', defaults.src, propsTab)
    const alt = text('Image Alt', defaults.alt, propsTab)
    const lazy = boolean('Lazy', defaults.lazy, propsTab)
    const className = text('className', defaults.className, propsTab)
    return <Image src={src} alt={alt} lazy={lazy} className={className} />
  })
