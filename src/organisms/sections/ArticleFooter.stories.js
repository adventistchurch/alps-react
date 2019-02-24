import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ArticleFooter from './ArticleFooter'

storiesOf('organisms/sections/ArticleFooter', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    return <ArticleFooter>ArticleFooter content goes here...</ArticleFooter>
  })
