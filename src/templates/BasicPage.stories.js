import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import BasicPage from './BasicPage'

import Text from '../atoms/texts/Text'

// Stories and data
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

function pageHeaderTab(settings = {}) {
  const { title, url, kicker, tab } = getTabData('Page Header', settings)
  return headerTab({ title, url, kicker, tab })
}

function pageBreadcrumbsTab(settings = {}) {
  const { breadcrumbs, tab } = getTabData('Page Header', settings)
  return breadcrumbsTab({ items: breadcrumbs, tab })
}

function contentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  return {
    title1: text('Content Title 1', content.title1, tab),
    text1: text('Content Text 1', content.text1, tab),
    title2: text('Content Title 2', content.title2, tab),
    text2: text('Content Text 2', content.text2, tab),
    title3: text('Content Title 3', content.title3, tab),
    text3: text('Content Text 3', content.text3, tab),
  }
}

function globalTab(settings = {}) {
  const { globalHeader, globalFooter, tab } = getTabData('Global', settings)

  return {
    header: globalHeaderTab({ ...globalHeader, tab }),
    footer: globalFooterTab({ ...globalFooter, tab }),
  }
}

function sidebarTab(settings = {}) {
  const { aside, tab } = getTabData('Sidebar', settings)

  return {
    showSidebar: boolean('Show Sidebar', true, tab),
    breakout: object('Breakout', breakoutData, tab),
    aside: asideTab({ aside, tab }),
  }
}

storiesOf('templates/BasicPage', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { title, kicker, background } = pageHeaderTab()
    const { items: breadcrumbs } = pageBreadcrumbsTab()
    const { title1, title2, title3, text1, text2, text3 } = contentTab()
    const { showSidebar, breakout, aside } = sidebarTab()
    const templateProps = globalTab()

    // Note: This is just a simple demo content.
    // The `content` prop should be provided to BasicPage with actual React components
    const content = (
      <>
        <Text hasDropcap spacing>
          <h1>{title1}</h1>
          <p>
            <strong>
              <span>
                <a href="#link">Lorem</a>
              </span>{' '}
              Ipsum
            </strong>
            Text 3{text1}
            {text2}
          </p>
        </Text>
        <Text hasDropcap spacing>
          <h2>{title2}</h2>
          <p>
            <a href="#link">This is a link</a> and here is the rest of text.{' '}
            {text2}
          </p>
          <h3>{title3}</h3>
          <p>{text2}</p>
        </Text>
        <Text hasDropcap spacing>
          <h3>{title3}</h3>
          <p>
            <strong>Aperiam veritatis dolore.</strong>{' '}
            <a href="#link">Mollitia repudiandae ipsa</a> {text3}
          </p>
          <h3>{title2}</h3>
        </Text>
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
