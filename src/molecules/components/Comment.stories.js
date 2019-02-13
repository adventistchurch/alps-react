import React from 'react'
import { storiesOf } from '@storybook/react'
import { date, object, select, text, withKnobs } from '@storybook/addon-knobs'

import Comment from './Comment'

const propsTab = 'Props'
const optionalPropsTab = 'Optional'
const defaults = {
  avatarSrcSet: {
    default: '//picsum.photos/100/100',
    500: '//picsum.photos/200/200',
    750: '//picsum.photos/300/300',
    1200: '//picsum.photos/500/500',
  },
  avatarAlt: 'Placeholder image',
  datetime: new Date(),
  byline: 'Bob Smith',
  comment:
    'Vivamus sollicitudin ipsum vel rutrum facilisis. Vestibulum eu cursus massa. Donec faucibus velit eu enim dapibus, sed scelerisque nibh finibus. Praesent imperdiet, leo ut ullamcorper facilisis, felis neque vestibulum mi, in vehicula turpis libero vestibulum eros. Nunc ac lectus id dui eleifend dignissim.',
}

const dateFormats = ['date', 'time', 'datetime']

storiesOf('molecules/components/Comment', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const byline = text('Byline', defaults.byline, propsTab)
    const comment = text('Comment', defaults.comment, propsTab)
    const datetime = date('Date Time', defaults.datetime, propsTab)
    const dateFormat = select('Date Format', dateFormats, 'datetime', propsTab)
    const avatarSrcSet = object(
      'Avatar SrcSet',
      defaults.avatarSrcSet,
      propsTab
    )
    const avatarAlt = text('Avatar Alt', defaults.avatarAlt, propsTab)
    const editUrl = text('Edit URL', '', optionalPropsTab)
    const replyUrl = text('Reply URL', '', optionalPropsTab)
    return (
      <Comment
        avatarSrcSet={avatarSrcSet}
        avatarAlt={avatarAlt}
        datetime={datetime}
        dateFormat={dateFormat}
        byline={byline}
        text={comment}
        editUrl={editUrl}
        replyUrl={replyUrl}
      />
    )
  })
