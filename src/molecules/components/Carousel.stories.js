import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Carousel from './Carousel'

import { defaultSlide } from './Slide.stories'

const defaults = {
  slide: [defaultSlide, defaultSlide, defaultSlide],
  showArrows: true,
  slides2column: false,
  outerClass: '',
  innerClass: '',
}

storiesOf('molecules/components/Carousel', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const slides = defaults.slide
    const showArrows = boolean('showArrows', defaults.showArrows)
    const slides2column = boolean('slides2column', defaults.slides2column)
    const outerClass = text('outerClass', defaults.outerClass)
    const innerClass = text('innerClass', defaults.innerClass)

    return (
      <Carousel
        slides={slides}
        showArrows={showArrows}
        slides2column={slides2column}
        outerClass={outerClass}
        innerClass={innerClass}
      />
    )
  })
