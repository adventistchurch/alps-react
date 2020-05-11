import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  date as datepicker,
  object,
  text,
} from '@storybook/addon-knobs'

import ArticleVideo from './ArticleVideo'

import Text from '../atoms/texts/Text'
import { videoFigureWithCaptionTab } from '../molecules/media/VideoFigureWithCaption.stories.js'
import { Paragraph } from '../helpers/Element'

// Stories and data
import { globalTab } from './TemplateWrap.stories.js'
import data from './ArticleVideo.stories.json'

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
    ...ArticleVideo.defaultProps,
    ...data,
    ...settings,
  }
}

export function articleHeaderTab(settings = {}) {
  const { title, description, category, kicker, date, tab } = getTabData(
    'Header',
    settings
  )

  return {
    title: text('Title ', title, tab),
    kicker: text('Kicker ', kicker, tab),
    description: text('Description ', description, tab),
    date: datepicker('Date ', new Date(date), tab),
    category: text('Category', category, tab),
  }
}

export function videoTab(settings = {}) {
  const { duration, tab } = getTabData('Video', settings)
  const { videoSrc, caption } = videoFigureWithCaptionTab(settings)

  return {
    src: text('Source ', videoSrc, tab),
    caption: text('Caption', caption, tab),
    duration: text('Duration', duration, tab),
  }
}

export function contentTab(settings = {}) {
  const { content, tab } = getTabData('Content', settings)
  return {
    title: text('Content Title ', content.title, tab),
    text: text('Content Text', content.text, tab),
  }
}
export function segmentsTab(settings = {}) {
  const { segmentsTitle, segments, showSegments, tab } = getTabData(
    'Segments',
    settings
  )

  return boolean('Show segments', showSegments, tab)
    ? {
        segmentsTitle: text('Title', segmentsTitle, tab),
        segments: object('Segments', segments, tab),
      }
    : null
}

export function articleTabs(settings = {}) {
  return {
    ...articleHeaderTab(settings),
    ...videoTab(settings),
    ...segmentsTab(settings),
    content: contentTab(settings),
    ...globalTab(settings),
  }
}

storiesOf('templates/ArticleVideo', module)
  .addWithJSX('Default', () => {
    const { content, ...props } = articleTabs()

    return (
      <ArticleVideo {...props}>
        <DemoContent {...content} />
      </ArticleVideo>
    )
  })
  .addWithJSX('With segments', () => {
    const { content, ...props } = articleTabs({ showSegments: true })

    return (
      <ArticleVideo {...props}>
        <DemoContent {...content} />
      </ArticleVideo>
    )
  })
