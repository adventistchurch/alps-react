import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import HeroCarousel from './HeroCarousel'

import data from './HeroCarousel.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...HeroCarousel.defaultProps,
    ...data,
    ...settings,
  }
}

export function heroCarouselTab(settings = {}) {
  const { showArrows, slides, tab } = getTabData('Props', settings)

  return {
    showArrows: boolean('Show Arrows', showArrows, tab),
    slides: object('Slides *', slides, tab),
  }
}

storiesOf('organisms/sections/HeroCarousel', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { showArrows, slides } = heroCarouselTab()
    return <HeroCarousel slides={slides} showArrows={showArrows} />
  })
