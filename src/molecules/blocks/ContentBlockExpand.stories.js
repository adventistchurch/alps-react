import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import ContentBlockExpand from './ContentBlockExpand'

const propsTab = 'Props'
const defaults = {
  kicker: 'The General Conference.',
  title: 'Coordinates the global ministry of the Seventh-day Adventist Church.',
  description:
    'Is responsible for the spiritual and developmental plans of the church around the world.',
}

storiesOf('molecules/blocks/ContentBlockExpand', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const kicker = text('Kicker', defaults.kicker, propsTab)
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    return (
      <ContentBlockExpand
        kicker={kicker}
        title={title}
        description={description}
      />
    )
  })
