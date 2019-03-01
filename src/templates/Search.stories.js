import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import Search from './Search'

storiesOf('templates/Search', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    return <Search />
  })
