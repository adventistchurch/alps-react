import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import PageHeader from './PageHeader'

import data from './PageHeader.stories.json'

const propsTab = 'Props'

storiesOf('organisms/sections/PageHeader', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title *', data.title, propsTab)
    const url = text('Url', data.url, propsTab)
    const background = object('Background', data.background, propsTab)

    return (
      <PageHeader
        background={background}
        kicker={kicker}
        title={title}
        url={url}
      />
    )
  })
