import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import BasicPage from './BasicPage'

import breakoutData from '../molecules/blocks/BreakoutBlock.stories.json'
import { breadcrumbsTab } from '../molecules/navigation/Breadcrumbs.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { headerTab as globalHeaderTab } from '../organisms/global/Header.stories.js'
import { footerTab as globalFooterTab } from '../organisms/global/Footer.stories.js'
import { pageHeaderTab as headerTab } from '../organisms/sections/PageHeader.stories.js'
import data from './BasicPage.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...BasicPage.defaultProps,
    ...data,
    ...settings,
  }
}

function sidebarTab(settings = {}) {
  const { aside, tab } = getTabData('Sidebar', settings)

  return {
    showSidebar: boolean('Show Sidebar', true, tab),
    breakout: object('Breakout', breakoutData, tab),
    ...asideTab({ aside, tab }),
  }
}

function contentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  return {
    contentTitle: text('Content Title', content.title, tab),
    contentText: text('Content Text', content.text, tab),
  }
}

function pageHeaderTab(settings = {}) {
  const { title, url, kicker, tab } = getTabData('Page Header', settings)
  return headerTab({ title, url, kicker, tab })
}

function pageBreadcrumbsTab(settings = {}) {
  const { breadcrumbs, tab } = getTabData('Page Header', settings)
  return breadcrumbsTab({ items: breadcrumbs, tab })
}

function globalTab(settings = {}) {
  const { globalHeader, globalFooter, tab } = getTabData('Global', settings)

  return {
    header: globalHeaderTab({ ...globalHeader, tab }),
    footer: globalFooterTab({ ...globalFooter, tab }),
  }
}

storiesOf('templates/BasicPage', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { title, kicker, background } = pageHeaderTab()
    const { items: breadcrumbs } = pageBreadcrumbsTab()
    const { contentTitle, contentText } = contentTab()
    const { showSidebar, breakout, aside } = sidebarTab()
    const templateProps = globalTab()

    const content = (
      <>
        <h2>{contentTitle}</h2>
        <p>{contentText}</p>
      </>
    )

    return (
      <BasicPage
        aside={showSidebar ? aside : null}
        background={background}
        breadcrumbs={breadcrumbs}
        breakout={showSidebar ? breakout : null}
        content={content}
        kicker={kicker}
        title={title}
        {...templateProps}
      />
    )
  })
