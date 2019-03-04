import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import HeadingBlock from './HeadingBlock'

import data from './HeadingBlock.stories.json'

const propsTab = 'Props'

storiesOf('molecules/blocks/HeadingBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, propsTab)
    const linkText = text('Link Text', data.linkText, propsTab)
    const url = text('Url', data.url, propsTab)

    return <HeadingBlock title={title} linkText={linkText} url={url} />
  })
