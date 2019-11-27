import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import RelatedPosts from './RelatedPosts'
import data from './RelatedPosts.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...RelatedPosts.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { heading, linkText, url, tab } = getTabData('Texts', settings)

  return {
    heading: text('Heading', heading, tab),
    linkText: text('LinkText', linkText, tab),
    url: text('Url', url, tab),
  }
}

function blocksTab(settings = {}) {
  const { blocks, tab } = getTabData('Related blocks', settings)

  return {
    blocks: object('Blocks *', blocks, tab),
  }
}

export function relatedPostsTab(settings = {}) {
  const tabData = getTabData('Related Posts', settings)

  return {
    ...textsTab(tabData),
    ...blocksTab(tabData),
  }
}

storiesOf('organisms/asides/RelatedPosts', module).addWithJSX('Default', () => {
  const { heading, linkText, url } = textsTab()
  const { blocks } = blocksTab()

  return (
    <RelatedPosts
      blocks={blocks}
      heading={heading}
      linkText={linkText}
      url={url}
    />
  )
})
