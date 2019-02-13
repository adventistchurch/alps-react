import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs'

import ContentBlock from './ContentBlock'

const propsTab = 'Props'
const ctaTab = 'CTA'
const imageTab = 'Image'
const defaults = {
  title: 'General Conference',
  category: '',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  descriptionMore:
    'Seventh-day Adventist beliefs are meant to permeate your whole life. Growing out of scriptures that paint a compelling portrait of God, you are invited to explore, experience and know the One who desires to make us whole.',
  cta: 'Find out more',
  url: 'https://www.adventist.org',
  imageSrcSet: {
    Landscape: {
      default: '//picsum.photos/500/375',
      500: '//picsum.photos/900/700',
      750: '//picsum.photos/700/600',
      1200: '//picsum.photos/500/375',
    },
    Portrait: {
      default: '//picsum.photos/150/200',
      500: '//picsum.photos/300/400',
      750: '//picsum.photos/450/600',
      1200: '//picsum.photos/600/800',
    },
    Square: {
      default: '//picsum.photos/100/100',
      500: '//picsum.photos/200/200',
      750: '//picsum.photos/300/300',
      1200: '//picsum.photos/500/500',
    },
  },
  imageAlt: 'Placeholder image',
}

const imageModes = ['Landscape', 'Portrait', 'Square']

storiesOf('molecules/blocks/ContentBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const showCta = boolean('Show CTA', true, ctaTab)
    const cta = text('CTA', defaults.cta, ctaTab)
    const url = text('URL', defaults.url, ctaTab)
    return (
      <ContentBlock
        title={title}
        description={description}
        category={category}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })

  .addWithJSX('Show more', () => {
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const descriptionMore = text(
      'Description (more)',
      defaults.descriptionMore,
      propsTab
    )
    const url = text('URL', defaults.url, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)
    return (
      <ContentBlock
        title={title}
        category={category}
        description={description}
        descriptionMore={descriptionMore}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        url={url}
      />
    )
  })
