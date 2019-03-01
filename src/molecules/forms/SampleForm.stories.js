import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import SampleForm from './SampleForm'

import data from './SampleForm.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/SampleForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, propsTab)
    const submitLabel = text('Submit Button', data.submitLabel, propsTab)
    const cancelLabel = text('Cancel Button', data.cancelLabel, propsTab)
    return (
      <SampleForm
        cancelLabel={cancelLabel}
        submitLabel={submitLabel}
        title={title}
      />
    )
  })
