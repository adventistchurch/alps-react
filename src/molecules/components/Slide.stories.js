import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Slide from './Slide'

import data from './Slide.stories.json'

const propsTab = 'Props'
const textTab = 'Text'
const ctaTab = 'CTA'

storiesOf('molecules/components/Slide', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const isLazy = boolean('Layz load image', false, propsTab)

    const image = {
      alt,
      srcSet,
    }

    return <Slide image={image} isLazy={isLazy} />
  })

  .addWithJSX('With text', () => {
    const srcSet = object('Image SrcSet *', data.image.srcSet, propsTab)
    const alt = text('Image Alt', data.image.alt, propsTab)
    const isLazy = boolean('Lazy load image', false, propsTab)
    const heading = text('Heading *', data.heading, textTab)
    const dek = text('Description *', data.dek, textTab)
    const subtitle = text('Subtitle', data.subtitle, textTab)
    const showCta = boolean('Show CTA', true, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const url = text('Call to Action URL', data.url, ctaTab)

    const image = {
      alt,
      srcSet,
    }

    return (
      <Slide
        heading={heading}
        subtitle={subtitle}
        dek={dek}
        image={image}
        isLazy={isLazy}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })
