import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import ExtendedQuote from './ExtendedQuote'

import data from './ExtendedQuote.stories.json'

const propsTab = 'Props'

storiesOf('molecules/text/ExtendedQuote', module)
  

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, propsTab)
    const minutes = number('Minutes', data.minutes, {}, propsTab)
    const quote = text('Quote', data.quote, propsTab)
    const author = text('Author', data.author, propsTab)
    return (
      <ExtendedQuote>
        <h2>{title}</h2>
        <small>Reading time: {minutes} minutes</small>
        <br />
        <p>{quote}</p>
        <br />
        <em>- {author}</em>
      </ExtendedQuote>
    )
  })
