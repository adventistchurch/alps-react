import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import Search from './Search'

const propsTab = 'Props'
const defaults = {
  action: '/search',
  title: 'Search',
  buttonText: 'Search',
  placeholder: 'Search',
}

storiesOf('molecules/forms/Search', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const action = text('Form Action', defaults.action, propsTab)
    const title = text('Form Title', defaults.title, propsTab)
    const buttonText = text('Description', defaults.buttonText, propsTab)
    const placeholder = text('Description', defaults.placeholder, propsTab)
    return (
      <Search
        action={action}
        title={title}
        buttonText={buttonText}
        placeholder={placeholder}
      />
    )
  })
