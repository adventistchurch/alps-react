import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import BreakoutBlock from './BreakoutBlock'

const propsTab = 'Props'
const defaults = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  cta: 'Find out more',
  url: 'https://www.adventist.org',
}

storiesOf('molecules/blocks/BreakoutBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', defaults.title, propsTab)
    const description = text('Description', defaults.description, propsTab)
    const showCta = boolean('Show CTA', true, propsTab)
    const cta = text('CTA', defaults.cta, propsTab)
    const url = text('URL', defaults.url, propsTab)
    return (
      <BreakoutBlock
        title={title}
        description={description}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })
