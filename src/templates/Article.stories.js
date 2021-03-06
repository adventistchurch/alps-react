import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  date as datepicker,
  object,
  select,
  text,
} from '@storybook/addon-knobs'

import Article, { headerTypes } from './Article'

import Text from '../atoms/texts/Text'
import { Paragraph } from '../helpers/Element'

// Stories and data
import { useGlobalTab } from './TemplateWrap.stories.js'
import { pictureTab } from '../atoms/images/Picture.stories.js'
import data from './Article.stories.json'

/* Note: This is just a simple demo content. */
function DemoContent({ title = '', text = '' }) {
  const paragraphs = text.split('\n')
  return paragraphs.map((pText, k) => (
    <Text key={k} hasDropcap={k === 0} spacing>
      <h2>{title}</h2>
      <Paragraph>{pText}</Paragraph>
    </Text>
  ))
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Article.defaultProps,
    ...data,
    ...settings,
  }
}

export function articleHeaderTab(settings = {}) {
  const {
    title,
    description,
    category,
    kicker,
    date,
    headerType,
    tab,
  } = getTabData('Header', settings)

  return {
    headerType: select('Type ', headerTypes, headerType, tab),
    title: text('Title ', title, tab),
    kicker: text('Kicker ', kicker, tab),
    description: text('Description ', description, tab),
    date: datepicker('Date ', new Date(date), tab),
    category: text('Category', category, tab),
  }
}

function imageTab(settings = {}) {
  const { asBackgroundImage, image, tab } = getTabData('Image', settings)
  const showImage = boolean('Show Image', true, tab)

  return {
    asBackgroundImage: boolean('As Background Image', asBackgroundImage, tab),
    ...(showImage ? pictureTab({ ...image, tab }) : {}),
  }
}

export function contentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  return {
    title: text('Content Title ', content.title, tab),
    text: text('Content Text', content.text, tab),
  }
}

export function relatedTab(settings = {}) {
  const { relatedTitle, relatedPosts, showRelated, tab } = getTabData(
    'Related',
    settings
  )

  return boolean('Show Related', showRelated, tab)
    ? {
        relatedTitle: text('Title', relatedTitle, tab),
        relatedPosts: object('Posts', relatedPosts, tab),
      }
    : null
}

export function useArticleTabs(settings = {}) {
  const related = relatedTab(settings)

  return {
    ...articleHeaderTab(settings),
    ...imageTab(settings),
    ...related,
    content: contentTab(settings),
    ...useGlobalTab(settings),
  }
}

storiesOf('templates/Article', module)
  .addWithJSX('Default', () => {
    const { content, ...props } = useArticleTabs()

    return (
      <Article {...props}>
        <DemoContent {...content} />
      </Article>
    )
  })
  .addWithJSX('With related', () => {
    const { content, ...props } = useArticleTabs({ showRelated: true })

    return (
      <Article {...props}>
        <DemoContent {...content} />
      </Article>
    )
  })
