import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import SubscribeForm from './SubscribeForm'

import data from './SubscribeForm.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/SubscribeForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, propsTab)
    const submitLabel = text('Submit Button', data.submitLabel, propsTab)
    const cancelLabel = text('Cancel Button', data.cancelLabel, propsTab)
    return (
      <SubscribeForm
        cancelLabel={cancelLabel}
        submitLabel={submitLabel}
        title={title}
      />
    )
  })
