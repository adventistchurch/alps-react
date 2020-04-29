import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import Comments from './Comments'
import data from './Comments.stories.json'
import Comment from './Comment'
import { commentTab } from './Comment.stories.js'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Comments.defaultProps,
    ...data,
    ...settings,
  }
}

export function commentsTab(settings = {}) {
  const { heading, tab } = getTabData('Comments', settings)

  return {
    heading: text('Heading', heading, tab),
    content: [...Array(number('Items to show', 5, {}, tab)).keys()].map(i => (
      <Comment {...commentTab()} key={`comment-${i}`} />
    )),
  }
}

storiesOf('molecules/components/Comments', module)
  .addWithJSX('Default', () => {
    const props = commentsTab()

    return <Comments {...props} />
  })
  .addWithJSX('Start expnded', () => {
    const props = commentsTab()

    return <Comments {...props} expanded />
  })
