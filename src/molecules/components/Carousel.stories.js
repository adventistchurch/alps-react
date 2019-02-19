import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import Carousel from './Carousel'

import data from './Carousel.stories.json'

const propsTab = 'Props'

storiesOf('molecules/components/Carousel', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const showArrows = boolean('Show Arrows', true, propsTab)
    const slides = object('Slides *', data.slides, propsTab)
    return <Carousel slides={slides} showArrows={showArrows} />
  })
