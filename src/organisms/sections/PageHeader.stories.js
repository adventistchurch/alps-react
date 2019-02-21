import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import PageHeader from './PageHeader'

import data from './PageHeader.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...PageHeader.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { kicker, title, url, tab } = getTabData('Texts', settings)

  return {
    kicker: text('Kicker', kicker, tab),
    title: text('Title *', title, tab),
    url: text('Url', url, tab),
  }
}

function backgroundTab(settings = {}) {
  const { background, tab } = getTabData('Background', settings)

  return {
    background: boolean('Show Background', false, tab)
      ? object('Background image', background, tab)
      : null,
  }
}

export function pageHeaderTab(settings = {}) {
  const tabProps = getTabData('Header', settings)

  return {
    ...textsTab(tabProps),
    ...backgroundTab(tabProps),
  }
}

storiesOf('organisms/sections/PageHeader', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { kicker, title, url } = textsTab()
    const { background } = backgroundTab()

    return (
      <PageHeader
        background={background}
        kicker={kicker}
        title={title}
        url={url}
      />
    )
  })
