import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, date as datetime, select, text } from '@storybook/addon-knobs'

import { iconNames } from '../../atoms/icons/Icon'
import { dateFormats } from '../../helpers/DateTimeFormat'

import MediaBlock, { mediaBlocksTypes } from './MediaBlock'

import data from './MediaBlock.stories.json'
import { pictureTab } from '../../atoms/images/Picture.stories'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...MediaBlock.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { description, kicker, title, tab } = getTabData('Texts', settings)

  return {
    kicker: text('Kicker', kicker, tab),
    title: text('Title', title, tab),
    description: text('Description', description, tab),
  }
}

function metaTab(settings = {}) {
  const { category, date, url, tab } = getTabData('Meta', settings)

  return {
    category: text('Category', category, tab),
    date: datetime('Date Time', new Date(date), tab),
    dateFormat: select('Date Format', dateFormats, 'date', tab),
    url: text('URL', url, tab),
  }
}

function imageTab(settings = {}) {
  const { image, tab } = getTabData('Image', settings)
  const showImage = boolean('Show Image', true, tab)
  const asBackgroundImage = boolean('As Background Image', false, tab)

  return {
    asBackgroundImage,
    ...(showImage ? pictureTab({ image, tab }) : {}),
  }
}

function displayTab(settings = {}) {
  const { border, reversed, tab } = getTabData('Display', settings)
  return {
    border: select('Content Border', ['none', 'left'], border, tab),
    reversed: boolean('Reversed', reversed, tab),
  }
}

function ctaTab(settings = {}) {
  const { cta, ctaIcon = 'arrow-long-right', tab } = getTabData(
    'Image',
    settings
  )

  const showCta = boolean('Show Call to Action', false, ctaTab)

  return showCta
    ? {
        cta: text('Call to Action Text', cta, tab),
        ctaIcon: select('Call to Action Icon *', iconNames, ctaIcon, tab),
      }
    : {}
}

export function mediaBlockTab(settings = {}) {
  const mediaBlock = getTabData('MediaBlock', settings)

  return {
    ...textsTab(mediaBlock),
    ...metaTab(mediaBlock),
    ...imageTab(mediaBlock),
    ...ctaTab(mediaBlock),
  }
}

storiesOf('molecules/blocks/MediaBlock', module)
  .addWithJSX('Default', () => {
    const { description, kicker, title, url } = textsTab()
    const { asBackgroundImage, image } = imageTab()
    const { category, date, dateFormat } = metaTab()
    const { cta, ctaIcon } = ctaTab()
    const { reversed } = displayTab()
    const type = select(
      'Type',
      mediaBlocksTypes,
      MediaBlock.defaultProps.type,
      'Type'
    )

    return (
      <MediaBlock
        asBackgroundImage={asBackgroundImage}
        category={category}
        cta={cta}
        ctaIcon={ctaIcon}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        reversed={reversed}
        title={title}
        type={type}
        url={url}
      />
    )
  })

  .addWithJSX('Inline', () => {
    const { description, kicker, title, url } = textsTab()
    const { asBackgroundImage, image } = imageTab()
    const { category, date, dateFormat } = metaTab()
    const { cta, ctaIcon } = ctaTab()
    const { border, reversed } = displayTab()

    return (
      <MediaBlock
        asBackgroundImage={asBackgroundImage}
        border={border}
        category={category}
        cta={cta}
        ctaIcon={ctaIcon}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        reversed={reversed}
        title={title}
        type="inline"
        url={url}
      />
    )
  })

  .addWithJSX('Inset', () => {
    const { description, kicker, title, url } = textsTab()
    const { asBackgroundImage, image } = imageTab()
    const { category, date, dateFormat } = metaTab()
    const { reversed } = displayTab()

    return (
      <MediaBlock
        asBackgroundImage={asBackgroundImage}
        category={category}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        reversed={reversed}
        title={title}
        type="inset"
        url={url}
      />
    )
  })

  .addWithJSX('Reversed', () => {
    const { description, kicker, title, url } = textsTab()
    const { asBackgroundImage, image } = imageTab()
    const { category, date, dateFormat } = metaTab()
    const { cta, ctaIcon } = ctaTab()
    const { border, reversed } = displayTab({ reversed: true })

    return (
      <MediaBlock
        asBackgroundImage={asBackgroundImage}
        border={border}
        category={category}
        cta={cta}
        ctaIcon={ctaIcon}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        reversed={reversed}
        title={title}
        url={url}
      />
    )
  })

  .addWithJSX('Stacked', () => {
    const { description, kicker, title, url } = textsTab()
    const { asBackgroundImage, image } = imageTab()
    const { category, date, dateFormat } = metaTab()
    const { cta, ctaIcon } = ctaTab()
    const { border, reversed } = displayTab()

    return (
      <MediaBlock
        asBackgroundImage={asBackgroundImage}
        border={border}
        category={category}
        cta={cta}
        ctaIcon={ctaIcon}
        date={date}
        dateFormat={dateFormat}
        description={description}
        image={image}
        kicker={kicker}
        reversed={reversed}
        title={title}
        type="stacked"
        url={url}
      />
    )
  })
