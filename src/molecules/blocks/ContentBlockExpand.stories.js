import React from 'react'
import { storiesOf } from '@storybook/react'
import {  text } from '@storybook/addon-knobs'

import ContentBlockExpand from './ContentBlockExpand'

import data from './ContentBlockExpand.stories.json'

const propsTab = 'Props'

storiesOf('molecules/blocks/ContentBlockExpand', module)
  

  .addWithJSX('Default', () => {
    const title = text('Title *', data.title, propsTab)
    const kicker = text('Kicker', data.kicker, propsTab)
    const description = text('Description', data.description, propsTab)
    return (
      <ContentBlockExpand
        kicker={kicker}
        title={title}
        description={description}
      />
    )
  })
