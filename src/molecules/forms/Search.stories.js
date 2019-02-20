import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Search from './Search'

import data from './Search.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/Search', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const placeholder = text('Placeholder', data.placeholder, propsTab)
    const title = text('Form Title (hidden)', data.title, propsTab)
    const submitLabel = text(
      'Submit Button (hidden)',
      data.submitLabel,
      propsTab
    )
    return (
      <Search
        placeholder={placeholder}
        submitLabel={submitLabel}
        title={title}
      />
    )
  })
