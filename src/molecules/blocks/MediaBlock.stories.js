import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, date as datetime, select, text } from '@storybook/addon-knobs'

import { iconNames } from '../../atoms/icons/Icon'
import { dateFormats, dateStyles } from '../../helpers/DateTimeFormat'

import MediaBlock, { mediaBlocksTypes } from './MediaBlock'

import data from './MediaBlock.stories.json'
import { pictureTab } from '../../atoms/images/Picture.stories.js'

function getTabData(tab, settings = {}) {
  return {
    tab,
    ...MediaBlock.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { description, kicker, title, titlePrefix, titleAs, tab } = getTabData(
    'Texts',
    settings
  )

  return {
    title: text('Title', title, tab),
    titleAs: select('Title tag', ['h1', 'h2', 'h3', 'h4'], titleAs, tab),
    titlePrefix: text('Title prefix', titlePrefix, tab),
    description: text('Description', description, tab),
    kicker: text('Kicker', kicker, tab),
    kickerAs: select('Kicker tag', ['h1', 'h2', 'h3', 'h4'], titleAs, tab),
  }
}

function metaTab(settings = {}) {
  const { category, date, dateFormat, dateStyle, url, tab } = getTabData(
    'Meta',
    settings
  )

  return {
    category: text('Category', category, tab),
    date: datetime('Date Time', new Date(date), tab),
    dateFormat: select('Date Format', dateFormats, dateFormat, tab),
    dateStyle: {
      date: select('Date Style', dateStyles, dateStyle.date, tab),
      time: select('Time Style', dateStyles, dateStyle.time, tab),
    },
    url: text('URL', url, tab),
  }
}

function imageTab(settings = {}) {
  const { asBackgroundImage, image, imageCaption, tab } = getTabData(
    'Image',
    settings
  )
  const showImage = boolean('Show Image', true, tab)

  return {
    asBackgroundImage: boolean('As Background Image', asBackgroundImage, tab),
    imageCaption: text('Caption', imageCaption, tab),
    ...(showImage ? pictureTab({ ...image, tab }) : {}),
  }
}

function displayTab(settings = {}) {
  const { reversed, titleSize, type, tab } = getTabData('Display', settings)

  return {
    type: select('Type', mediaBlocksTypes, type, tab),
    titleSize: select('Title size', ['m', 'l', 'xl'], titleSize, tab),
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

function allTabs(settings = {}) {
  return {
    ...textsTab(settings),
    ...metaTab(settings),
    ...imageTab(settings),
    ...ctaTab(settings),
    ...displayTab(settings),
  }
}

export function mediaBlockTab(settings = {}) {
  const mediaBlock = getTabData('MediaBlock', settings)

  return allTabs(mediaBlock)
}

storiesOf('molecules/blocks/MediaBlock', module)
  .addWithJSX('Default', () => {
    const props = allTabs()
    return <MediaBlock {...props} />
  })

  .addWithJSX('Inline', () => {
    const props = allTabs()
    return <MediaBlock {...props} type="inline" />
  })

  .addWithJSX('Feature', () => {
    const props = allTabs()
    return <MediaBlock {...props} type="feature" />
  })

  .addWithJSX('Inset', () => {
    const props = allTabs()
    return <MediaBlock {...props} type="inset" />
  })

  .addWithJSX('Stacked', () => {
    const props = allTabs()
    return <MediaBlock {...props} type="stacked" />
  })

  .addWithJSX('with image caption', () => {
    const props = allTabs({
      imageCaption: '@2020 Photographer Name',
      type: 'row',
    })
    return <MediaBlock {...props} />
  })
