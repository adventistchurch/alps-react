import React from 'react'
import { storiesOf } from '@storybook/react'
import { text} from '@storybook/addon-knobs'

import Blockquote from './Blockquote'

import data from './Blockquote.stories.json'

const propsTab = 'Props'

storiesOf('atoms/texts/Blockquote', module)
  

  .addWithJSX('Default', () => {
    const blockquoteText = text('Text *', data.text, propsTab)
    return <Blockquote text={blockquoteText} />
  })

  .addWithJSX('As Children', () => {
    const blockquoteText = text('Text *', data.text, propsTab)
    return <Blockquote>{blockquoteText}</Blockquote>
  })
