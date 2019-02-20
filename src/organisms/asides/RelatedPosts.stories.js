import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import RelatedPosts from './RelatedPosts'
import data from './RelatedPosts.stories.json'

const propsTab = 'Props'

storiesOf('organisms/asides/RelatedPosts', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const heading = text('Heading', data.heading, propsTab)
    const linkText = text('LinkText', data.linkText, propsTab)
    const url = text('Url', data.url, propsTab)
    const blocks = object('Blocks *', data.blocks, propsTab)

    return (
      <RelatedPosts
        blocks={blocks}
        heading={heading}
        linkText={linkText}
        url={url}
      />
    )
  })
