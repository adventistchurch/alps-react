import React from 'react'
import { storiesOf } from '@storybook/react'
import { text} from '@storybook/addon-knobs'

import Search from './Search'

import data from './Search.stories.json'

const propsTab = 'Props'

storiesOf('molecules/forms/Search', module)
  

  .addWithJSX('Default', () => {
    const placeholder = text('Placeholder', data.placeholder, propsTab)
    const title = text(
      'Form Title (visible only for screen readers)',
      data.title,
      propsTab
    )
    const submitLabel = text(
      'Submit Button (visible only for screen readers)',
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
