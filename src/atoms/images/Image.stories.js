import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Image from './Image'

const defaultSrc = '//placehold.it/200x100'
const defaultAlt = 'Just a placeholder image'

const stories = storiesOf('atoms/images/Image', module)
stories.addDecorator(withKnobs)

stories.add('with text and alt', () => {
  const src = text('src', defaultSrc)
  const alt = text('alt', defaultAlt)
  return <Image src={src} alt={alt} />
})

stories.add('with lazy', () => {
  const src = text('src', defaultSrc)
  const alt = text('alt', defaultAlt)
  const lazy = boolean('lazy', true)
  return <Image src={src} alt={alt} lazy={lazy} />
})

stories.add('with a class', () => {
  const src = text('src', defaultSrc)
  const alt = text('alt', defaultAlt)
  const className = text('className', 'story-block__image')
  return <Image src={src} alt={alt} className={className} />
})
