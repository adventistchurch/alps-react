import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Pullquote from './Pullquote'

import data from './Pullquote.stories.json'

const propsTab = 'Props'

storiesOf('molecules/text/Pullquote', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const quote = text('Quote *', data.quote, propsTab)
    const author = text('Author', data.author, propsTab)
    return <Pullquote text={quote} author={author} />
  })

  .addWithJSX('As Children', () => {
    const quote = text('Quote *', data.quote, propsTab)
    const author = text('Author', data.author, propsTab)
    return <Pullquote author={author}>{quote}</Pullquote>
  })

  .addWithJSX('Without Author', () => {
    const quote = text('Quote *', data.quote, propsTab)
    return <Pullquote>{quote}</Pullquote>
  })
