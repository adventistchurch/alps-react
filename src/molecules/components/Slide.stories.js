import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'

import Slide from './Slide'

import data from './Slide.stories.json'

const propsTab = 'Props'
const textTab = 'Text'
const ctaTab = 'CTA'

storiesOf('molecules/components/Slide', module)
  .addWithJSX('Default', () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const lazy = boolean('Layz load image', false, propsTab)

    const image = {
      alt,
      lazy,
      srcSet,
    }

    return <Slide image={image} />
  })

  .addWithJSX('With heading', () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const lazy = boolean('Lazy load image', false, propsTab)
    const heading = text('Heading *', data.heading, textTab)
    const dek = text('Description *', data.dek, textTab)
    const subtitle = text('Subtitle', data.subtitle, textTab)
    const showCta = boolean('Show CTA', true, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const url = text('Call to Action URL', data.url, ctaTab)

    const image = {
      alt,
      lazy,
      srcSet,
    }

    return (
      <Slide
        heading={heading}
        subtitle={subtitle}
        dek={dek}
        image={image}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })
