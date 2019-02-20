import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import InlineForm from './InlineForm'

import data from './InlineForm.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/InlineForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const submitLabel = text('Submit Label', data.submitLabel, propsTab)
    return <InlineForm submitLabel={submitLabel} />
  })
