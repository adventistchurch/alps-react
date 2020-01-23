import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, date as datePicker } from '@storybook/addon-knobs'

import News from './News'

// Stories and data
import { pictureTab } from '../atoms/images/Picture.stories.js'
import { headerTab as globalHeaderTab } from '../organisms/global/Header.stories.js'
import { footerTab as globalFooterTab } from '../organisms/global/Footer.stories.js'
import { sabbathTab as globalSabbathTab } from '../organisms/asides/Sabbath.stories.js'
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

export function breakingTab(settings = {}) {
  const { breaking, tab } = getTabData('Breaking', settings)
  const { title, image, category, date, url } = breaking

  return {
    title: text('Title', title, tab),
    url: text('Url', url, tab),
    category: text('Category', category, tab),
    date: datePicker('Date', new Date(date), tab),
    ...pictureTab({ ...image, tab }),
  }
}

export function featuredTab(settings = {}) {
  const { featured, tab } = getTabData('Featured', settings)
  const { title, linkLabel, linkUrl, items } = featured

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    items: object('Items', items, tab),
  }
}

export function asideTab(settings = {}) {
  const { aside, tab } = getTabData('Aside', settings)
  const { title, linkLabel, linkUrl, items } = aside

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    items: object('Items', items, tab),
  }
}

export function mediaContentTab(settings = {}) {
  const { mediaContent, tab } = getTabData('Media Content', settings)
  const { title, linkLabel, linkUrl, items } = mediaContent

  return {
    title: text('Title', title, tab),
    linkLabel: text('Link Label', linkLabel, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    items: object('Items', items, tab),
  }
}

export function mediaRowsTab(settings = {}) {
  const { mediaRows, tab } = getTabData('Media Rows', settings)

  return object('Items', mediaRows, tab)
}

export function globalTab(settings = {}) {
  const { globalHeader, globalFooter, globalSabbath, tab } = getTabData(
    'Global',
    settings
  )

  return {
    header: globalHeaderTab({ ...globalHeader, tab }),
    footer: globalFooterTab({ ...globalFooter, tab }),
    sabbath: globalSabbathTab({ ...globalSabbath, tab }),
  }
}

export function newsTabs(settings = {}) {
  const { pageHeader } = getTabData(null, settings)

  return {
    pageHeader: pageHeaderTab(pageHeader),
    breaking: breakingTab(settings),
    featured: featuredTab(settings),
    aside: asideTab(settings),
    mediaContent: mediaContentTab(settings),
    mediaRows: mediaRowsTab(settings),
    global: globalTab(settings),
  }
}

storiesOf('templates/News', module).addWithJSX('Default', () => {
  const props = newsTabs()

  return <News {...props} />
})
