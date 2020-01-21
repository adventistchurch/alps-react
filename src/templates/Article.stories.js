import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text } from '@storybook/addon-knobs'

import Article from './Article'

import Text from '../atoms/texts/Text'
import { Paragraph } from '../helpers/Element'

// Stories and data
import breakoutData from '../molecules/blocks/BreakoutBlock.stories.json'
import { breadcrumbsTab } from '../molecules/navigation/Breadcrumbs.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { headerTab as globalHeaderTab } from '../organisms/global/Header.stories.js'
import { footerTab as globalFooterTab } from '../organisms/global/Footer.stories.js'
import { sabbathTab as globalSabbathTab } from '../organisms/asides/Sabbath.stories.js'
import { pageHeaderFeatureTab } from '../organisms/sections/PageHeaderFeature.stories.js'
import data from './Article.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Article.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderFeatureTab }

export function pageHeaderTab(settings = {}) {
  const { pageHeader, tab } = getTabData('Breadcrumbs', settings)

  return pageHeaderFeatureTab({ ...pageHeader, tab })
}

export function pageBreadcrumbsTab(settings = {}) {
  const { breadcrumbs, tab } = getTabData('Breadcrumbs', settings)
  return breadcrumbsTab({ breadcrumbs, tab })
}

export function mainContentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  return {
    title: text('Content Title ', content.title, tab),
    text: text('Content Text', content.text, tab),
  }
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

export function sidebarTab(settings = {}) {
  const { aside, tab } = getTabData('Sidebar', settings)

  return {
    showSidebar: boolean('Show Sidebar', true, tab),
    breakout: object('Breakout', breakoutData, tab),
    aside: asideTab({ aside, tab }),
  }
}

export function articleTabs(settings = {}) {
  const props = getTabData('Article', settings)

  return {
    pageHeader: pageHeaderFeatureTab(props),
    breadcrumbs: pageBreadcrumbsTab(props),
    mainContent: mainContentTab(props),
    sidebar: sidebarTab(props),
    global: globalTab(props),
  }
}

storiesOf('templates/Article', module).addWithJSX('Default', () => {
  const pageHeader = pageHeaderTab()
  const { breadcrumbs } = pageBreadcrumbsTab()
  const { title, text } = mainContentTab()
  const { showSidebar, breakout, aside } = sidebarTab()
  const templateProps = globalTab()

  return (
    <Article
      aside={showSidebar ? aside : null}
      breadcrumbs={breadcrumbs}
      breakout={showSidebar ? breakout : null}
      pageHeader={pageHeader}
      {...templateProps}
    >
      {/* Note: This is just a simple demo content. */}
      <Text hasDropcap spacing>
        <h1>{title}</h1>
        <Paragraph>{text}</Paragraph>
      </Text>
      <Text spacing>
        <h2>{title}</h2>
        <Paragraph>{text}</Paragraph>
      </Text>
      <Text spacing>
        <h3>{title}</h3>
        <Paragraph>{text}</Paragraph>
      </Text>
    </Article>
  )
})
