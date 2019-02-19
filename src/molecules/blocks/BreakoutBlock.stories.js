import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import BreakoutBlock from './BreakoutBlock'

import data from './BreakoutBlock.stories.json'

const propsTab = 'Props'
const ctaTab = 'CTA'

storiesOf('molecules/blocks/BreakoutBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title *', data.title, propsTab)
    const description = text('Description *', data.description, propsTab)
    const showCta = boolean('Show Call to Action', true, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const url = text('Call to Action URL', data.url, ctaTab)
    return (
      <BreakoutBlock
        title={title}
        description={description}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })
