import React from 'react'
import { storiesOf } from '@storybook/react'
import { date, object, select, text, withKnobs } from '@storybook/addon-knobs'

import Comment from './Comment'

import data from './Comment.stories.json'

const propsTab = 'Props'
const imageTab = 'Image'

const dateFormats = ['date', 'time', 'datetime']

storiesOf('molecules/components/Comment', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const byline = text('Byline *', data.byline, propsTab)
    const comment = text('Comment *', data.comment, propsTab)
    const datetime = date('Date Time *', new Date(), propsTab)
    const dateFormat = select('Date Format', dateFormats, 'datetime', propsTab)
    const editUrl = text('Edit URL', '', propsTab)
    const replyUrl = text('Reply URL', '', propsTab)
    const avatarSrcSet = object('Avatar SrcSet', data.avatarSrcSet, imageTab)
    const avatarAlt = text('Avatar Alt', data.avatarAlt, imageTab)

    const avatar = {
      alt: avatarSrcSet,
      srcSet: avatarAlt,
    }

    return (
      <Comment
        avatar={avatar}
        datetime={datetime}
        dateFormat={dateFormat}
        byline={byline}
        text={comment}
        editUrl={editUrl}
        replyUrl={replyUrl}
      />
    )
  })

  .addWithJSX('As Children', () => {
    const byline = text('Byline *', data.byline, propsTab)
    const comment = text('Comment *', data.comment, propsTab)
    const datetime = date('Date Time *', new Date(), propsTab)
    const dateFormat = select('Date Format', dateFormats, 'datetime', propsTab)
    const editUrl = text('Edit URL', '', propsTab)
    const replyUrl = text('Reply URL', '', propsTab)
    const avatarSrcSet = object('Avatar SrcSet', data.avatarSrcSet, imageTab)
    const avatarAlt = text('Avatar Alt', data.avatarAlt, imageTab)

    const avatar = {
      alt: avatarSrcSet,
      srcSet: avatarAlt,
    }

    return (
      <Comment
        avatar={avatar}
        datetime={datetime}
        dateFormat={dateFormat}
        byline={byline}
        editUrl={editUrl}
        replyUrl={replyUrl}
      >
        {comment}
      </Comment>
    )
  })
