import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object } from '@storybook/addon-knobs'

import Carousel from './Carousel'

import data from './Carousel.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Carousel.defaultProps,
    ...data,
    ...settings,
  }
}

function optionsTab(settings = {}) {
  const { showArrows, showDots, tab } = getTabData('Options', settings)

  return {
    showArrows: boolean('Show Arrows', showArrows, tab),
    showDots: boolean('Show Dots', showDots, tab),
  }
}

function slidesTab(settings = {}) {
  const { slides, tab } = getTabData('Slides', settings)

  return {
    slides: object('Slides *', slides, tab),
  }
}

export function carouselTab(settings = {}) {
  const props = getTabData('Carousel', settings)

  return {
    ...slidesTab(props),
    ...optionsTab(props),
  }
}

storiesOf('molecules/components/Carousel', module)
  .addWithJSX('Default (with dots)', () => {
    const { showArrows, showDots } = optionsTab()
    const { slides } = slidesTab()

    return (
      <Carousel slides={slides} showArrows={showArrows} showDots={showDots} />
    )
  })

  .addWithJSX('With arrows', () => {
    const { showArrows, showDots } = optionsTab({
      showArrows: true,
      showDots: false,
    })
    const { slides } = slidesTab()

    return (
      <Carousel slides={slides} showArrows={showArrows} showDots={showDots} />
    )
  })
