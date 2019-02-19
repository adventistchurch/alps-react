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

import { iconNames } from '../../atoms/icons/Icon'

import MediaBlock from './MediaBlock'

import data from './MediaBlock.stories.json'

const propsTab = 'Props'
const metaTab = 'Meta'
const imageTab = 'Image'
const ctaTab = 'CTA'

const imageModes = ['Landscape', 'Portrait', 'Square']
const dateFormats = ['date', 'time', 'datetime']

storiesOf('molecules/blocks/MediaBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const category = text('Category', data.category, metaTab)
    const datetime = date('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

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
        ctaIcon={showCta ? ctaIcon : null}
      />
    )
  })

  .addWithJSX('Inline', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const showBorder = boolean('Content Border', true, propsTab)
    const category = text('Category', data.category, metaTab)
    const datetime = date('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

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
        ctaIcon={showCta ? ctaIcon : null}
        inline
        border={showBorder ? 'left' : 'none'}
      />
    )
  })

  .addWithJSX('Inset', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', '', propsTab)
    const category = text('Category', '', metaTab)
    const datetime = date('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)

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
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const category = text('Category', data.category, metaTab)
    const datetime = date('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showBorder = boolean('Content Border', true, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

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
        ctaIcon={showCta ? ctaIcon : null}
        reversed
        border={showBorder ? 'left' : 'none'}
      />
    )
  })

  .addWithJSX('Stacked', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const showBorder = boolean('Content Border', false, propsTab)
    const category = text('Category', data.category, metaTab)
    const datetime = date('Date Time', new Date(), metaTab)
    const dateFormat = select('Date Format', dateFormats, 'date', metaTab)
    const url = text('URL', data.url, metaTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)
    const showCta = boolean('Show Call to Action', false, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const ctaIcon = select(
      'Call to Action Icon *',
      iconNames,
      'arrow-long-right',
      ctaTab
    )

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
        ctaIcon={showCta ? ctaIcon : null}
        stacked
        border={showBorder ? 'left' : 'none'}
      />
    )
  })
