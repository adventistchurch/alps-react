import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text } from '@storybook/addon-knobs'

import PageHeaderLong from './PageHeaderLong'

import data from './PageHeaderLong.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...PageHeaderLong.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { kicker, title, subtitle, url, tab } = getTabData('Texts', settings)

  return {
    kicker: text('Kicker', kicker, tab),
    title: text('Title *', title, tab),
    subtitle: text('Subtitle', subtitle, tab),
    url: text('Url', url, tab),
  }
}

function backgroundTab(settings = {}) {
  const { background, tab } = getTabData('Background', settings)

  return {
    background: boolean('Show Background', settings.showBackground, tab)
      ? object('Background image', background, tab)
      : null,
  }
}

export function pageHeaderTab(settings = {}) {
  const tabProps = getTabData('Page Header', settings)

  return {
    ...textsTab(tabProps),
    ...backgroundTab(tabProps),
  }
}

storiesOf('organisms/sections/PageHeaderLong', module)
  .addWithJSX('Default', () => {
    const { kicker, title, url } = textsTab()
    const { background } = backgroundTab()

    return (
      <PageHeaderLong
        background={background}
        kicker={kicker}
        title={title}
        url={url}
      />
    )
  })

  .addWithJSX('With Image', () => {
    const { kicker, title, subtitle, url } = textsTab({ subtitle: '' })
    const { background } = backgroundTab({ showBackground: true })

    return (
      <PageHeaderLong
        background={background}
        kicker={kicker}
        title={title}
        subtitle={subtitle}
        url={url}
      />
    )
  })

  .addWithJSX('With Subtitle', () => {
    const { kicker, title, subtitle, url } = textsTab()
    const { background } = backgroundTab({ showBackground: true })

    return (
      <PageHeaderLong
        background={background}
        kicker={kicker}
        title={title}
        subtitle={subtitle}
        url={url}
      />
    )
  })
