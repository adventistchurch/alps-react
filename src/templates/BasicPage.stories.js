import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text } from '@storybook/addon-knobs'

import BasicPage from './BasicPage'

import Text from '../atoms/texts/Text'
import { Link, Paragraph } from '../helpers/Element'

// Stories and data
import breakoutData from '../molecules/blocks/BreakoutBlock.stories.json'
import { breadcrumbsTab } from '../molecules/navigation/Breadcrumbs.stories.js'
import { asideTab } from '../organisms/asides/Aside.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeaderLong.stories.js'
import { useGlobalTab } from './TemplateWrap.stories.js'
import data from './BasicPage.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...BasicPage.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderTab }

export function pageBreadcrumbsTab(settings = {}) {
  const { breadcrumbs, tab } = getTabData('Breadcrumbs', settings)
  return breadcrumbsTab({ breadcrumbs, tab })
}

export function contentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  const { title1, title2, title3, text1, text2, text3 } = content || {}

  return {
    title1: text('Content Title 1', title1, tab),
    text1: text('Content Text 1', text1, tab),
    title2: text('Content Title 2', title2, tab),
    text2: text('Content Text 2', text2, tab),
    title3: text('Content Title 3', title3, tab),
    text3: text('Content Text 3', text3, tab),
  }
}

export function sidebarTab(settings = {}) {
  const { aside, tab } = getTabData('Sidebar', settings)

  const showSidebar = boolean('Show Sidebar', true, tab)

  return showSidebar
    ? {
        breakout: object('Breakout', breakoutData, tab),
        aside: asideTab({ aside, tab }),
      }
    : null
}

export function useBasicPageTabs(settings = {}) {
  return {
    pageHeader: pageHeaderTab(settings),
    ...pageBreadcrumbsTab(settings),
    ...sidebarTab(settings),
    content: contentTab(settings),
    ...useGlobalTab(settings),
  }
}

storiesOf('templates/BasicPage', module).addWithJSX('Default', () => {
  const { content, ...rest } = useBasicPageTabs()
  const { title1, title2, title3, text1, text2, text3 } = content

  // Note: This is just a simple demo content.
  // The `content` prop should be provided to BasicPage with actual React components
  const demoContent = (
    <>
      <Text hasDropcap spacing>
        <h1>{title1}</h1>
        {/* Tests how hasDropcap behaves with empty spaces and inline/nested tag elements */}
        <Paragraph>
          <strong>
            {'  '}
            <em>
              <span>
                <Link href="#link">Lorem</Link>
              </span>{' '}
            </em>
            Ipsum
          </strong>
          . {text1}. <Link href="#link">This is a link</Link>, and here is the
          rest of text.
        </Paragraph>
      </Text>
      <Text spacing>
        <h2>{title2}</h2>
        <Paragraph>
          {text2} <Link href="#link">This is a link</Link>, and here is the rest
          of text.
        </Paragraph>
        <h3>{title3}</h3>
        <p>{text2}</p>
      </Text>
      <Text spacing>
        <h3>{title3}</h3>
        <Paragraph>
          <strong>Aperiam veritatis dolore.</strong>{' '}
          <Link href="#link">Mollitia repudiandae ipsa</Link> {text3}
        </Paragraph>
        <h3>{title2}</h3>
      </Text>
    </>
  )

  return <BasicPage content={demoContent} {...rest} />
})
