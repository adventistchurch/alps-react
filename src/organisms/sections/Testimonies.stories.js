import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import Testimonies from './Testimonies'

import data from './Testimonies.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Testimonies.defaultProps,
    ...data,
    ...settings,
  }
}

export function testimoniesTab(settings = {}) {
  const {
    items,
    linkText,
    linkUrl,
    title,
    shareText,
    shareUrl,
    tab,
  } = getTabData('Props', settings)

  return {
    title: text('title', title, tab),
    linkText: text('Link Text', linkText, tab),
    linkUrl: text('Link Url', linkUrl, tab),
    shareText: text('Share Text', shareText, tab),
    shareUrl: text('Share Url', shareUrl, tab),
    items: object('Items', items, tab),
  }
}

storiesOf('organisms/sections/Testimonies', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const {
      items,
      linkText,
      linkUrl,
      title,
      shareText,
      shareUrl,
    } = testimoniesTab()

    return (
      <Testimonies
        items={items}
        linkText={linkText}
        linkUrl={linkUrl}
        title={title}
        shareText={shareText}
        shareUrl={shareUrl}
      />
    )
  })
