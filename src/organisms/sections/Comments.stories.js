import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import Comments from './Comments'

import data from './Comments.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Comments.defaultProps,
    ...data,
    ...settings,
  }
}
function textsTab(settings = {}) {
  const { title, tab } = getTabData('Background', settings)

  return {
    title: text('Title', title, tab),
  }
}

function itemsTab(settings = {}) {
  const { items, tab } = getTabData('Comments', settings)

  return {
    items: object('Items', items, tab),
  }
}

export function commentsTab(settings = {}) {
  const tabProps = getTabData('Comments', settings)

  return {
    ...textsTab(tabProps),
    ...itemsTab(tabProps),
  }
}

storiesOf('organisms/sections/Comments', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { title } = textsTab()
    const { items } = itemsTab()

    return <Comments title={title} items={items} />
  })
