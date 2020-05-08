import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, date as datePicker } from '@storybook/addon-knobs'

import News from './News'

// Stories and data
import { pictureTab } from '../atoms/images/Picture.stories.js'
import { globalTab } from './TemplateWrap.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import data from './News.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...News.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderTab }

export function latestTab(settings = {}) {
  const { latest, tab } = getTabData('Latest', settings)
  const { title, titlePrefix, image, category, date, url } = latest

  return {
    title: text('Title', title, tab),
    prefix: text('Title prefix', titlePrefix, tab),
    url: text('Url', url, tab),
    category: text('Category', category, tab),
    date: datePicker('Date', new Date(date), tab),
    ...pictureTab({ ...image, tab }),
  }
}

export function featuredTab(settings = {}) {
  const { featured, tab } = getTabData('Featured', settings)
  const { title, linkLabel, linkUrl, items } = featured || {}

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    items: object('Items', items, tab),
  }
}

export function mediaTab(settings = {}) {
  const { media, hidePrimaryMedia, hideSecondaryMedia, tab } = getTabData(
    'Media Content',
    settings
  )
  const { title, linkLabel, linkUrl, primaryItems, secondaryItems } = media

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    primaryItems: hidePrimaryMedia
      ? null
      : object('Primary Items', primaryItems, tab),
    secondaryItems: hideSecondaryMedia
      ? null
      : object('Secondary Items', secondaryItems, tab),
  }
}

export function archiveTab(settings = {}) {
  const { archive, tab } = getTabData('Archive', settings)
  const { title, linkLabel, linkUrl, items } = archive

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    items: object('Items', items, tab),
  }
}

export function newsTabs(settings = {}) {
  const { pageHeader, aside } = getTabData(null, settings)

  return {
    pageHeader: pageHeaderTab(pageHeader),
    latest: latestTab(settings),
    featured: featuredTab(settings),
    aside: aside ? asideTab(settings) : null,
    media: mediaTab(settings),
    archive: archiveTab(settings),
    ...globalTab(settings),
  }
}

storiesOf('templates/News', module)
  .addWithJSX('Default', () => {
    const props = newsTabs()

    return <News {...props} />
  })
  .addWithJSX('No Aside', () => {
    const props = newsTabs({ aside: null })

    return <News {...props} />
  })
  .addWithJSX('No primary media', () => {
    const props = newsTabs({ hidePrimaryMedia: true })

    return <News {...props} />
  })
  .addWithJSX('No secondary media', () => {
    const props = newsTabs({ hideSecondaryMedia: true })

    return <News {...props} />
  })
