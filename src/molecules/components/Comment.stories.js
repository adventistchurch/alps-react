import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  date as datePicker,
  object,
  select,
  text,
  withKnobs,
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
  const { byline, comment, date, dateFormat, tab } = getTabData(
    'Data',
    settings
  )

  return {
    byline: text('Byline *', byline, tab),
    comment: text('Comment *', comment, tab),
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

  return {
    alt: text('Avatar Alt', avatar.alt, tab),
    srcSet: object('Avatar SrcSet', avatar.srcSet, tab),
  }
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
    ...avatarTab(props),
    ...linksTab(props),
  }
}

storiesOf('molecules/components/Comment', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { byline, comment, date, dateFormat } = dataTab()
    const avatar = avatarTab()
    const { editUrl, replyUrl } = linksTab()

    return (
      <Comment
        avatar={avatar}
        date={date}
        dateFormat={dateFormat}
        byline={byline}
        text={comment}
        editUrl={editUrl}
        replyUrl={replyUrl}
      />
    )
  })

  .addWithJSX('With links', () => {
    const { byline, comment, date, dateFormat } = dataTab()
    const avatar = avatarTab()
    const { editUrl, replyUrl } = linksTab({
      editUrl: '#edit',
      replyUrl: '#reply',
    })

    return (
      <Comment
        avatar={avatar}
        date={date}
        dateFormat={dateFormat}
        byline={byline}
        text={comment}
        editUrl={editUrl}
        replyUrl={replyUrl}
      />
    )
  })

  .addWithJSX('As Children', () => {
    const { byline, comment, date, dateFormat } = dataTab()
    const avatar = avatarTab()
    const { editUrl, replyUrl } = linksTab()

    return (
      <Comment
        avatar={avatar}
        date={date}
        dateFormat={dateFormat}
        byline={byline}
        editUrl={editUrl}
        replyUrl={replyUrl}
      >
        {comment}
      </Comment>
    )
  })
