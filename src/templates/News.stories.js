import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, date as datePicker } from '@storybook/addon-knobs'

import News from './News'

// Stories and data
import { pictureTab } from '../atoms/images/Picture.stories.js'
import { useGlobalTab } from './TemplateWrap.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import { paginationTab } from '../molecules/navigation/Pagination.stories.js'
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

export function featuredTab(settings = {}) {
  const { latest, tab } = getTabData('Featured', settings)
  const { title, titlePrefix, image, category, date, url } = latest

  return {
    titlePrefix: text('Title prefix', titlePrefix, tab),
    title: text('Title', title, tab),
    url: text('Url', url, tab),
    category: text('Category', category, tab),
    date: datePicker('Date', new Date(date), tab),
    ...pictureTab({ ...image, tab }),
  }
}

export function latestTab(settings = {}) {
  const { featured, tab } = getTabData('Latest news', settings)
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

export function useNewsTabs(settings = {}) {
  const { pageHeader, pagination, aside, withPagination } = getTabData(
    null,
    settings
  )

  return {
    pageHeader: pageHeader ? pageHeaderTab(pageHeader) : null,
    featured: featuredTab(settings),
    latest: latestTab(settings),
    aside: aside ? asideTab(aside) : null,
    media: mediaTab(settings),
    archive: archiveTab(settings),
    pagination: withPagination ? paginationTab(pagination) : undefined,
    ...useGlobalTab(settings),
  }
}

storiesOf('templates/News', module)
  .addWithJSX('Default', () => {
    const props = useNewsTabs()
    return <News {...props} />
  })
  .addWithJSX('No Header', () => {
    const props = useNewsTabs({ pageHeader: null })
    return <News {...props} />
  })
  .addWithJSX('No Aside', () => {
    const props = useNewsTabs({ aside: null })
    return <News {...props} />
  })
  .addWithJSX('No primary media', () => {
    const props = useNewsTabs({ hidePrimaryMedia: true })
    return <News {...props} />
  })
  .addWithJSX('No secondary media', () => {
    const props = useNewsTabs({ hideSecondaryMedia: true })
    return <News {...props} />
  })
  .addWithJSX('with pagination', () => {
    const props = useNewsTabs({ withPagination: true })
    return <News {...props} />
  })
