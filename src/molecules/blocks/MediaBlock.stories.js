import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  object,
  boolean,
  date,
} from '@storybook/addon-knobs'

import MediaBlock from './MediaBlock'

const propsTab = 'Props'
const imageTab = 'Image'
const ctaTab = 'CTA'
const defaults = {
  title:
    'Adventist leaders call for international cooperation to end abuse of refugees in Libya',
  description:
    'Mauris sit amet augue gravida, dignissim sem maximus, aliquam metus. Maecenas eu consectetur orci, id auctor dui.',
  datetime: new Date(),
  category: 'Culture',
  cta: 'Find out more',
  ctaIcon: 'arrowLongRight',
  url: 'https://www.adventist.org',
  imageSrcSet: {
    Landscape: {
      default: '//picsum.photos/500/282',
      500: '//picsum.photos/900/507',
      750: '//picsum.photos/700/395',
      1200: '//picsum.photos/500/282',
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
  videoSrc:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
  kicker: '',
}

const imageModes = ['Landscape', 'Portrait', 'Square']
const dateFormats = ['date', 'time', 'datetime']

storiesOf('molecules/blocks/MediaBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'date', propsTab)
    const url = text('URL', defaults.url, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', defaults.cta, ctaTab)

    return (
      <MediaBlock
        kicker={kicker}
        title={title}
        description={description}
        category={category}
        datetime={datetime}
        dateFormat={dateFormat}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        url={url}
        cta={showCta ? cta : null}
      />
    )
  })

  .addWithJSX('Inline', () => {
    const kicker = text('Kicker', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'date', propsTab)
    const url = text('URL', defaults.url)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', defaults.cta, ctaTab)

    return (
      <MediaBlock
        kicker={kicker}
        title={title}
        description={description}
        category={category}
        datetime={datetime}
        dateFormat={dateFormat}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        url={url}
        cta={showCta ? cta : null}
        inline
      />
    )
  })

  .addWithJSX('Inset', () => {
    const kicker = text('Kicker Text', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', '', propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'date', propsTab)
    const url = text('URL', defaults.url, propsTab)
    const category = text('Category', '', propsTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)

    return (
      <MediaBlock
        kicker={kicker}
        title={title}
        description={description}
        category={category}
        datetime={datetime}
        dateFormat={dateFormat}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        url={url}
        inset
      />
    )
  })

  .addWithJSX('Reversed', () => {
    const kicker = text('Kicker Text', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'date', propsTab)
    const url = text('URL', defaults.url, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', defaults.cta, ctaTab)

    return (
      <MediaBlock
        kicker={kicker}
        title={title}
        description={description}
        category={category}
        datetime={datetime}
        dateFormat={dateFormat}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        url={url}
        cta={showCta ? cta : null}
        reversed
      />
    )
  })

  .addWithJSX('Stacked', () => {
    const kicker = text('Kicker Text', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const category = text('Category', defaults.category, propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'date', propsTab)
    const url = text('URL', defaults.url, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      defaults.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', defaults.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', defaults.cta, ctaTab)

    return (
      <MediaBlock
        kicker={kicker}
        title={title}
        description={description}
        category={category}
        datetime={datetime}
        dateFormat={dateFormat}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        url={url}
        cta={showCta ? cta : null}
        stacked
      />
    )
  })
