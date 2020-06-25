import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import Aside from './Aside'
import BlockWrap from './BlockWrap'

import data from './Aside.stories.json'

function getTabData(name, settings = {}) {
  const { parentTab, ...others } = settings

  return {
    tab: `${parentTab ? `${parentTab}: ` : ''}${name}`,
    ...Aside.defaultProps,
    ...data,
    ...others,
  }
}

function mediaBlocksTab(settings = {}) {
  const { media, tab } = getTabData('Media Blocks', settings)

  return {
    title: text('Title', media.title, tab),
    linkLabel: text('Link label', media.linkLabel, tab),
    linkUrl: text('Link URL', media.linkUrl, tab),
    items: object('Items', media.items, tab),
  }
}

function commentsBlocksTab(settings = {}) {
  const { comments, tab } = getTabData('Comment Blocks', settings)

  return {
    title: text('Title', comments.title, tab),
    linkLabel: text('Link label', comments.linkLabel, tab),
    linkUrl: text('Link URL', comments.linkUrl, tab),
    items: object('Items', comments.items, tab),
  }
}

export function asideTab(settings = {}) {
  const defaultSettings = { parentTab: 'Aside' }
  const mediaProps = mediaBlocksTab({ ...defaultSettings, ...settings })
  const commentsProps = commentsBlocksTab({ ...defaultSettings, ...settings })

  return {
    children: (
      <>
        <BlockWrap type="mediaBlock" {...mediaProps} />
        <BlockWrap type="contentBlock" {...commentsProps} />
      </>
    ),
  }
}

storiesOf('organisms/asides/Aside', module).addWithJSX('Default', () => {
  const props = asideTab({ parentTab: '' })

  return <Aside {...props} />
})
