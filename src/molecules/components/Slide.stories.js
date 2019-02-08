import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import Slide from './Slide'

const propsTab = 'Props'
const ctaTab = 'CTA'
const defaults = {
  heading: 'Lorem Ipsum',
  subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
  dek:
    'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
  cta: 'Mec cursus mi',
  url: 'https://www.adventist.org',
  imageSrcSet: {
    default: '//picsum.photos/500/282',
    500: '//picsum.photos/900/507?image=314',
    750: '//picsum.photos/700/395',
    1200: '//picsum.photos/500/282',
  },
  imageAlt: 'Placeholder image',
  isLazy: false,
}

storiesOf('molecules/components/Slide', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    const isLazy = boolean('Layz load image', false, propsTab)
    return (
      <Slide imageSrcSet={imageSrcSet} imageAlt={imageAlt} isLazy={isLazy} />
    )
  })

  .add('With text', () => {
    const heading = text('Heading', defaults.heading, propsTab)
    const subtitle = text('Subtitle', defaults.subtitle, propsTab)
    const dek = text('Description', defaults.dek, propsTab)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet, propsTab)
    const imageAlt = text('Image Alt', defaults.imageAlt, propsTab)
    const isLazy = boolean('Lazy load image', false, propsTab)
    const showCta = boolean('Show CTA', true, ctaTab)
    const cta = text('CTA', defaults.cta, ctaTab)
    const url = text('URL', defaults.url, ctaTab)
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
