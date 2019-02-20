import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'

import CommentForm from './CommentForm'

import data from './CommentForm.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/CommentForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Form Title *', data.title, propsTab)
    const submitLabel = text('Submit Label', data.submitLabel, propsTab)
    const numberOfRows = number(
      'Number of Rows',
      data.numberOfRows,
      {},
      propsTab
    )
    return (
      <CommentForm
        rows={numberOfRows}
        submitLabel={submitLabel}
        title={title}
      />
    )
  })
