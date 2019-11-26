import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, object} from '@storybook/addon-knobs'

import Search from './Search'

storiesOf('templates/Search', module).addWithJSX('Default', () => {
  return <Search />
})
