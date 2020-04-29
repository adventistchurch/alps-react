import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  date as datePicker,
  object,
  select,
  text,
} from '@storybook/addon-knobs'

import Comment from './Comment'
import { dateFormats } from '../../helpers/DateTimeFormat'
import data from './Comment.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Comment.defaultProps,
    ...data,
    ...settings,
  }
}

function dataTab(settings = {}) {
  const { byline, bylineLink, comment, date, dateFormat, tab } = getTabData(
    'Data',
    settings
  )

  return {
    byline: text('Byline *', byline, tab),
    bylineLink: text('Byline Link', bylineLink, tab),
    text: text('Comment *', comment, tab),
    date: datePicker('Date Time *', date || new Date(), tab),
    dateFormat: select(
      'Date Format',
      dateFormats,
      dateFormat || dateFormats[0],
      tab
    ),
  }
}

function avatarTab(settings = {}) {
  const { avatar, tab } = getTabData('Avatar', settings)

  return text('Avatar URL', avatar, tab)
}

function linksTab(settings = {}) {
  const { editUrl, replyUrl, tab } = getTabData('Links', settings)

  return {
    editUrl: text('Edit URL', editUrl, tab),
    replyUrl: text('Reply URL', replyUrl, tab),
  }
}

export function commentTab(settings = {}) {
  const props = getTabData('Comment', settings)

  return {
    ...dataTab(props),
    ...linksTab(props),
    avatar: avatarTab(props),
  }
}

storiesOf('molecules/components/Comment', module)
  .addWithJSX('Default', () => {
    const props = commentTab()

    return <Comment {...props} />
  })

  .addWithJSX('With links', () => {
    const props = commentTab({
      editUrl: '#edit',
      replyUrl: '#reply',
    })

    return <Comment {...props} />
  })

  .addWithJSX('As Children', () => {
    const { text, ...props } = commentTab()

    return <Comment {...props}>{text}</Comment>
  })
