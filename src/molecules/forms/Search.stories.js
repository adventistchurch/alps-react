import React from 'react'
import { storiesOf } from '@storybook/react'

import Search from './Search'

import { generalTab } from './Search.knobs'

storiesOf('molecules/forms/Search', module).addWithJSX('Default', () => {
  const props = generalTab()
  return <Search {...props} />
})
