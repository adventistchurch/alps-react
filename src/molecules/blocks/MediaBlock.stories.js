import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  date as datetime,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs'

import { iconNames } from '../../atoms/icons/Icon'
import { dateFormats } from '../../helpers/datetimeFormat'

import MediaBlock from './MediaBlock'

import data from './MediaBlock.stories.json'

const propsTab = 'Props'
const metaTab = 'Meta'
const imageTab = 'Image'
const ctaTab = 'CTA'

const imageModes = ['Landscape', 'Portrait', 'Square']

storiesOf('molecules/blocks/MediaBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const category = text('Category', data.category, metaTab)
    const date = datetime('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.image.srcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.image.alt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

    const image = {
      alt: imageAlt,
      srcSet: imageSrcSet,
    }

    return (
      <MediaBlock
        category={category}
        cta={showCta ? cta : null}
        ctaIcon={showCta ? ctaIcon : null}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={showImage ? image : null}
        kicker={kicker}
        title={title}
        url={url}
      />
    )
  })

  .addWithJSX('Inline', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const showBorder = boolean('Content Border', true, propsTab)
    const category = text('Category', data.category, metaTab)
    const date = datetime('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.image.srcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.image.alt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

    const image = {
      alt: imageAlt,
      srcSet: imageSrcSet,
    }

    return (
      <MediaBlock
        border={showBorder ? 'left' : 'none'}
        category={category}
        cta={showCta ? cta : null}
        ctaIcon={showCta ? ctaIcon : null}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={showImage ? image : null}
        kicker={kicker}
        title={title}
        type="inline"
        url={url}
      />
    )
  })

  .addWithJSX('Inset', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', '', propsTab)
    const category = text('Category', '', metaTab)
    const date = datetime('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.image.srcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.image.alt, imageTab)

    const image = {
      alt: imageAlt,
      srcSet: imageSrcSet,
    }

    return (
      <MediaBlock
        category={category}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        title={title}
        type="inset"
        url={url}
      />
    )
  })

  .addWithJSX('Reversed', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const category = text('Category', data.category, metaTab)
    const date = datetime('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showBorder = boolean('Content Border', true, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.image.srcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.image.alt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

    const image = {
      alt: imageAlt,
      srcSet: imageSrcSet,
    }

    return (
      <MediaBlock
        border={showBorder ? 'left' : 'none'}
        category={category}
        cta={showCta ? cta : null}
        ctaIcon={showCta ? ctaIcon : null}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={showImage ? image : null}
        kicker={kicker}
        title={title}
        type="reversed"
        url={url}
      />
    )
  })

  .addWithJSX('Stacked', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const showBorder = boolean('Content Border', false, propsTab)
    const category = text('Category', data.category, metaTab)
    const date = datetime('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.image.srcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.image.alt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

    const image = {
      alt: imageAlt,
      srcSet: imageSrcSet,
    }

    return (
      <MediaBlock
        border={showBorder ? 'left' : 'none'}
        category={category}
        cta={showCta ? cta : null}
        ctaIcon={showCta ? ctaIcon : null}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={showImage ? image : null}
        kicker={kicker}
        title={title}
        type="stacked"
        url={url}
      />
    )
  })
