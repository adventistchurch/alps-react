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
    const imageSrcSet = object('Image SrcSet *', data.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', data.imageAlt, propsTab)
    const isLazy = boolean('Layz load image', false, propsTab)
    return (
      <Slide imageSrcSet={imageSrcSet} imageAlt={imageAlt} isLazy={isLazy} />
    )
  })

  .addWithJSX('With text', () => {
    const imageSrcSet = object('Image SrcSet *', data.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', data.imageAlt, propsTab)
    const isLazy = boolean('Lazy load image', false, propsTab)
    const heading = text('Heading *', data.heading, textTab)
    const dek = text('Description *', data.dek, textTab)
    const subtitle = text('Subtitle', data.subtitle, textTab)
    const showCta = boolean('Show CTA', true, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const url = text('Call to Action URL', data.url, ctaTab)
    return (
      <Slide
        heading={heading}
        subtitle={subtitle}
        dek={dek}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        isLazy={isLazy}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })
