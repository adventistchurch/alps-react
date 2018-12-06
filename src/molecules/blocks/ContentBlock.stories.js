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

const defaults = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  descriptionMore:
    'Seventh-day Adventist beliefs are meant to permeate your whole life. Growing out of scriptures that paint a compelling portrait of God, you are invited to explore, experience and know the One who desires to make us whole.',
  cta: 'Find out more',
  url: 'https://adventist.org',
  blockClass: {
    default: 'u-spacing',
    showMore:
      'c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark',
  },
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

  .add('Default', () => {
    const title = text('Title', defaults.title)
    const description = text('Description', defaults.description)
    const showCta = boolean('Show CTA', true)
    const cta = text('CTA', defaults.cta)
    const url = text('URL', defaults.url)
    const blockClass = text('Block class', defaults.blockClass)
    return (
      <ContentBlock
        title={title}
        description={description}
        cta={showCta ? cta : null}
        url={url}
        blockClass={blockClass.default}
      />
    )
  })

  .add('Show more', () => {
    const title = text('Title', defaults.title)
    const imageMode = select('Image Mode', imageModes, 'Landscape')
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet[imageMode])
    const description = text('Description', defaults.description)
    const descriptionMore = text('Description (more)', defaults.descriptionMore)
    const url = text('URL', defaults.url)
    const blockClass = text('Block class', defaults.blockClass.showMore)
    return (
      <ContentBlock
        title={title}
        description={description}
        descriptionMore={descriptionMore}
        imageSrcSet={imageSrcSet}
        url={url}
        blockClass={blockClass}
      />
    )
  })
